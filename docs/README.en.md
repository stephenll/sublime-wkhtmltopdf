# [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) plug-in for [Sublime Text](https://www.sublimetext.com)

> Convert HTML to PDF via `wkhtmltopdf` in Sublime Text.

* [Requirements](#requirements)
* [Installation](#installation)
    * [Installation via Package Control](#installation-via-package-control)
* [Usage](#usage)
    * [Settings](#settings)
* [Source Code](#source-code)
    * [License](#license)
    * [Issues](#issues)
* [Donations](#donations)

## Requirements

* This plug-in targets and is tested against the **latest Build** of [Sublime Text](https://www.sublimetext.com), currently requiring **`Build 4065`** or later.
    * (stable channel)
    * (dev channel)
* [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) must be in your `PATH`!

## Installation

Using **Package Control** is not required, but recommended as it keeps your packages (with their dependencies) up-to-date!

### Installation via Package Control

* [Install Package Control](https://packagecontrol.io/installation)
    * Close and reopen Sublime Text after having installed Package Control.
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

```jsonc
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
