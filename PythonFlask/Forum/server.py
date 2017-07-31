from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import bcrypt
import re # Regex
import urllib2 # reCaptcha
import json # reCaptcha

# reCaptcha keys
reCaptcha_site_key = "6LdTIykUAAAAABoyVWLN9CCxH6DokzBuCa38pD6B" # Not hard coded in HTML for security
reCaptcha_secret_key = "6LdTIykUAAAAABxOyEVzC9vUE4Pdepm7fL5Tz9cP"

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
name_regex = re.compile(r'^[a-zA-Z]+$')
password_regex = re.compile(r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$')
# Must be at least 8 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit

app = Flask(__name__)
mysql = MySQLConnector(app, 'RadioTodayBangladeshInternalForum') # Change db name for new projects
app.secret_key = 'NotSureWhyWeNeedThisButOkay'

# reCaptcha check function
def checkRecaptcha(response, secret_key):
    url = 'https://www.google.com/recaptcha/api/siteverify?'
    url = url + 'secret=' + secret_key
    url = url + '&response=' + response
    try:
        jsonobj = json.loads(urllib2.urlopen(url).read())
        if jsonobj['success']:
            return True
        else:
            return False
    except Exception as e:
        print e
        return False

### LOGIN / REGISTRATION ###

@app.route('/')
def index():
    return render_template('index.html', reCaptcha_site_key = reCaptcha_site_key) # Bc site_key needed on page load for reCaptcha box to appear

@app.route('/create_user', methods = ['POST'])
def create():
    # Validated containers
    validated_first_name = ""
    validated_last_name = ""
    validated_email = ""
    validated_hashed_password = ""

    counter = 0

    # Name validations
    if name_regex.match(request.form['first_name']) and name_regex.match(request.form['last_name']):
        if len(request.form['first_name']) > 1 and len(request.form['last_name']) > 1:
            validated_first_name = request.form['first_name']
            validated_last_name = request.form['last_name']
            counter+=1
        else:
            flash("Name invalid")
    elif not name_regex.match(request.form['first_name']) or name_regex.match(request.form['first_name']):
        flash("Name invalid")
    else:
        flash("Name invalid")

    # Email validation
    if email_regex.match(request.form['email']):
        validated_email = request.form['email']
        counter+=1
    else:
        flash("Email invalid")

    # Password validation
    if password_regex.match(request.form['password']):
        if request.form['password'] == request.form['confirm_password']:
            validated_hashed_password = bcrypt.hashpw(request.form['confirm_password'].encode(), bcrypt.gensalt())
            counter+=1
        else:
            flash("Passwords do not match")
    else:
        flash("Password invalid")

    # reCaptcha check
    reCaptcha_res = request.form.get('g-recaptcha-response')
    if checkRecaptcha(reCaptcha_res, reCaptcha_secret_key):
        counter+=1
    else:
        flash("reCAPTCHA check incomplete")

    # Db insertion post validations
    if counter == 4:
        query = "INSERT INTO users (first_name, last_name, email, password, updated_at, created_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        # MySQL 'INSERT' returns INTEGER w respect to ID, it's just a number. Not the case with 'SELECT', with 'SELECT' we get a DICTIONARY w KEY VALUE pair ( [{u'id': 1L}] )
        data = {
             'first_name' : validated_first_name,
             'last_name' :  validated_last_name,
             'email' : validated_email,
             'password' : validated_hashed_password,
        }
        session['user_id'] = mysql.query_db(query, data) # Executing data insertion AND setting session

        # Getting user data to display on dashboard page
        query = "SELECT * FROM users WHERE id = :user_id"
        data = {
        'user_id': session['user_id']
        }
        print session['user_id'] # 15
        session_user = mysql.query_db(query, data)
        query = "SELECT * FROM categories"
        categories = mysql.query_db(query)
        return redirect('/dashboard')
    else:
        return redirect('/')

@app.route('/login', methods = ['POST'])
def login():
    counter = 0

    # Checking to see if user input email in db
    if len(request.form['email']) < 1:
        flash("Enter email address")
    else:
        query = "SELECT email FROM users WHERE email = :email"
        data = {
            'email' : request.form['email']
        }
        res = mysql.query_db(query, data)
        if len(res) < 1:
            flash("You are not registered")
        else:
        # Checking password with bcrypt
            query = "SELECT password FROM users WHERE email = :email"
            data = {
                'email' : request.form['email']
            }
            password = mysql.query_db(query, data)
            if bcrypt.checkpw(request.form['password'].encode('utf8'),  password[0]['password'].encode('utf8')):
                counter+=1
            else:
                flash("Incorrect password")

    # Db query post validations pass
    if counter == 1:
        query = "SELECT * FROM users WHERE email = :email"
        data = {
        'email': request.form['email']
        }
        session['user_id'] = mysql.query_db(query, data)[0]['id'] # REQUIRED for 'SELECT' bc ID RETURNED is in DICT
        return redirect('/dashboard')
    else:
        return redirect('/')

### THREADS / RESPONSES  ###

@app.route('/dashboard')
def dashboard():
    # Session user information
    query = "SELECT * FROM users WHERE id = :id"
    data = {
    'id': session['user_id']
    }
    session_user = mysql.query_db(query, data)
    # All thread categories for form dropdown
    query = "SELECT * FROM categories"
    categories = mysql.query_db(query)
    # Threads written by current user
    query = "SELECT * FROM threads WHERE user_id = :user_id ORDER BY id DESC"
    data = {
    'user_id': session['user_id']
    }
    user_threads = mysql.query_db(query, data)
    # All threads EXCEPT current user's (IMPORTANT)
    query = "SELECT * FROM threads WHERE user_id != :user_id ORDER BY id DESC"
    data = {
    'user_id': session['user_id']
    }
    all_threads = mysql.query_db(query, data)
    # All users (to display authors of threads and responses)
    query = "SELECT * FROM users"
    all_users = mysql.query_db(query)

    return render_template('dashboard.html', session_user = session_user, categories = categories, user_threads = user_threads, all_threads = all_threads, all_users = all_users)

@app.route('/create_thread', methods = ['POST'])
def create_thread():
    validated_title = ""
    validated_content = ""
    counter = 0

    # Title validation
    if len(request.form['title']) < 3:
        flash("Title must be longer than 2 characters")
    elif len(request.form['title']) > 60:
        flash("Title cannot be longer than 60 characters")
    else:
        validated_title = request.form['title']
        counter+=1

    # Content validation
    if len(request.form['content']) < 120:
        flash("Content must be longer than 120 characters")
    else:
        validated_content = request.form['content']
        counter+=1

    if counter == 2:
        query = "SELECT id FROM users WHERE id = :id"
        data = {
            'id': session['user_id']
        }
        session_user_id = mysql.query_db(query, data)[0]['id']
        # (IMPORTANT) 'INSERT' will ONLY take in user_id in the form after being pulled out of db with the session['user_id'], not sure why

        query = "INSERT INTO threads (title, content, created_at, updated_at, user_id, category_id) VALUES (:title, :content, NOW(), NOW(), :user_id, :category_id)"
        data = {
            'title': validated_title,
            'content': validated_content,
            'user_id': session_user_id, # Foreign key
            'category_id': request.form['category'] # Foreign key
        }
        mysql.query_db(query, data)
        return redirect('/dashboard')
    else:
        return redirect('/dashboard')

@app.route('/show/<thread_id>')
def show(thread_id):
    # Showing thread
    query = "SELECT * FROM threads WHERE id = :thread_id"
    data = {
    'thread_id': thread_id
    }
    thread = mysql.query_db(query, data)
    # Showing all responses for THIS thread
    query = "SELECT * FROM responses WHERE thread_id = :thread_id"
    data = {
    'thread_id': thread_id
    }
    thread_responses = mysql.query_db(query, data)
    # All users (to display authors of threads and responses)
    query = "SELECT * FROM users"
    all_users = mysql.query_db(query)
    # Thread categories
    query = "SELECT * FROM categories"
    categories = mysql.query_db(query)
    return render_template('show.html', thread = thread, thread_responses = thread_responses, all_users = all_users, categories = categories)

@app.route('/create_response/<thread_id>', methods = ['POST'])
def create_response(thread_id):
    validated_response = ""
    counter = 0

    # Response validation
    if len(request.form['content']) < 30:
        flash("Response must be longer than 30 characters")
    else:
        validated_response = request.form['content']
        counter+=1

    if counter == 1:
        query = "SELECT id FROM users WHERE id = :id"
        data = {
            'id': session['user_id']
        }
        session_user_id = mysql.query_db(query, data)[0]['id']
        # (IMPORTANT) 'INSERT' will ONLY take in user_id in the form after being pulled out of db with the session['user_id'], not sure why

        query = "INSERT INTO responses (content, created_at, updated_at, thread_id, user_id) VALUES (:content, NOW(), NOW(), :thread_id, :user_id)"
        data = {
            'content': request.form['content'],
            'thread_id': thread_id, # Foreign key
            'user_id': session_user_id # Foreign key
        }
        mysql.query_db(query, data)
        return redirect('/show/' + thread_id)
    else:
        return redirect('/show/' + thread_id)

### CATEGORY ###

@app.route('/show_category/<category_id>')
def show_category(category_id):
    # Threads in category
    query = "SELECT threads.id, threads.title, threads.content, threads.created_at, users.first_name, users.last_name FROM threads JOIN users ON threads.user_id = users.id WHERE category_id = :category_id ORDER BY threads.id DESC"
    data = {
        'category_id': category_id
    }
    category_threads = mysql.query_db(query, data)

    # Category name
    query = "SELECT name FROM categories WHERE id = :category_id"
    data = {
        'category_id': category_id
    }
    category_name = mysql.query_db(query, data)[0]['name']

    # Responses in threads
    query = "SELECT responses.content, responses.created_at, responses.thread_id, users.first_name, users.last_name FROM responses JOIN users ON responses.user_id = users.id"
    all_responses = mysql.query_db(query)

    return render_template('category.html', category_threads = category_threads, category_name = category_name, all_responses = all_responses)

### LOGOUT ###

@app.route('/logout', methods = ['POST'])
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)
