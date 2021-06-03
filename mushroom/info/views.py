from .models import Info, HomeInfo, Image
from .serializers import InfoSerializer, HomeSerializer, ImageSerializer
from rest_framework import generics


class InfoListCreate(generics.ListCreateAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
   
class HomeInfoCreate(generics.ListCreateAPIView):
   queryset = HomeInfo.objects.all()
   serializer_class = HomeSerializer

class ImageCreate(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    pagination_class = None


