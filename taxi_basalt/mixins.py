class WhichPageMixin:
    def dispatch(self, request, *args, **kwargs):
        print(f'patch {super().which_page}')
        self.request.current_page = self.which_page
        return super().dispatch(request, *args, **kwargs)
