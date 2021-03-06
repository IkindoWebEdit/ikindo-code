from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
# Create your views here.


def loginPage(request):
    nexturl = request.GET.get('next')
    if request.user.is_authenticated:
        return redirect('adminpage')
    if request.method == 'GET':
        form = AuthenticationForm()
        if not User.objects.filter(username='testUser').exists():
            User.objects.create_user('testUser', 'test@user.de', 'test')
        return render(request, 'login.html', {'form': form})
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        print("test")
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                if nexturl:
                    return HttpResponseRedirect(nexturl)
                else:
                    return HttpResponseRedirect('/adminpage/')
            else:
                return HttpResponseRedirect(request.get_full_path())
        else:
            messages.error(request, 'Input was invalid!')
            return HttpResponseRedirect(request.get_full_path())

def logoutAction(request):
    logout(request)
    return HttpResponseRedirect('/login/')
