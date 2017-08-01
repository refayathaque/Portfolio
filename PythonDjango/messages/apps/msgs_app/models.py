from __future__ import unicode_literals
from django.db import models
from ..log_reg_app.models import User
# ^ Gets access for views.py to models in other apps

class MessageManager(models.Manager):
    # def message_validation(self, postData):
    def send(self, message, user_from, user_to):
        print 'MESSAGE: ', message, 'FROM USER_ID: ', user_from, 'TO USER_ID: ', user_to
        if len(message) < 1:
            return False, ['message cannot be blank'] # Tuple
        else:
            message = Message.messageManager.create(message = message, user_from_id = user_from, user_to_id = user_to)
            return True, message # Tuple

class Message(models.Model):
    message = models.TextField(max_length=1000)
    user_from = models.ForeignKey(User, related_name="from_user") # 'related_name' used to get from USER table to MESSAGE table, used in template's for loop getting 'SENT' messages
    user_to = models.ForeignKey(User, related_name="to_user") # 'related_name' used to get from USER table to MESSAGE table, used in template's for loop getting 'RECEIVED' messages
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = MessageManager()
    messageManager = MessageManager()
    def __repr__(self):
        return "*** Message - ID: {} MESSAGE: {} FROM: {} TO: {}".format(self.id, self.message, self.user_from.username, self.user_to.username)
        # ^ 'self.user_from.username' works because of FK

# Related name useful for REVERSE LOOK UP
# This is an excercise on SELF JOINs on the USER
