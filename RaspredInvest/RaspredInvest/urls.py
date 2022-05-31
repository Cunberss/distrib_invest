import os

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.main, name='main'),
    path('faq/', views.faq, name='faq'),
    path('distribution/', include('appinvest.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path("signup/", include('registration.urls')),
    path('gosha/', views.gosha, name='gosha')
]

urlpatterns += static('/media/Result Files', document_root=os.path.join(settings.BASE_DIR, 'media/Result Files/'))
