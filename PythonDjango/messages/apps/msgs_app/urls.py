from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^log_out$', views.log_out, name='log_out'),
    # url(r'^new/$', views.new),
    url(r'^create$', views.create, name='send_message'),
    url(r'^show/(?P<user_id>\d+)$', views.show, name='show_conversation'),
    # url(r'^(?P<number>\d+)/$', views.show),
    # url(r'^(?P<number>\d+)/edit$', views.edit),
    # url(r'^(?P<number>\d+)/delete$', views.destroy)
    url(r'^create_msg_in_conv/(?P<user_id>\d+)$', views.create_msg_in_conv, name='send_msg_in_conversation')
]

# 'Named Routes' implemented above
