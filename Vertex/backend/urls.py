from rest_framework import routers
from .api import LeadViewSet, TaskViewSet, ColumnViewSet, BoardViewSet

router = routers.SimpleRouter()
router.register("api/leads", LeadViewSet, "leads")
router.register("api/tasks", TaskViewSet, "tasks")
router.register("api/columns", ColumnViewSet, "columns")
router.register("api/boards", BoardViewSet, "boards")

urlpatterns = router.urls
