from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^travels$', views.travels),
    url(r'^make_trip$', views.make_trip),
    url(r'^add$', views.add),
    url(r'^join_trip/(?P<destination>\w+)$', views.join_trip),
    url(r'^join_trip/(?P<destination>\w+\s\w+)$', views.join_trip),
    url(r'^display_trip/(?P<destination>\w+)$', views.display_trip),
    url(r'^display_trip/(?P<destination>\w+\s\w+)$', views.display_trip),
    url(r'^log_out$', views.log_out)
]
