# Generated by Django 3.1.6 on 2021-04-16 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0002_info_publish'),
    ]

    operations = [
        migrations.AlterField(
            model_name='info',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]
