from django.urls import path
from .views import HomeView, ImprintView, DataProtectionView, FindUsView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('impressum', ImprintView.as_view(), name='imprint'),
    path('datenschutz', DataProtectionView.as_view(), name='data-protection'),
    path('anfahrt', FindUsView.as_view(), name='find-us'),
]
