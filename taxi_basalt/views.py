from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View


# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, 'taxi_basalt/index.html')
