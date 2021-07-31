from django.urls import path

from visualeditor import views

urlpatterns = [
    path('index/', views.index),
    path('biography/', views.biography),
    path('hoerbeispiele/', views.hoerbeispiele),
    path('repertoire/', views.repertoire),
    path('create_backup/', views.create_backup)
]