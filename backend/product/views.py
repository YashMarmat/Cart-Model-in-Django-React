from .models import Product
from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductsListSerializer


class ProductsListView(APIView):
    
    def get(self, request):
        obj = Product.objects.all()
        serializer = ProductsListSerializer(obj, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        