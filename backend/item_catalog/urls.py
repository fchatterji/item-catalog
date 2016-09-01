from django.conf.urls import url
from item_catalog import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^categories/$', views.CategoryList.as_view()),
    url(r'^categories/(?P<pk>[0-9]+)/$', views.CategoryDetail.as_view()),
    url(r'^items/$', views.ItemList.as_view()),
    url(r'^items/(?P<pk>[0-9]+)/$', views.ItemDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)