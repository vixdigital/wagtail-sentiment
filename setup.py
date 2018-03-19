#!/usr/bin/env python
"""
Installs the wagtail-sentiment plugin that adds sentiment analysis
functionality to rich text editors.
"""

from setuptools import setup, find_packages

setup(name='wagtail-sentiment',
      version='0.1.0b',
      description='Apply sentiment analysis to rich text content.',
      url='http://github.com/vixdigital/wagtail-sentiment',
      author='VIX Digital',
      author_email='info@vix.digital',
      license='MIT',
      packages=find_packages(),
      include_package_data=True,
      install_requires=[
          'wagtail>=2.0',
      ],
      zip_safe=False)
