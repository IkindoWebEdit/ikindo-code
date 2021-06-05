from django.urls import path

from adminpage import views

urlpatterns = [
    path('', views.adminPage, name="adminpage")
]