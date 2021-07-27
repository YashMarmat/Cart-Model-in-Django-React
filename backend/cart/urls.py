from django.urls import path
from . import views


urlpatterns = [
    path('<int:pk>/', views.CartListView.as_view(), name="add-in-cart"),
    path('add-in-cart/', views.CartCreateView.as_view(), name="add-in-cart"),
    path('update-item/<int:pk>/', views.UpdateCartItemQuantity.as_view(), name="update-item"),
    path('delete-item/<int:pk>/', views.DeleteCartItem.as_view(), name="delete-item"),
]