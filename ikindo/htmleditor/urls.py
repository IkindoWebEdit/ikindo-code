from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('editcode', views.editcode, name="script"),
    path('external', views.external),
    re_path(r'^(?P<page>.*.html)$', views.testsite),
]
