from django.shortcuts import render

BASE_FILE = "base/base.html"

# Create your views here.

def index(request):
    return render(request, 'ikindo/index.html', {'base': BASE_FILE})

def biography(request):
    return render(request, 'ikindo/biography.html', {'base': BASE_FILE})

def hoerbeispiele(request):
    return render(request, 'ikindo/hoerbeispiele.html', {'base': BASE_FILE})

def repertoire(request):
    return render(request, 'ikindo/repertoire.html', {'base': BASE_FILE})
