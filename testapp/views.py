from . import models
from django.views.generic import TemplateView


class IndexPageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = models.Product.objects.filter(show_on_index=True)
        context['reviews'] = models.Review.objects.filter(active=True)
        return context
