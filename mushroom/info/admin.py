from django.contrib import admin
from .models import Info, HomeInfo, Image

# Register your models here.

@admin.register(Info)
class InfoAdmin(admin.ModelAdmin):
    list_display = ('title', 'author')
    list_filter = ('publish', 'title')
    search_fields = ('title', 'body')
    date_hierarchy = 'publish'



@admin.register(HomeInfo)
class HomeInfoAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'image', 'image1')

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('author', 'image')
