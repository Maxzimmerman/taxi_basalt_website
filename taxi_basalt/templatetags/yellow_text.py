import re
from django import template

register = template.Library()


@register.filter(name='yellow_text')
def first_part(text):
    words = re.split(r' |/', text)
    print(words[:2])
    return ' '.join(words[:2])


@register.filter(name='normal_text')
def second_part(text):
    words = re.split(r' |/', text)
    print(words[2:])
    return ' '.join(words[2:])
