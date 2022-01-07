from django.urls import path

from .views import *

urlpatterns = [
     # login & register users
    path('login/auth/token/', CustomAuthToken.as_view(), name="token-login"),
    path('register/', registration_view, name='register'),
]