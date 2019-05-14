---
footer: ISC Licensed | Copyright © 2017 Johannes Rappen
---

<div id="readme"></div>

[![License](https://img.shields.io/github/license/jrappen/sublime-wkhtmltopdf.svg?style=flat-square)](https://github.com/jrappen/sublime-wkhtmltopdf/blob/master/LICENSE)
[![Sublime Text minimum required version](https://img.shields.io/badge/Sublime%20Text-Build%203124+-orange.svg?style=flat-square)](https://www.sublimetext.com)
[![Downloads Package Control](https://img.shields.io/packagecontrol/dt/wkhtmltopdf.svg?style=flat-square)](https://packagecontrol.io/packages/wkhtmltopdf)
[![GitHub last commit](https://img.shields.io/github/last-commit/jrappen/sublime-wkhtmltopdf.svg?style=flat-square)](https://github.com/jrappen/sublime-wkhtmltopdf/commits/master)
[![Latest tag](https://img.shields.io/github/tag/jrappen/sublime-wkhtmltopdf.svg?style=flat-square)](https://github.com/jrappen/sublime-wkhtmltopdf/tags)
[![Donate via PayPal](https://img.shields.io/badge/paypal.me-jrappen-009cde.svg?style=flat-square)](https://www.paypal.me/jrappen)

## Requirements

* This plug-in targets and is tested against the **latest Build** of Sublime Text, currently requiring `Build 3124` or later.
  * [ST3 (stable)](https://www.sublimetext.com/3)
  * [ST3 (dev)](https://www.sublimetext.com/3dev)
* [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) must be in your `PATH`!

## Installation

Using **Package Control** is not required, but recommended as it keeps your packages (with their dependencies) up-to-date!

### Installation via Package Control

* [Install Package Control](https://packagecontrol.io/installation#st3)
  * Close and reopen ST3 after having installed Package Control.
* Open the Command Palette (`Tools > Command Palette`).
* Choose `Package Control: Install Package`.
* Search for [`wkhtmltopdf` on Package Control](https://packagecontrol.io/packages/wkhtmltopdf) and select to install.

## Usage

Use either of the following two methods to convert an HTML document in the active view to PDF by selecting `wkhtmltopdf: Convert to PDF` from the:

* context menu
* command palette

Depending upon your settings this takes a while, see status bar for feedback.

### Settings

Run `wkhtmltopdf --extended-help` via the command line to check for available options. The default is:

```json
//  Packages/wkhtmltopdf/.sublime/settings/wkhtmltopdf.sublime-settings

{
    "wkhtmltopdf.cmd_options": "--javascript-delay 10000 --outline-depth 8 --encoding utf-8"
}
```

You can adjust them via the command palette (`Preferences: wkhtmltopdf: Settings`) or the main menu (`Preferences > Package Settings > wkhtmltopdf > Settings`).

## Source Code

[github.com/jrappen/sublime-wkhtmltopdf](https://www.github.com/jrappen/sublime-wkhtmltopdf)

### License

See [`LICENSE`](https://github.com/jrappen/sublime-wkhtmltopdf/blob/master/LICENSE).

### Issues

Please use the command palette or main menu to report an issue.

## Donations

[paypal.me/jrappen](https://www.paypal.me/jrappen)
