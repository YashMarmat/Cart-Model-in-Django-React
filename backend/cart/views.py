from .models import Cart
from rest_framework import status
from .serializers import CartSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class CartListView(APIView):
    
    def get(self, request, pk):
        cartData = Cart.objects.filter(user=pk)
        serializer = CartSerializer(cartData, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CartCreateView(APIView):
    
    def post(self, request):
        data = request.data
        filter_user = Cart.objects.filter(user=data["user"])

        try:
            cart_item = filter_user.get(title=data["title"])
            cart_item.quantity += 1
            cart_item.save()

            serializer = CartSerializer(cart_item, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            add_in_cart = {
                "title": data["title"],
                "price": data["price"],
                "quantity": 1,
                "user": data["user"]
            }

            serializer = CartSerializer(data=add_in_cart, many=False)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateCartItemQuantity(APIView):

    def put(self, request, pk):
        data = request.data
        print(data)
        cart_item = Cart.objects.get(id=pk)
        cart_item.quantity = data["quantity"]
        cart_item.save()
        return Response({"detail": "Item Updated successfully"}, status=status.HTTP_200_OK)


class DeleteCartItem(APIView):

    def delete(self, request, pk):
        cart_item = Cart.objects.get(id=pk)
        cart_item.delete()
        return Response({"detail": "Item successfully delted"}, status=status.HTTP_200_OK)