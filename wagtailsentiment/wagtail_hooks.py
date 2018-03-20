"""
Registers the functions for our plugin.
On loading, Wagtail will find this file and execute the contents.
"""
from __future__ import unicode_literals

# Django imports
from django.conf import settings
from django.utils.html import format_html, format_html_join

# Wagtail core imports
from wagtail.core import hooks


@hooks.register('insert_editor_js')
def editor_js():
    """ Adds additional JavaScript files or code snippets to the page editor. """
    js_files = ['wagtailadmin/js/draftail.js','wagtailsentiment.bundle.js']
    js_includes = format_html_join('\n', '<script src="{0}{1}"></script>',
        ((settings.STATIC_URL, filename) for filename in js_files)
    )
    return js_includes + format_html(
        """
        <script></script>
        """
    )
