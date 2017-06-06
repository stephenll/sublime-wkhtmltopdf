[![Lizenz](https://img.shields.io/github/license/jrappen/sublime-wkhtmltopdf.svg?style=flat-square)](https://github.com/jrappen/sublime-wkhtmltopdf/blob/master/LICENSE)
[![Sublime Text unterstützte Versionen](https://img.shields.io/badge/Sublime%20Text-Build%203124+-orange.svg?style=flat-square)](https://www.sublimetext.com)
[![Downloads Package Control](https://img.shields.io/packagecontrol/dt/wkhtmltopdf.svg?style=flat-square)](https://packagecontrol.io/packages/wkhtmltopdf)
[![Aktuelle Version](https://img.shields.io/github/release/jrappen/sublime-wkhtmltopdf.svg?style=flat-square)](https://github.com/jrappen/sublime-wkhtmltopdf/releases/latest)
[![Spende über PayPal](https://img.shields.io/badge/paypal.me-jrappen-009cde.svg?style=flat-square)](https://www.paypal.me/jrappen)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjrappen%2Fsublime-wkhtmltopdf.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjrappen%2Fsublime-wkhtmltopdf?ref=badge_shield)

## Voraussetzungen

* `wkhtmltopdf` ist als Erweiterung für die **neuste** Sublime Text Version gedacht und erfordert im Moment **Build 3124** oder neuer.
  * [ST3 (stable)](https://www.sublimetext.com/3)
  * [ST3 (dev)](https://www.sublimetext.com/3dev)
* [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) muss in deinem `PATH` sein!

## Installation

Die Verwendung von **Package Control** ist nicht zwingend vorausgesetzt, aber durchaus empfohlen, da es deine Erweiterungen (mit ihren Abhängigkeiten) aktuell hält.

### Installation über Package Control

* [Installiere Package Control](https://packagecontrol.io/installation#st3)
  * Schließe und öffne Sublime Text nach der Installation von Package Control.
* Öffne die Befehlseingabe (`Tools > Command Palette`).
* Wähle `Package Control: Install Package`.
* Suche nach [`wkhtmltopdf` in Package Control](https://packagecontrol.io/packages/wkhtmltopdf) und wähle die Erweiterung aus, um sie zu installieren.

## Verwendung

Verwende eine der folgenden Methoden, um ein HTML Dokument in der aktuellen Ansicht zu einem PDF zu konvertieren, indem du `wkhtmltopdf: Convert to PDF` vom:

* Kontextmenü
* der Befehlseingabe (command palette)

auswählst. Je nach deinen Einstellungen wird dies etwas dauern, für Feedback siehe Statusleiste.

### Einstellungen

Gebe `wkhtmltopdf --extended-help` in die Kommandozeile ein, um nach verfügbaren Optionen zu suchen. Als Standard eingestellt ist hier:

```json
{
    "wkhtmltopdf_cmd_options": "--javascript-delay 10000 --outline-depth 8 --encoding utf-8"
}
```

Die Einstellungen erreichst du über die Befehlseingabe (`Preferences: wkhtmltopdf: Settings`) oder das Menü (`Preferences > Package Settings > wkhtmltopdf > Settings`).

## Quellcode

[github.com/jrappen/sublime-wkhtmltopdf](https://www.github.com/jrappen/sublime-wkhtmltopdf)

### Lizenz

Siehe [`LICENSE`](https://github.com/jrappen/sublime-wkhtmltopdf/blob/master/LICENSE).

### Feedback

Verwende für Feedback bitte die Befehlseingabe (command palette) oder das Menü.

## Spenden

[paypal.me/jrappen](https://www.paypal.me/jrappen)

---

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjrappen%2Fsublime-wkhtmltopdf.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjrappen%2Fsublime-wkhtmltopdf?ref=badge_large)
