from django.urls import path
from . import views

urlpatterns = [
    path('/', views.tip_form, name='tip_form'),
    path('', views.tip_form, name='tip_form'),

]
