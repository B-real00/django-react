from django.db import models
from django.utils import timezone

# Create your models here.


class Info(models.Model):
    
    title = models.CharField(max_length=250)
    image = models.ImageField(upload_to='images/')
    author = models.CharField(max_length=250)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)

    objects = models.Manager()


class HomeInfo(models.Model):
    title =  models.CharField(max_length=250)
    image = models.ImageField(upload_to='images/')
    image1 = models.ImageField(upload_to='images/',default='',blank=True)
    author_image = models.CharField(max_length=250,default='')
    body = models.TextField()
    author = models.CharField(max_length=250)
    publish = models.DateTimeField(default=timezone.now)

    objects = models.Manager()

class Image(models.Model):
    image = models.FileField(upload_to='images/gallery/', blank=True)
    author = models.CharField(max_length=250, default='')

    objects = models.Manager()

