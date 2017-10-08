#!/usr/bin/env python
# coding: utf-8


import sublime
import sublime_plugin
import webbrowser


PKG_NAME = __package__.split('.')[0]


class WkhtmltopdfChangelog(sublime_plugin.TextCommand):

    def run(self, edit):
        v = sublime.active_window().new_file()
        v.set_name('%s: CHANGELOG' % (PKG_NAME))
        v.settings().set('gutter', False)
        v.insert(edit, 0, sublime.load_resource('Packages/%s/docs/CHANGELOG.md' % (PKG_NAME)))
        v.set_syntax_file('Packages/Markdown/Markdown.sublime-syntax')
        v.set_read_only(True)
        v.set_scratch(True)


class WkhtmltopdfDocs(sublime_plugin.TextCommand):

    def run(self, edit, language='en-US'):
        if language == 'de-DE':
            webbrowser.open_new_tab('https://jrappen.github.io/sublime-wkhtmltopdf/#/de-DE/')
        else:
            webbrowser.open_new_tab('https://jrappen.github.io/sublime-wkhtmltopdf')


class WkhtmltopdfDonations(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab('https://www.paypal.me/jrappen')


class WkhtmltopdfIssues(sublime_plugin.TextCommand):

    def run(self, edit):
        webbrowser.open_new_tab('https://github.com/jrappen/sublime-wkhtmltopdf/issues')
