from rest_framework import serializers
from item_catalog.models import Category, Item


class CategorySerializer(serializers.ModelSerializer):
	"""Serializer for the category class.

	See http://www.django-rest-framework.org/api-guide/serializers/ for details
	on serializers.
	"""

	class Meta:
		model = Category
		fields = ('id', 'name')


class ItemSerializer(serializers.ModelSerializer):
	"""Serializer for the item class.

	See http://www.django-rest-framework.org/api-guide/serializers/ for details
	on serializers.
	"""

	"""
	Read-only field, gets its value by calling the get_category_name method.
	Adds data to the serialized representation of the object.
	"""
	category_name = serializers.SerializerMethodField()

	def get_category_name(self, obj):
		return obj.category.name

	class Meta:
		model = Item
		fields = ('id', 'name', 'description', 'category', 'category_name')
