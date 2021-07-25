from django.shortcuts import render
from django.contrib.auth.decorators import login_required
BASE_FILE = "base/editor_base.html"
from pages import templates

# Create your views here.

@login_required
def index(request):
    return render(request, 'ikindo/index.html', {'base': BASE_FILE})

@login_required
def biography(request):
    return render(request, 'ikindo/biography.html', {'base': BASE_FILE})

@login_required
def hoerbeispiele(request):
    return render(request, 'ikindo/samples.html', {'base': BASE_FILE})

@login_required
def repertoire(request):
    return render(request, 'ikindo/repertoire.html', {'base': BASE_FILE})

