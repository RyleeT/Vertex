from django.apps import AppConfig


class AccountsConfig(AppConfig):
    name = "Vertex.accounts"

    def ready(self):
        import Vertex.accounts.signals
