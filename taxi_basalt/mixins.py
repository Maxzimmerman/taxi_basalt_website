class WhichPageMixin:
    def dispatch(self, request, *args, **kwargs):
        self.request.current_page = self.which_page
        return super().dispatch(request, *args, **kwargs)
