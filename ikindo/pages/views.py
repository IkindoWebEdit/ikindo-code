from django.shortcuts import render
from django.views.decorators.http import require_safe

BASE_FILE = "base/base.html"

# Create your views here.


@require_safe
def index(request):
    return render(request, 'ikindo/index.html', {'base': BASE_FILE})


@require_safe
def biography(request):
    return render(request, 'ikindo/biography.html', {'base': BASE_FILE})


@require_safe
def hoerbeispiele(request):
    return render(request, 'ikindo/hoerbeispiele.html', {'base': BASE_FILE})


@require_safe
def repertoire(request):
    return render(request, 'ikindo/repertoire.html', {'base': BASE_FILE})
