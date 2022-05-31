import json
import os

from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def main(request):
    return render(request, 'mainpage.html')


def faq(request):
    return render(request, 'faq.html')


@csrf_exempt
def gosha(request):
    if request.method == 'GET':
        return render(request,'gosha.html')

    elif request.method == 'POST':
        with open('templates/gosha.html', 'w') as file:
            file.write(request.body.decode('UTF-8'))
        return render(request,'gosha.html')
