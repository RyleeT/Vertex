from leads.models import Lead, Task, Column
from rest_framework import viewsets, permissions
from .serializers import (
    LeadSerializer,
    TaskSerializer,
    ColumnSerializer,
    BoardSerializer,
)

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Column Viewset
class ColumnViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ColumnSerializer

    def get_queryset(self):
        return self.request.user.columns.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Board Viewset
class BoardViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = BoardSerializer

    def get_queryset(self):
        return self.request.user.boards.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
