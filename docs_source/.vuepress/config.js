const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/sublime-wkhtmltopdf/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'wkhtmltopdf',
      description: ''
    },
    '/de/': {
      lang: 'de-DE',
      title: 'wkhtmltopdf',
      description: ''
    }
  },
  themeConfig: {
    repo: 'jrappen/sublime-wkhtmltopdf',
    editLinks: true,
    docsDir: 'docs_source',
    locales: {
      '/': {
        label: 'English',
        selectText: '🌐 Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated'
      },
      '/de/': {
        label: 'Deutsch',
        selectText: '🌐 Sprachen',
        editLinkText: 'Ändere diese Seite auf GitHub',
        lastUpdated: 'Zuletzt aktualisiert'
      }
    }
  },
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom']
  ]
})
