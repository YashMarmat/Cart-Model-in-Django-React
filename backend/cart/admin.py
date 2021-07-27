from django.contrib import admin
from .models import Cart


class CartModelAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "price", "quantity", "user")


admin.site.register(Cart, CartModelAdmin)