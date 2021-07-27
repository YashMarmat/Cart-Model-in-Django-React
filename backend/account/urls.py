from django.urls import path
from . import views


urlpatterns = [
    # user
    path('register/', views.UserRegisterView.as_view(), name="register-page"),
    path('login/', views.MyTokenObtainPairView.as_view(), name="login-page"),
]