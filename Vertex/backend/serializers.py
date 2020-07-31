from rest_framework import serializers
from Vertex.backend.models import Lead, Task, Column, Board

# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class ColumnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Column
        fields = "__all__"


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = "__all__"
