from django.shortcuts import render, HttpResponse, redirect

from .models import User, Trip, User_Trip

from django.contrib import messages

from sets import Set

def travels(request):

    if request.session['logged_in_user_username']:
        a = set( Trip.objects.all() ) # all trips
        b = set( Trip.objects.filter(trip_name__user_id__username = request.session['logged_in_user_username']).all() ) # user trips
        all_trips_minus_what_users_are_part_of = (a.difference(b))
        context = {
                    'all_trips_minus_what_users_are_part_of' : all_trips_minus_what_users_are_part_of,
                    'all_user_trips' : User_Trip.objects.filter(user_id__username__contains = request.session['logged_in_user_username']),
                    'user_information' : User.objects.filter(username = request.session['logged_in_user_username'])
                    }

    elif request.session['registered_user_username']:

        a = set( Trip.objects.all() ) # all trips
        b = set( Trip.objects.filter(trip_name__user_id__username = request.session['registered_user_username']) ) # user trips
        all_trips_minus_what_users_are_part_of = (a.difference(b))

        context = {
                    'all_trips_minus_what_users_are_part_of' : all_trips_minus_what_users_are_part_of,
                    'all_user_trips' : User_Trip.objects.filter(user_id__username__contains = request.session['registered_user_username']),
                    'user_information' : User.objects.filter(username = request.session['registered_user_username'])
                    }

    return render(request, 'app2/travels.html', context)

def make_trip(request):

    if request.session['registered_user_username']:
        session = request.session['registered_user_username']
    elif request.session['logged_in_user_username']:
        session = request.session['logged_in_user_username']

    results = Trip.objects.make_trip(request.POST, session)

    if results[0]:
        # Adds user to the trip they just made
        if request.session['logged_in_user_username']:
            user_object = User.objects.filter(username = request.session['logged_in_user_username'])
            trip_object = Trip.objects.filter(destination = request.POST['destination'])
            User_Trip.objects.create(trip_id = trip_object[0], user_id = user_object[0])
        elif request.session['registered_user_username']:
            user_object = User.objects.filter(username = request.session['registered_user_username'])
            trip_object = Trip.objects.filter(destination = request.POST['destination'])
            User_Trip.objects.create(trip_id = trip_object[0], user_id = user_object[0])
        return redirect('/app2/travels')

    else:
        for err in results[1]:
            messages.error(request, err)
        return redirect('/app2/add')

def join_trip(request, destination):

    if request.session['logged_in_user_username']:
        user_object = User.objects.filter(username = request.session['logged_in_user_username'])
        trip_object = Trip.objects.filter(destination = destination)
        User_Trip.objects.create(trip_id = trip_object[0], user_id = user_object[0])

        return redirect('/app2/travels')

    elif request.session['registered_user_username']:
        user_object = User.objects.filter(username = request.session['registered_user_username'])
        trip_object = Trip.objects.filter(destination = destination)
        User_Trip.objects.create(trip_id = trip_object[0], user_id = user_object[0])

        return redirect('/app2/travels')

def display_trip(request, destination):

    if request.session['logged_in_user_username']:
        a = set( User.objects.filter(user_name__trip_id__destination = destination) ) # Users in trip
        b = set( User.objects.filter(username = request.session['logged_in_user_username']) ) # Current user
        all_trip_users_minus_current_user = (a.difference(b))

        context = {
                    'trip' : Trip.objects.filter(destination = destination),
                    'all_trip_users_minus_current_user' : all_trip_users_minus_current_user
                    }

    elif request.session['registered_user_username']:
        a = set( User.objects.filter(user_name__trip_id__destination = destination) ) # Users in trip
        b = set( User.objects.filter(username = request.session['registered_user_username']) ) # Current user
        all_trip_users_minus_current_user = (a.difference(b))

        context = {
                    'trip' : Trip.objects.filter(destination = destination),
                    'all_trip_users_minus_current_user' : all_trip_users_minus_current_user
                    }

    return render(request, 'app2/destination.html', context)

def add(request):
    return render(request, 'app2/add.html')

def log_out(request):
    request.session.clear()
    return redirect('/')
