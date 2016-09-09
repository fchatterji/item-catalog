from django.conf.urls import url
from item_catalog import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^categories/$', views.CategoryList.as_view()),
    url(r'^category/(?P<pk>[0-9]+)/$', views.CategoryDetail.as_view()),
    url(r'^items/$', views.ItemList.as_view()),
    url(r'^item/(?P<pk>[0-9]+)/$', views.ItemDetail.as_view()),
]

"""
Returns a URL pattern list which includes format suffix patterns appended to 
each of the URL patterns provided.
See http://www.django-rest-framework.org/api-guide/format-suffixes/ for details
"""
urlpatterns = format_suffix_patterns(urlpatterns)