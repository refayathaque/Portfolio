from __future__ import unicode_literals

from django.db import models

from django.shortcuts import render, redirect

from django.contrib import messages

import re

full_name = re.compile(r'^([a-z A-Z])*$')

at_sign = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):

    # Login validation
    def login(self, data):

        counter = 0
        errors = []

        # Username validation
        if(len(data['username']) < 1):
            errors.append('USERNAME CANNOT BE BLANK!')

            return (False, errors)

        else:

            if User.objects.filter(username = data['username']): # returns list with objects inside so is 'truthy'
                counter += 1

            else:
                errors.append("USERNAME NOT VALID!")

        # Password validation
        if(len(data['password']) < 8 and len(data['password']) >= 1):
            errors.append("PASSWORD NOT VALID!")

        elif(len(data['password']) < 1):
            errors.append("PASSWORD CANNOT BE BLANK!")

        else:

            if User.objects.filter(password = data['password']):
                counter += 1

            else:
                errors.append("PASSWORD NOT VALID!")

        # Final login validation check
        if counter == 2:
            logged_in_user_object = User.objects.get(username = data['username'])
            print logged_in_user_object # Refayat Haque refayathaque

            return (True, data['username'])

        else:

            return (False, errors)
####

    # Registration validation
    def registration(self, data):

        counter = 0
        errors = []

        # Name validation w/ regex
        if len(data['name']) > 2 and full_name.match(data['name']):
            counter += 1

        elif data['name'].isalpha() and len(data['name']) < 2:
            errors.append('NAME NOT VALID!')

        elif len(data['name']) < 1:
            errors.append('NAME CANNOT BE BLANK!')

        # Username validation
        if data['username'].isalpha() and len(data['username']) > 2:
            counter += 1

        elif data['username'].isalpha() and len(data['userame']) < 2:
            errors.append('USERNAME NOT VALID!')

        elif len(data['username']) < 1:
            errors.append('USERNAME CANNOT BE BLANK!')

        elif User.objects.filter(username = data['username']):
            errors.append("YOU CANNOT REGISTER AGAIN!")

        elif at_sign.match(data['username']):
            errors.append("USERNAME CANNOT BE AN EMAIL!")

        # Password validation
        if(len(data['password']) >= 8):
            counter += 1

        elif(len(data['password']) < 8 and len(data['password']) >= 1):
            errors.append("PASSWORD IS TOO SHORT!")

        elif(len(data['password']) < 1):
            errors.append("PASSWORD CANNOT BE BLANK!")

        if(data['password'] == data['password_confirmation'] and len(data['password']) > 0 and len(data['password_confirmation']) > 0 ):
            counter += 1

        elif(data['password'] != data['password_confirmation']):
            errors.append('PASSWORDS DO NOT MATCH!')

        # Final registration validation check
        if counter == 4:
            User.objects.create(name = data['name'], username = data['username'], password = data['password'])
            registered_user_object = User.objects.get(username = data['username'])
            print registered_user_object # Refayat Haque refayathaque

            return (True, data['username'])

        else:

            return (False, errors)
####

# Table for User
class User(models.Model):
    name = models.CharField(max_length=45)
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __str__(self):
        return self.name + " " + self.username
####
