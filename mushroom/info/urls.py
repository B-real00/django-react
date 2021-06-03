from django.urls import path
from . import views

from django.conf.urls import include, url
from django.views.static import serve

app_name = 'info'
urlpatterns = [
    path('', views.InfoListCreate.as_view(), name='index_list' ),
    path('home/', views.HomeInfoCreate.as_view(), name='home_info'),
    path('gallery/', views.ImageCreate.as_view(), name='image_info')
]