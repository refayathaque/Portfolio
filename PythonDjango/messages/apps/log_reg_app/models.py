from __future__ import unicode_literals
from django.db import models
import bcrypt
import re # Regex
from datetime import datetime # For date of birth check

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
name_regex = re.compile(r'^[a-zA-Z]+$')
password_regex = re.compile(r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$')

class UserManager(models.Manager):
    def registration_validation(self, postData):
        counter = 0
        errors = []
        # Username check
        if len(postData['username']) < 1:
            errors.append("username cannot be blank")
        if len(postData['username']) < 8 and not name_regex.match(postData['username']) and len(postData['username']) > 0:
            errors.append("username must 8 letters or more, and cannot have numbers or symbols")
        if len(postData['username']) < 8 and len(postData['username']) >= 1:
            errors.append("username must be 8 letters or more")
        if not name_regex.match(postData['username']) and len(postData['username']) > 0:
            errors.append("username cannot have numbers or symbols")
        if len(postData['username']) >= 8 and name_regex.match(postData['username']):
            if User.objects.filter(username = postData['username']): # returns list with objects inside so is 'truthy'
                errors.append("username already registered")
            else:
                counter += 1
        # Date of birth check (python format: 2003-02-25)
        if len(postData['date_of_birth']) < 1:
            errors.append("date of birth cannot be blank")
        else:
            dob = postData['date_of_birth']
            dob_converted = datetime.strptime(dob, '%Y-%m-%d')
            age = '%d' % ((datetime.today() - dob_converted).days/365)
            age_converted_to_int = int(age)
            if age_converted_to_int >= 18:
                counter +=1
            else:
                errors.append("must be over 18 to register")
        # Email check
        if len(postData['email']) < 1:
            errors.append("email cannot be blank")
        if not email_regex.match(postData['email']) and len(postData['email']) > 0:
            errors.append("email must be valid")
        if email_regex.match(postData['email']):
            if User.objects.filter(email = postData['email']): # returns list with objects inside so is 'truthy'
                errors.append("email already registered")
            else:
                counter += 1
        # Password check
        if len(postData['password']) < 1:
            errors.append("password cannot be blank")
        if len(postData['c_password']) < 1 and len(postData['password']) > 0:
            errors.append("must confirm password")
        if postData['password'] == postData['c_password']:
            if not password_regex.match(postData['password']) and len(postData['password']) > 0:
                errors.append("password doesn't meet requirements")
            else:
                counter +=1
                hashed_password = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
        if postData['password'] != postData['c_password'] and len(postData['c_password']) > 0 and len(postData['password']) > 0:
            errors.append("passwords don't match")
        # Final check
        if counter == 4:
            User.objects.create(username = postData['username'], date_of_birth = postData['date_of_birth'], email = postData['email'], password = hashed_password)
            return (True, postData['email'])
        else:
            return (False, errors)

    def login_validation(self, postData):
        counter = 0
        errors = []
        # Email check
        if len(postData['email']) < 1:
            errors.append("email cannot be blank")
        if not email_regex.match(postData['email']) and len(postData['email']) > 0:
            errors.append("email must be valid")
        if email_regex.match(postData['email']):
            if User.objects.filter(email = postData['email']): # returns list with objects inside so is 'truthy'
                counter += 1
            else:
                errors.append("email not registered")
        # Password check
        if len(postData['password']) < 1:
            errors.append("password cannot be blank")
        if not password_regex.match(postData['password']) and len(postData['password']) > 0:
            errors.append("password doesn't meet requirements")
        if password_regex.match(postData['password']) and User.objects.filter(email = postData['email']):
            if bcrypt.checkpw(postData['password'].encode(), User.objects.get(email = postData['email']).password.encode()): # ORM METHOD to GET OTHER FIELD values IN ROW using value of ONE FIELD
                counter += 1
            else:
                errors.append("password incorrect")
                print '*** WRONG PASSWORD'
        # Final check
        if counter == 2:
            return (True, postData['email'])
        else:
            return (False, errors)

class User(models.Model):
    username = models.CharField(max_length=255)
    date_of_birth = models.DateTimeField(null=True)
    # ^ set null to 'True' if getting 'non-nullable' errors when migrating
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    def __repr__(self):
        return "*** User - ID: {} USERNAME: {} DATE_OF_BIRTH: {} EMAIL: {} PASSWORD: {}".format(self.id, self.username, self.date_of_birth, self.email, self.password)
