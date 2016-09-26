from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User


# Create your views here.
def login(request):
    users = User.objects.all()
    return render(request, 'login/login.html', {'users' : users})

def shopping(request):
    users = User.objects.all()
    return render(request, 'login/shopping.html', {'users' : users})
