#!/usr/bin/env python
# coding: utf-8


import sublime

from .thread_progress import *
from .wkhtmltopdf import *


def plugin_loaded():
    wkhtmltopdf.plugin_loaded()
