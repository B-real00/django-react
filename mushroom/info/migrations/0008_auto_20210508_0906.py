# Generated by Django 3.1.6 on 2021-05-08 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0007_delete_homeimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='homeinfo',
            name='author_image',
            field=models.CharField(blank=True, max_length=250),
        ),
        migrations.AddField(
            model_name='homeinfo',
            name='image1',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
