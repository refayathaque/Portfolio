from __future__ import unicode_literals

from django.db import models

from django.shortcuts import render, redirect

from django.contrib import messages

from datetime import datetime

from ..app1.models import User

class TripManager(models.Manager):

    # Make trip validation
    def make_trip(self, data, session):

        counter = 0
        errors = []

        # Destination validation
        if(len(data['destination']) < 1):
            errors.append('DESTINATION CANNOT BE BLANK!')
            return (False, errors)
        elif Trip.objects.filter(destination = data['destination']):
            errors.append('TRIP ALREADY EXISTS, PICK ANOTHER PLACE!')
            return (False, errors)
        else:
            counter += 1

        # Travel dates validation
        if not data['travel_start'] or not data['travel_end']:
            errors.append('FILL OUT DATE FIELDS!')
            return (False, errors)

        startdate = datetime.strptime(data['travel_start'], '%Y-%m-%d')
        enddate = datetime.strptime(data['travel_end'], '%Y-%m-%d')

        if enddate < startdate:
            errors.append('IMPLAUSIBLE DATES!')
            return (False, errors)
        elif startdate < datetime.now():
            errors.append('TRIP MUST BE START IN THE FUTURE!')
            return (False, errors)
        else:
            counter += 1

        # Final make trip validation check
        if counter == 2:
            Trip.objects.create(created_by = session, destination = data['destination'], travel_start = data['travel_start'], travel_end = data['travel_end'], description = data['description'])
            return (True, data['destination'])
####

# Table for Trip
class Trip(models.Model):
    destination = models.CharField(max_length=100)
    created_by = models.CharField(max_length=100)
    travel_start = models.DateField(auto_now = False)
    travel_end = models.DateField(auto_now = False)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = TripManager()
    def __str__(self):
        return self.destination + " " + self.travel_start + " " + self.travel_end + " " + self.description

# Joined table for User and Trip
class User_Trip(models.Model):
    trip_id = models.ForeignKey(Trip, related_name="trip_name")
    user_id = models.ForeignKey(User, related_name="user_name")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
####
