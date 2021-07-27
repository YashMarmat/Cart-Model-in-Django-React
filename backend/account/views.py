from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import authentication, permissions
from rest_framework.decorators import permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from rest_framework_simplejwt.views import TokenObtainPairView # for login page
from django.contrib.auth.hashers import check_password
from .serializers import (
    UserSerializer, 
    UserRegisterTokenSerializer, 
)



# register user
class UserRegisterView(APIView):
    """To Register the User"""

    def post(self, request, format=None):
        data = request.data # holds username and password (in dictionary)
        username = data["username"]
        email = data["email"]

        check_username = User.objects.filter(username=username).count()
        check_email =  User.objects.filter(email=email).count()

        if check_username:
            message = "A user with that username already exist!"
            return Response({"detail": message}, status=status.HTTP_403_FORBIDDEN)
        if check_email:
            message = "A user with that email address already exist!"
            return Response({"detail": message}, status=status.HTTP_403_FORBIDDEN)
        else:
            user = User.objects.create(
                username=username,
                email=email,
                password=make_password(data["password"]),
            )
            serializer = UserRegisterTokenSerializer(user, many=False)
            return Response(serializer.data)


# login user (customizing it so that we can see fields like username, email etc as a response 
# from server, otherwise it will only provide access and refresh token)
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserRegisterTokenSerializer(self.user).data

        for k, v in serializer.items():
            data[k] = v
        
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer