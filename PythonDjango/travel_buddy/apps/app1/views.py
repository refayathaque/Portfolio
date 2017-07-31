from django.shortcuts import render, HttpResponse, redirect

from .models import User

from django.contrib import messages

def index(request):
    return render(request, 'app1/index.html')

def login(request):
    results = User.objects.login(request.POST)
    if results[0]:
        request.session['logged_in_user_username'] = results[1]
        request.session['registered_user_username'] = None
        print 'in session: ' + request.session['logged_in_user_username'] # refayathaque
        return redirect('/app2/travels')
    else:
        for err in results[1]: # (False, errors)
            messages.error(request, err)
        return redirect('/')

def registration(request):
    results = User.objects.registration(request.POST)
    if results[0]:
        request.session['registered_user_username'] = results[1]
        request.session['logged_in_user_username'] = None
        print 'in session: ' + request.session['registered_user_username']
        return redirect('/app2/travels')
    else:
        for err in results[1]:
            messages.error(request, err)
        return redirect('/')

def travels(request):
    return redirect('/app2/travels')
