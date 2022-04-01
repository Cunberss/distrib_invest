from django.db import models


class Result(models.Model):
    title = models.CharField('Дата результата', max_length=200, default='')
    result = models.TextField('Результат')
    table = models.TextField('Таблица')
    username = models.CharField('Имя пользователя', max_length=200, default='')
# Create your models here.
