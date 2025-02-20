from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from .mixins import WhichPageMixin

# Create your views here.


class HomeView(TemplateView):
    template_name = "taxi_basalt/index.html"
    which_page = "home"

    def dispatch(self, request, *args, **kwargs):
        request.current_page = "home"
        return super().dispatch(request, *args, **kwargs)

class ImprintView(TemplateView):
    template_name = 'taxi_basalt/imprint.html'
    which_page = "imprint"

    def dispatch(self, request, *args, **kwargs):
        request.current_page = "imprint"
        return super().dispatch(request, *args, **kwargs)


class DataProtectionView(TemplateView):
    template_name = "taxi_basalt/data-protection.html"
    which_page = "data-protection"

    def dispatch(self, request, *args, **kwargs):
        request.current_page = "data-protection"
        return super().dispatch(request, *args, **kwargs)
