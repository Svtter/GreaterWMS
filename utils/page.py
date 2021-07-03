from rest_framework.pagination import PageNumberPagination
from rest_framework.utils.urls import replace_query_param, remove_query_param
from rest_framework.exceptions import APIException

class MyPageNumberPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = "max_page"
    max_page_size = 1000
    page_query_param = 'page'

    def get_previous_link(self):
        if not self.page.has_previous():
            return None
        url = self.request.build_absolute_uri()
        page_number = self.page.previous_page_number()
        ssl_check = str(self.request.META.get('HTTP_ORIGIN')).split(':')[0]
        url_combine = str(url).split(':')
        if len(str(url).split(':')) == 2:
            url = ssl_check + ':' + url_combine[1]
            if page_number == 1:
                return remove_query_param(url, self.page_query_param)
            return replace_query_param(url, self.page_query_param, page_number)
        elif len(str(url).split(':')) == 3:
            url = ssl_check + ':' + url_combine[1] + ':' + url_combine[2]
            if page_number == 1:
                return remove_query_param(url, self.page_query_param)
            return replace_query_param(url, self.page_query_param, page_number)
        else:
            raise APIException({"detail": "Wrong API Url"})

    def get_next_link(self):
        if not self.page.has_next():
            return None
        url = self.request.build_absolute_uri()
        page_number = self.page.next_page_number()
        ssl_check = str(self.request.META.get('HTTP_ORIGIN')).split(':')[0]
        url_combine = str(url).split(':')
        if len(str(url).split(':')) == 2:
            url = ssl_check + ':' + url_combine[1]
            return replace_query_param(url, self.page_query_param, page_number)
        elif len(str(url).split(':')) == 3:
            url = ssl_check + ':' + url_combine[1] + ':' + url_combine[2]
            return replace_query_param(url, self.page_query_param, page_number)
        else:
            raise APIException({"detail": "Wrong API Url"})
