from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
from .mixins import WhichPageMixin
from .models import (HomeSection, ServiceSection,
                     Service, VehicleSection, Vehicle)

# Create your views here.


class HomeView(TemplateView):
    template_name = "taxi_basalt/index.html"
    which_page = "home"

    def get_context_data(self, **kwargs):
        context = super(**kwargs).get_context_data(**kwargs)
        context['home'] = HomeSection.objects.first()
        context['service_sections'] = ServiceSection.objects.prefetch_related('services')
        context['vehicle_sections'] = VehicleSection.objects.prefetch_related('vehicles')
        return context

    def dispatch(self, request, *args, **kwargs):
        request.current_page = "home"
        return super().dispatch(request, *args, **kwargs)


class FindUsView(TemplateView):
    template_name = "taxi_basalt/find_us.html"
    which_page = "find_us"

    def dispatch(self, request, *args, **kwargs):
        request.current_page = "find_us"
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
