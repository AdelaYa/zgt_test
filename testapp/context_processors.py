from .models import City, Settings


def website_settings(request):
    data = {}

    session_city = request.session.get('current_city')

    if session_city:
        current_site = City.objects.filter(title=session_city).first()
    else:
        current_site = City.objects.filter(show_default=True).first() or City.objects.first()

    all_city = City.objects.all()

    data['cities'] = {
        'all': all_city,
        'current': current_site,
    }

    data['site_settings'] = Settings.objects.filter(city=current_site).first()

    return data
