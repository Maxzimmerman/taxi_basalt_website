from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from .mixins import WhichPageMixin

# Create your views here.


class HomeView(WhichPageMixin, TemplateView):
    template_name = "taxi_basalt/index.html"
    which_page = "home"


class ImprintView(WhichPageMixin, TemplateView):
    template_name = 'taxi_basalt/imprint.html'
    which_page = "imprint"


class DataProtectionView(WhichPageMixin, TemplateView):
    template_name = "taxi_basalt/data-protection.html"
    which_page = "data-protection"
