from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from pages import templates
from api.models import Backup
from api.serializers import BackupSerializer

BASE_FILE = "base/editor_base.html"

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

@login_required
def create_backup(request):
    pageTitle = request.POST.get("title")
    pageContent = request.POST.get("content")
    try:
        backup = Backup(title = pageTitle, content = pageContent)
        backup.save()
        for backup in Backup.objects.all():
            serializer = BackupSerializer(backup)
            print(serializer.data['content'])
    except:
        return HttpResponse(status=400)
    return HttpResponse(status=201)
