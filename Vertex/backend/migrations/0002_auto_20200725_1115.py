# Generated by Django 3.0.7 on 2020-07-25 15:15

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='column',
            name='taskIds',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, db_index=True, max_length=4, null=True), null=True, size=None),
        ),
    ]
