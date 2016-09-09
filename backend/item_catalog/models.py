from __future__ import unicode_literals

from django.db import models


class Category(models.Model):
    """A category of items in the catalog."""

    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)

    class Meta:
        """
        A class to define metadata options.

        https://docs.djangoproject.com/en/1.10/ref/models/options/ for details
        """

        ordering = ('created',)


class Item(models.Model):
    """An item of the catalog."""

    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        """
        A class to define metadata options.

        https://docs.djangoproject.com/en/1.10/ref/models/options/ for details
        """

        ordering = ('created',)
