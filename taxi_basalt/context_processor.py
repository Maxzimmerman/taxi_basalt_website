from cookie_consent.models import CookieGroup
from .models import FooterSection

def template_name_processor(request):
    try:
        return {"current_page": request.current_page}
    except:
        return {}


def get_cookie_groups(request):
    cookie_groups = CookieGroup.objects.all()
    return {"cookies": cookie_groups}


def get_footer_section(request):
    footer_section = FooterSection.objects.first()
    return {"footer_section": footer_section}

