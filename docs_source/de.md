# [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) Erweiterung für [Sublime Text](https://www.sublimetext.com)

## Voraussetzungen

* `wkhtmltopdf` ist als Erweiterung für die **neuste Version** von [Sublime Text](https://www.sublimetext.com) gedacht und erfordert im Moment `Build 4050` oder neuer.
  * (stable channel)
  * (dev)
* [`wkhtmltopdf`](http://wkhtmltopdf.org/downloads.html) muss in deinem `PATH` sein!

## Installation

Die Verwendung von **Package Control** wird nicht zwingend vorausgesetzt, aber durchaus empfohlen, da es deine Erweiterungen (mit ihren Abhängigkeiten) aktuell hält.

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
//  Packages/wkhtmltopdf/.sublime/settings/wkhtmltopdf.sublime-settings

{
    "wkhtmltopdf.cmd_options": "--javascript-delay 10000 --outline-depth 8 --encoding utf-8"
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
