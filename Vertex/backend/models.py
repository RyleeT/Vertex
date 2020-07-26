from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)


class Task(models.Model):
    title = models.CharField(max_length=255)
    owner = models.ForeignKey(
        User, related_name="tasks", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)


class Column(models.Model):
    title = models.CharField(max_length=30)
    taskIds = ArrayField(models.CharField(max_length=4), blank=True,)
    owner = models.ForeignKey(
        User, related_name="columns", on_delete=models.CASCADE, null=True
    )


class Board(models.Model):
    columnOrder = ArrayField(models.PositiveIntegerField(blank=True))
    owner = models.ForeignKey(
        User, related_name="boards", on_delete=models.CASCADE, null=True
    )
