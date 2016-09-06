from rest_framework import serializers
from item_catalog.models import Category, Item


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ('id', 'name')


class ItemSerializer(serializers.ModelSerializer):

	category_name = serializers.SerializerMethodField()

	def get_category_name(self, obj):
		return obj.category.name

	class Meta:
		model = Item
		fields = ('id', 'name', 'description', 'category', 'category_name')

