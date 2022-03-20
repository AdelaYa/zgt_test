from django.db import models


class Product(models.Model):
    show_on_index = models.BooleanField(verbose_name='Показывать на главной', default=False)
    name = models.CharField(max_length=30, verbose_name='Название')
    price = models.PositiveIntegerField(null=True, blank=True, verbose_name='Цена')
    image_small = models.ImageField(verbose_name='Маленькое фото товара', upload_to='static/img/products/', null=True, blank=True)
    image_big = models.ImageField(verbose_name='Большое фото товара', upload_to='static/img/products/', null=True, blank=True)
    count = models.PositiveIntegerField(default=0, null=True, verbose_name='Количество')
    active = models.BooleanField(default=False, verbose_name='Флаг активности')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.name


class City(models.Model):
    show_default = models.BooleanField(default=False, verbose_name='Показывать по умлочанию')
    name = models.CharField(max_length=255, verbose_name='Название города')
    address = models.CharField(max_length=255, verbose_name='Адрес')
    phone = models.CharField(max_length=255, verbose_name='Телефон')

    def get_phone_for_link(self):
        return ''.join([number for number in self.phone if number.isdigit()])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = 'Города'


class Review(models.Model):
    review = models.TextField(verbose_name='Отзыв')
    author = models.CharField(max_length=255, verbose_name='ФИО')
    image = models.ImageField(upload_to='static/img/reviews/', verbose_name='Изображение')
    active = models.BooleanField(default=False, verbose_name='Флаг активности')

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):
        return self.review


class Settings(models.Model):

    # Video block
    video_url = models.CharField(
        max_length=255, verbose_name='Ссылка на видео',
        help_text='Формат ссылки: "https://www.youtube.com/watch?v=otCL-UXvcvo"'
    )

    # Map block
    coords = models.CharField(
        max_length=255, verbose_name='Координаты метки на карте',
        help_text='Формат данных: "55.71, 89.99"'
    )
    balloon_text = models.TextField(verbose_name='Контент балуна на карте')

    # city
    city = models.ForeignKey(
        City, verbose_name='Город', blank=True,
        null=True, related_name='settings',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Настройки для: {self.city.name}'

    class Meta:
        verbose_name = 'Настройка'
        verbose_name_plural = 'Настройки'


