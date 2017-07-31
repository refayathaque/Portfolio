from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^registration$', views.registration),
    url(r'^travels$', views.travels) # Hack to get app2 /travels route to work
]
