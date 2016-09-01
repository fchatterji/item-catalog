from rest_framework import serializers
from item_catalog.models import Category, Item


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ('id', 'name')


class ItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = Item
		fields = ('id', 'name', 'description', 'category')

