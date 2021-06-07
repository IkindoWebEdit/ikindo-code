from django.urls import path

from pages import views

urlpatterns = [
    path('', views.index, name="index"),
    path('biography/', views.biography, name="biography"),
    path('hoerbeispiele/', views.hoerbeispiele, name="hoerbeispiele"),
    path('repertoire/', views.repertoire, name="repertoire")
]