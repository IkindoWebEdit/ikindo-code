from django.shortcuts import render

# Create your views here.


def adminPage(request):
    context = {}
    return render(request, 'ikindo/adminpage.html', context)
