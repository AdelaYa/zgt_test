from django.contrib import admin
from .models import Product, City, Review, Settings


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_filter = ['show_on_index']


@admin.register(Settings)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['name']
    fieldsets = (
        ('Видео блок', {
            'fields': ['video_url']
        }),
        ('Карта', {
            'fields': ['coords', 'balloon_text']
        }),
        ('Информация о филлиале', {
            'fields': ['city']
        })
    )



@admin.register(Review)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['author', 'review']


@admin.register(City)
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['name']



