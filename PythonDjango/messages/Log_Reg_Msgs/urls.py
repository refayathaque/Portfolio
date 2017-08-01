from django.conf.urls import url, include

urlpatterns = [
    url(r'^', include('apps.log_reg_app.urls', namespace='log_reg')),
    url(r'^msgs/', include('apps.msgs_app.urls', namespace='msgs'))
]
