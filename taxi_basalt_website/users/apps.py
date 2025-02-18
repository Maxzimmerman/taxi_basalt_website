import contextlib

from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "taxi_basalt_website.users"
    verbose_name = _("Users")

    def ready(self):
        with contextlib.suppress(ImportError):
            import taxi_basalt_website.users.signals  # noqa: F401
