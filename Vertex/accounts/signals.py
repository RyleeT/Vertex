from django.db.models.signals import post_save
from django.contrib.auth.models import User
from backend.models import Lead, Task, Column, Board


def create_defaults(sender, instance, created, **kwargs):
    if created:
        # Default leads
        Lead.objects.create(
            name="Rylee Thompson",
            email="rylee.t.thompson@gmail.com",
            message="Thanks for checking out my app!",
            owner=instance,
        )

        # Default tasks
        # Task.objects.create(
        #     title="Add delete task function", owner=instance,
        # )

        # Default columns
        Column.objects.create(
            title="Backlog", taskIds=[], owner=instance,
        )
        Column.objects.create(
            title="Selected for Development", taskIds=[], owner=instance,
        )
        Column.objects.create(
            title="In Progress", taskIds=[], owner=instance,
        )
        Column.objects.create(
            title="Done", taskIds=[], owner=instance,
        )

        # Default boards
        columns = Column.objects.filter(owner=instance.id).values_list("pk", flat=True)
        contents = []

        for column in columns:
            contents.append(column)

        Board.objects.create(
            columnOrder=contents, owner=instance,
        )


post_save.connect(create_defaults, sender=User)
