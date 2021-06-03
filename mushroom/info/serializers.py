from rest_framework import serializers
from .models import Info, HomeInfo, Image

class InfoSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
            max_length = None, use_url=True
        )

    class Meta:
        model = Info
        fields = ('id', 'title', 'body', 'author', 'image')


class HomeSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
            max_length = None, use_url=True,
        )

    class Meta:
        model = HomeInfo
        fields = ( 'id', 'title', 'body', 'author', 'image', 'image1','author_image' )


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
            max_length = None, use_url=True,
        )
    class Meta:
        model = Image
        fields = ('id', 'image', 'author')