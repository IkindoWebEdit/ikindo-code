from django.shortcuts import render

BASE_FILE = "base/base.html"

# Create your views here.

def index(request):
    return render(request, 'ikindo/index.html', {'base': BASE_FILE})

def biography(request):
    return render(request, 'ikindo/biography.html', {'base': BASE_FILE})

def samples(request):
    return render(request, 'ikindo/samples.html', {'base': BASE_FILE})

def repertoire(request):
    return render(request, 'ikindo/repertoire.html', {'base': BASE_FILE})

def compositions(request):
    return render(request, 'ikindo/compositions.html', {'base': BASE_FILE})

def news(request):
    return render(request, 'ikindo/news.html', {'base': BASE_FILE})

def shop(request):
    return render(request, 'ikindo/shop.html', {'base': BASE_FILE})