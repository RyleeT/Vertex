# Generated by Django 3.0.7 on 2020-07-25 15:21

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20200725_1115'),
    ]

    operations = [
        migrations.AlterField(
            model_name='column',
            name='taskIds',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=4), blank=True, size=None),
        ),
    ]
