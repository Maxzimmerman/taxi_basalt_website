def template_name_processor(request):
    print(getattr(request, 'template_name', None))
    return {"current_page": getattr(request, "template_name", None)}
