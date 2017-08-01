from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login$', views.login, name='login_processing'),
    url(r'^registration$', views.registration, name='registration_processing')
    # url(r'^(?P<number>\d+)/$', views.show),
    # url(r'^(?P<number>\d+)/edit$', views.edit),
    # url(r'^(?P<number>\d+)/delete$', views.destroy)
]

# 'Named Routes' implemented above
