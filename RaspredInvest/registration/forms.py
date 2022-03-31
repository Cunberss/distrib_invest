from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from django import forms


class RegisterUserForm(UserCreationForm):
    username = forms.CharField(label='Логин',widget=forms.TextInput(attrs={'class': 'form-input'}))
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
    password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput(attrs={'class': 'form-input'}))
    email = forms.CharField(label='Почта', widget=forms.EmailInput(attrs={'class': 'form-input'}))
    class Meta:
        model = User
        fields = ('username','password1','password2','email')
        widgets = {
            'username': forms.TextInput(attrs={'class':'form-input'}),
            'password1': forms.PasswordInput(attrs={'class': 'form-input'}),
            'password2': forms.PasswordInput(attrs={'class': 'form-input'}),
            'email': forms.EmailInput(attrs={'class': 'form-input'})
        }