## [2.5.1](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.5.0...2.5.1) (2020-04-28)


### Bug Fixes

* **mdpopups:** Remove passing `cmd` to `mdpopups` ([49f787d](https://github.com/jrappen/sublime-wkhtmltopdf/commit/49f787d8371e6844668c8b4767670b2ca1448e77))



# [2.5.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.4.0...2.5.0) (2020-04-27)


### Bug Fixes

* **Python:** Properly unload sublime plugin ([e2a448a](https://github.com/jrappen/sublime-wkhtmltopdf/commit/e2a448a79b8f4244fa1481437f3d0e5ca685fc18))


### Features

* **Python:** Use new mdpopups API ([9d81874](https://github.com/jrappen/sublime-wkhtmltopdf/commit/9d818741acac6596cf61f2e716e83f7f75f30359))



# [2.4.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.3.0...2.4.0) (2020-03-09)

### Features

* **Python:** Use Py3.3 until PkgCtrl handles 3.8 ([e1f989e](https://github.com/jrappen/sublime-wkhtmltopdf/commit/e1f989e7618495b8d7adcfb4c2e74e279b145b7d))

# [2.3.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.2.0...2.3.0) (2020-03-09)

### Features

* **Package Control:** Add PkgCtrl channel file ([1b69103](https://github.com/jrappen/sublime-wkhtmltopdf/commit/1b69103e4479e65a800bef6a186676f3b4e0392d))

### Bug Fixes

* **docs:** Use 4 spaces indentation for list items ([c6d7a5e](https://github.com/jrappen/sublime-wkhtmltopdf/commit/c6d7a5e824c26b451aa0abf1c08e698ac2f4d009))
* **node:** Bump engines and devDependencies ([3530843](https://github.com/jrappen/sublime-wkhtmltopdf/commit/35308431c52637180d50d82d8ac82cd51606d8cf))
* **docs:** Use `jsonc` for codeblocks ([5f2e6ae](https://github.com/jrappen/sublime-wkhtmltopdf/commit/5f2e6aeb3528d0089bcef75f9b2d00978d201b27))
* **python:** Fix wkthmltopdf_open_docs ([d4b3876](https://github.com/jrappen/sublime-wkhtmltopdf/commit/d4b38762373ffc42a48f6ffebd740580c3716a86))
* **python:** Use window commands not text commands ([35cf0cd](https://github.com/jrappen/sublime-wkhtmltopdf/commit/35cf0cd343b3f9e42a771882eb824a73988ce462))

# [2.2.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.1.0...2.2.0) (2020-02-06)

### Features

* **docs:** Switch to new html sheets (ST4065+) ([6ad4dc2](https://github.com/jrappen/sublime-wkhtmltopdf/commit/6ad4dc230008015fee5b0d83c8db2e4ff19a9a9a))

### Bug Fixes

* **docs:** Fix indentation for displaying docs ([cd78ba8](https://github.com/jrappen/sublime-wkhtmltopdf/commit/cd78ba89386122836dc33299f4e4932fa6a40e90))
* **docs:** Update docs ([c4c662e](https://github.com/jrappen/sublime-wkhtmltopdf/commit/c4c662e195963df5eeed0dddae2ef60aa23279d1))
* **docs:** Update package version in template ([dacf6e9](https://github.com/jrappen/sublime-wkhtmltopdf/commit/dacf6e9906765f044c859f4a5dda5c4ffbd01144))
* **node:** Update engines and devDependencies ([5c1f2d3](https://github.com/jrappen/sublime-wkhtmltopdf/commit/5c1f2d36dbe3839a1e784218332c261476da3f14))

# [2.1.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/2.0.0...2.1.0) (2019-12-05)

### Features

* **docs:** Ship offline docs with crowbook ([b15cc9e](https://github.com/jrappen/sublime-wkhtmltopdf/commit/b15cc9e8ca0ed1cfa0dd2f296b9cdfc122d382f9))

# [2.0.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/1.4.0...2.0.0) (2019-11-14)

### BREAKING CHANGES

* **core:** Requires Sublime Text Build 4050 or later.

### Features

* **core:** Update for ST4 ([69d6f0b](https://github.com/jrappen/sublime-wkhtmltopdf/commit/69d6f0bc939084e9fb7d4f3ce2f81ac9e625337d))

### Bug Fixes

* **docs:** Update Code of Conduct to v1.4.1 ([46829e8](https://github.com/jrappen/sublime-wkhtmltopdf/commit/46829e8))
* **docs:** Fix display of docs sidebar ([2fd3430](https://github.com/jrappen/sublime-wkhtmltopdf/commit/2fd3430))
* **docs:** Fix docs setup for vuepress ([f6e01bb](https://github.com/jrappen/sublime-wkhtmltopdf/commit/f6e01bb))

# [1.4.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/1.3.0...1.4.0) (2019-05-08)

### Bug Fixes

* Fix inconsistent badge styling in docs ([0c2e7fd](https://github.com/jrappen/sublime-wkhtmltopdf/commit/0c2e7fd))
* **docsify:** force 'coverpage: false' for docsify ([13e5474](https://github.com/jrappen/sublime-wkhtmltopdf/commit/13e5474))
* **dependencies:** Remove sublime_lib dependency ([b5f94e7](https://github.com/jrappen/sublime-wkhtmltopdf/commit/b5f94e7))
* **sublime dependency:** Fix import of sublime_lib ([0ef75c7](https://github.com/jrappen/sublime-wkhtmltopdf/commit/0ef75c7))
* **sublime_lib:** Explicit use of sublime_lib ([ca9fdc8](https://github.com/jrappen/sublime-wkhtmltopdf/commit/ca9fdc8))
* **sublime_lib:** Fix subscription to settings change ([534e683](https://github.com/jrappen/sublime-wkhtmltopdf/commit/534e683))
* **docsify:** Do not use broken custom theme as search doesn't work ([9fcc5b1](https://github.com/jrappen/sublime-wkhtmltopdf/commit/9fcc5b1))
* **docsify-theme:** Fix js URL to enable fetching of map ([f72e76f](https://github.com/jrappen/sublime-wkhtmltopdf/commit/f72e76f))
* **docsify-theme:** Customize theme style to fix search plugin ([ceb4fec](https://github.com/jrappen/sublime-wkhtmltopdf/commit/ceb4fec))
* **JavaScript helper:** Fix minor issue with release script ([06dede4](https://github.com/jrappen/sublime-wkhtmltopdf/commit/06dede4))
* **docs:** Fix readability issues by switching docsify theme to custom ([c71f348](https://github.com/jrappen/sublime-wkhtmltopdf/commit/c71f348))
* **docs:** Fix badges in English README ([7d142bf](https://github.com/jrappen/sublime-wkhtmltopdf/commit/7d142bf))

# [1.3.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/1.2.0...1.3.0) (2019-02-15)

### Features

* **JavaScript helpers:** Move from gulp tasks to plain JavaScript via npm ([355c510](https://github.com/jrappen/sublime-wkhtmltopdf/commit/355c510))
* **Sublime Text:** Support ST3189+ while making use of sublime_lib ([c8f3228](https://github.com/jrappen/sublime-wkhtmltopdf/commit/c8f3228))

### Bug Fixes

* **docs:** Fix minor issues while simplifying docs URLs ([ccdb26a](https://github.com/jrappen/sublime-wkhtmltopdf/commit/ccdb26a))
* **JavaScript helper:** Add release script reference to package.json ([1676b25](https://github.com/jrappen/sublime-wkhtmltopdf/commit/1676b25))
* **Sublime Text:** Remove old messages for Package Control ([c163584](https://github.com/jrappen/sublime-wkhtmltopdf/commit/c163584))
* **docs:** Fix display of emoji flag chars on Package Control website ([46845b7](https://github.com/jrappen/sublime-wkhtmltopdf/commit/46845b7))
* **docs:** Move script tags into body ([8ad5be9](https://github.com/jrappen/sublime-wkhtmltopdf/commit/8ad5be9))
* **Python:** Remove unnecessary import of sublime module ([325f77b](https://github.com/jrappen/sublime-wkhtmltopdf/commit/325f77b))

# [1.2.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/1.1.0...1.2.0) (2017-10-19)

### Features

* **gitattributes:** Add a \*.gitattributes file ([356927a](https://github.com/jrappen/sublime-wkhtmltopdf/commit/356927a))

### Bug Fixes

* **docsify:** Removed service worker ([76fee4b](https://github.com/jrappen/sublime-wkhtmltopdf/commit/76fee4b))
* **menu:** Fix how menu entries are sorted ([30050b4](https://github.com/jrappen/sublime-wkhtmltopdf/commit/30050b4))

# [1.1.0](https://github.com/jrappen/sublime-wkhtmltopdf/compare/1.0.0...1.1.0) (2017-10-15)

### Features

* **Python:** Enable reloading of settings upon change ([915cb76](https://github.com/jrappen/sublime-wkhtmltopdf/commit/915cb76))
* added `.github/CODE_OF_CONDUCT`
* added `.github/CODEOWNERS`
* **docs:** update to work with latest docsify version ([15e30db](https://github.com/jrappen/sublime-wkhtmltopdf/commit/15e30db))

### Bug Fixes

* **docs:** Fix presentation of docs via docsify ([58b732b](https://github.com/jrappen/sublime-wkhtmltopdf/commit/58b732b))
* **settings:** Rename wkhtmltopdf settings ([e0c96e5](https://github.com/jrappen/sublime-wkhtmltopdf/commit/e0c96e5))
* **npm:** version ([d9355c8](https://github.com/jrappen/sublime-wkhtmltopdf/commit/d9355c8))
* **npm**: fixed package version
* **docs**: fixed base path for edit page links
* **docs:** Fixed docs to hide coverpage ([a9e6a09](https://github.com/jrappen/sublime-wkhtmltopdf/commit/a9e6a09))
* **python:** fixed path to CHANGELOG resource ([d41be49](https://github.com/jrappen/sublime-wkhtmltopdf/commit/d41be49))

### Chores

* **code**: Gradual improvements to code quality. ([a767fb1](https://github.com/jrappen/sublime-wkhtmltopdf/commit/a767fb1))
* **navbar**: Add mergeNavbar setting ([1b7b879](https://github.com/jrappen/sublime-wkhtmltopdf/commit/1b7b879))

# 1.0.0 (2017-03-31)
