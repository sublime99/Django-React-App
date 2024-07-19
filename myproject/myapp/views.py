from django.shortcuts import render


from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')


from rest_framework.decorators import api_view
from rest_framework.response import Response


from django.conf import settings
from django.templatetags.static import static

@api_view(['GET'])
def about_us(request):
    data = {
        'title': 'About Us',
        'content': 'This is the about us page content. We are a company that...',
          
    }
    return Response(data)

@api_view(['GET'])
def contact_us(request):
    data = {
        'title': 'Contact Us',
        'content': 'This is the contact us page content. You can contact us at...',
          
    }
    return Response(data)


