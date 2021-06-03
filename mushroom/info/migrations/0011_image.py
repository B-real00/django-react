# Generated by Django 3.1.6 on 2021-05-08 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0010_auto_20210508_0916'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, upload_to='images/gallery/')),
                ('author', models.CharField(default='', max_length=250)),
            ],
        ),
    ]
