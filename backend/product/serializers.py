from rest_framework import serializers
from .models import Product


class ProductsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'price']