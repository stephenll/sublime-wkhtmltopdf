#!/usr/bin/env python
# coding: utf-8


import os
import sublime
import sublime_plugin
import subprocess
from threading import Thread

from .thread_progress import ThreadProgress


PKG_NAME = __package__.split('.')[0]
DEFAULT_OPTIONS = '--javascript-delay 10000 --outline-depth 8 --encoding utf-8'


def status_msg(msg):
    sublime.status_message('{}: {}'.format(msg, PKG_NAME))


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
                       'Converting HTML to PDF ...',
                       'Successfully created "{}".'.format(os.path.split(path_pdf)[1]))

    def html_to_pdf(self, path_html, path_pdf):
        settings = sublime.load_settings('{}.sublime-settings'.format(PKG_NAME))
        cmd_options = settings.get('wkhtmltopdf.cmd_options',
                                   DEFAULT_OPTIONS)
        subprocess.call('wkhtmltopdf {} {} {}'.format(cmd_options, path_html, path_pdf),
                        shell=True)

    def is_visible(self):
        return self.view.settings().get('syntax').startswith('Packages/HTML/')
