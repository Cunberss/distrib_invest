from django.http import HttpResponse
from django.shortcuts import render

def main(request):
    return render(request, 'mainpage.html')


def faq(request):
    return render(request, 'faq.html')
