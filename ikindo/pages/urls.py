from django.urls import path

from pages import views

urlpatterns = [
    path('', views.index, name="index"),
    path('biography/', views.biography, name="biography"),
    path('samples/', views.samples, name="samples"),
    path('repertoire/', views.repertoire, name="repertoire"),
    path('compositions/', views.compositions, name="compositions"),
    path('news/', views.news, name="news"),
    path('shop/', views.shop, name="shop"),
    path('impressum/', views.impressum, name="impressum")
]