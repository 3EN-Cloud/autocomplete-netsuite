![logo](https://raw.githubusercontent.com/3EN-Cloud/autocomplete-netsuite/master/screenshots/logo.png)

An autocomplete package for atom, that autocompletes functions from the NetSuite SuiteScript api.

![demo](http://mwil.so/img/functionDemo.gif)

## Installation

You can install by searching for autocomplete-netsuite in the install tab in the settings view.
More details on the settings view can be read here - https://atom.io/docs/v1.4.0/using-atom-atom-packages

Or to install via command use:

    apm install autocomplete-netsuite

## Features

**SuiteScript v1.0 supported:**

* Support for all nlapi* functions.
* Support for all nlobj* constructors and member functions.

**SuiteScript v2.0 supported:**

* Support for all member functions.
* Support for log and util global objects.
* Support for define and require global functions.
* Support for all `record.Type` enum values. e.g. `record.Type.EMPLOYEE`

**NetSuite File Header comment snippet:**

Type suiteletcomment and hit tab to insert a template for file header, you can then use tab to cycle through the template options:

![suiteletcomment](https://raw.githubusercontent.com/ProductEarthSolutions/autocomplete-netsuite/master/screenshots/suiteletCommentSnippet.gif)
