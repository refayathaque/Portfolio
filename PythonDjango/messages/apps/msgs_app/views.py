from django.shortcuts import render, redirect
from .models import User, Message
from django.contrib import messages
from django.core.urlresolvers import reverse

def index(request):
    users = User.objects.exclude(id = request.session['user_id']) # Users MINUS user in session
    user = User.objects.get(id = request.session['user_id']) # User in session
    sent_messages = user.from_user.all() # REVERSE LOOK UP, getting messages SENT by user in session
    received_messages = user.to_user.all() # REVERSE LOOK UP, getting messages RECEIVED by user in session
    for i in sent_messages:
        users = users.exclude(id = i.user_to.id) # REVERSE LOOK UP, excluding USER_TO (user sent to) based on their ID
        # 'i.user_to.id' has '.id' and not '_id' or '__id', be mindful of this...
        # Exclude function is REDEFINING 'users' list, by RETURNING list WITHOUT users we SENT MESSAGES to
    for i in received_messages:
        users = users.exclude(id = i.user_from.id) # REVERSE LOOK UP, excluding USER_FROM (user received from) based on their ID
        # 'i.user_to.id' has '.id' and not '_id' or '__id', be mindful of this...
        # Exclude function is REDEFINING 'users' list, by RETURNING list WITHOUT users we RECEIVED MESSAGES from
    # *** 'users' list gets updated THREE times, 1. has all users MINUS self, 2. has users MINUS those we SENT to, 3. has users MINUS those we RECEIVED from
    context = {
        'session_user' : User.objects.get(id = request.session['user_id']),
        # REVERSE LOOK UP implemented here with 'received' and 'sent' messages
        # 'session_username' : User.objects.get(id = request.session['user_id']).username, if we wanted JUST the username
        'users' : users
    }
    return render(request, 'msgs_app/index.html', context)

def log_out(request):
    del request.session['user_id']
    print '*** IN SESSION? ', 'user_id' in request.session
    return redirect(reverse('log_reg:index'))

def create(request):
    validation_tuple = Message.messageManager.send(request.POST['message'], request.session['user_id'], request.POST['user_to'])
    print validation_tuple
    if validation_tuple[0] == False:
        for error in validation_tuple[1]:
            messages.error(request, error)
    return redirect(reverse('msgs:index'))
    # else:
    #     return redirect(reverse('msgs:index'))

def show(request, user_id):
    print user_id
    sent_messages = Message.messageManager.filter(user_from__id = request.session['user_id']).filter(user_to__id = user_id)
    # When querying directly to model use DUNDERSCORE for FOREIGN KEYs!
    received_messages = Message.messageManager.filter(user_to__id = request.session['user_id']).filter(user_from__id = user_id)
    # When querying directly to model use DUNDERSCORE for FOREIGN KEYs!
    conversation = [msg for msg in sent_messages] + [msg for msg in received_messages]
    # ^ PYTHON LIST CONSTRUCTOR - taking each message out of the two list and putting them together in another list
    conversation.sort(key = lambda x: x.created_at)
    # Lambda is an anonymous one line function in Python, here we are sorting messages by time
    context = {
        'user_id' : user_id,
        'conversation' : conversation,
        'session_user' : User.objects.get(id = request.session['user_id'])
    }
    return render(request, 'msgs_app/show.html', context)

def create_msg_in_conv(request, user_id):
    print user_id
    validation_tuple = Message.messageManager.send(request.POST['message'], request.session['user_id'], user_id)
    print validation_tuple
    if validation_tuple[0] == False:
        for error in validation_tuple[1]:
            messages.error(request, error)
    return redirect(reverse('msgs:show_conversation', kwargs={'user_id':user_id}))
    # else:
    #     return redirect(reverse('msgs:show_conversation', kwargs={'user_id':user_id}))
