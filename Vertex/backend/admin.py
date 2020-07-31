from django.contrib import admin
from .models import Lead, Task, Column, Board

# Register your models here.
admin.site.register(Lead)
admin.site.register(Task)
admin.site.register(Column)
admin.site.register(Board)
