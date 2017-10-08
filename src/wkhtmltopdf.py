#!/usr/bin/env python
# coding: utf-8


import os
import sublime
import sublime_plugin
import subprocess
from threading import Thread

from .thread_progress import ThreadProgress


PKG_NAME = __package__.split('.')[0]


def status_msg(msg):
    sublime.status_message('%s: %s' % (msg, PKG_NAME))


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
                       'Successfully created "%s".' % os.path.split(path_pdf)[1])

    def html_to_pdf(self, path_html, path_pdf):
        settings = sublime.load_settings('%s.sublime-settings' % (PKG_NAME))
        cmd_options = settings.get('wkhtmltopdf_cmd_options',
                                   '--javascript-delay 10000 --outline-depth 8 --encoding utf-8')
        subprocess.call('wkhtmltopdf %s %s %s' % (cmd_options, path_html, path_pdf),
                        shell=True)

    def is_visible(self):
        return self.view.settings().get('syntax').startswith('Packages/HTML/')
