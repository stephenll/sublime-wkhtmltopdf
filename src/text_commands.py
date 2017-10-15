#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
import webbrowser


PKG_NAME = __package__.split('.')[0]
URL_DOCS = 'https://jrappen.github.io/sublime-wkhtmltopdf'
URL_PAYPAL = 'https://www.paypal.me/jrappen'
URL_ISSUES = 'https://github.com/jrappen/sublime-wkhtmltopdf/issues'


class WkhtmltopdfChangelog(sublime_plugin.TextCommand):

    def run(self, edit):
        v = sublime.active_window().new_file()
        v.set_name('{}: CHANGELOG'.format(PKG_NAME))
        v.settings().set('gutter', False)
        v.insert(edit, 0, sublime.load_resource('Packages/{}/docs/CHANGELOG.md'.format(PKG_NAME)))
        v.set_syntax_file('Packages/Markdown/Markdown.sublime-syntax')
        v.set_read_only(True)
        v.set_scratch(True)


class WkhtmltopdfDocs(sublime_plugin.TextCommand):

    def run(self, edit, language='en-US'):
        if language == 'de-DE':
            webbrowser.open_new_tab('{}/#/de-DE/'.format(URL_DOCS))
        else:
            webbrowser.open_new_tab(URL_DOCS)


class WkhtmltopdfDonations(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab(URL_PAYPAL)


class WkhtmltopdfIssues(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab(URL_ISSUES)
