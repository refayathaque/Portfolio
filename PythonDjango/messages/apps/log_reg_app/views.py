from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'log_reg_app/index.html')

def registration(request):
    validation_tuple = User.objects.registration_validation(request.POST)
    if validation_tuple[0] == True:
        request.session['user_id'] = User.objects.get(email=validation_tuple[1]).id # ORM METHOD to GET OTHER FIELD values IN ROW using value of ONE FIELD
        print '*** CREATED & LOGGEDIN! SESSION ID : ', request.session['user_id']
        return redirect(reverse('msgs:index'))
    else:
        for error in validation_tuple[1]:
            messages.error(request, error)
        return redirect(reverse('log_reg:index'))

def login(request):
    validation_tuple = User.objects.login_validation(request.POST)
    if validation_tuple[0] == True:
        request.session['user_id'] = User.objects.get(email = validation_tuple[1]).id
        print '*** LOGGEDIN! SESSION ID : ', request.session['user_id']
        return redirect(reverse('msgs:index'))
    else:
        for error in validation_tuple[1]:
            messages.error(request, error)
        return redirect(reverse('log_reg:index'))
