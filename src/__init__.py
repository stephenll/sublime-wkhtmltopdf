#!/usr/bin/env python
# coding: utf-8


import sublime

from .thread_progress import *
from .wkhtmltopdf import *


def plugin_loaded():
    VERSION = int(sublime.version())
    if 3189 <= VERSION:
        wkhtmltopdf.plugin_loaded()
