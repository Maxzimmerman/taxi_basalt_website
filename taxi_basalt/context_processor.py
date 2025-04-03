def template_name_processor(request):
    try:
        return {"current_page": request.current_page}
    except:
        return {}

