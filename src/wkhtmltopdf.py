#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin

import os
import subprocess
from threading import Thread

from sublime_lib import NamedSettingsDict, ResourcePath
from .thread_progress import ThreadProgress


PKG_NAME = __package__.split('.')[0]
PKG_PREF = None
DEFAULT_OPTIONS = '--javascript-delay 10000 --outline-depth 8 --encoding utf-8'


def status_msg(msg):

    sublime.status_message('{}: {}'.format(PKG_NAME, msg))


def load_settings(reload=False):

    try:
        global PKG_PREF
        PKG_PREF = sublime_lib.NamedSettingsDict(PKG_NAME)
        PKG_PREF.subscribe(
            sublime_lib.ResourcePath(
                'Packages/{}/.sublime/settings/{}.sublime-settings'
                .format(PKG_NAME, PKG_NAME)
            ).read_bytes(),
            load_settings(reload=True)
        )
    except Exception as e:
        print(e)

    if reload:
        status_msg('Reloaded settings on change.')


def plugin_loaded():

    load_settings()


class Wkhtmltopdf(sublime_plugin.TextCommand):

    def run(self, edit):
        path_html = self.view.file_name()
        if not path_html:
            status_msg('Missing file path.')
            return
        if not path_html.lower().endswith('.html'):
            status_msg('File does not have an HTML extension.')
            return
        path_pdf = os.path.splitext(path_html)[0] + '.pdf'
        thread = Thread(target=self.html_to_pdf, args=(path_html, path_pdf))
        thread.start()
        ThreadProgress(thread,
                       '{}: Converting HTML to PDF ...'.format(PKG_NAME),
                       '{}: Successfully created "{}".'.format(PKG_NAME, os.path.split(path_pdf)[1]))

    def html_to_pdf(self, path_html, path_pdf):
        cmd_options = PKG_PREF.get('wkhtmltopdf.cmd_options',
                                   DEFAULT_OPTIONS)
        subprocess.call('wkhtmltopdf {} {} {}'.format(cmd_options, path_html, path_pdf),
                        shell=True)

    def is_visible(self):
        return self.view.settings().get('syntax').startswith('Packages/HTML/')
