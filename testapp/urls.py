from django.urls import path
from . import views
from . import api

urlpatterns = [
    path('', views.IndexPageView.as_view(), name='index'),
    path('api/change-city/', api.ChangeSessionCityView.as_view(), name='change_city'),
]
