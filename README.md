# apskel2
Mobile App Builder (XML + JavaScript Builder of PWA Mobile Apps)

## Files and Folder Structure

As may be intuitive, the "public" folder is where the publically available components of the PWA are compiled to.

  ./public

The "templates" folder is meant to hold a web component set under each sub-folder, the default of which is "onsen" (based on the Onsen UI frontend toolkit).
At present, onsen is also the only web component set but I wanted to ensure extensibility.  Onsen was chosen for its quality, simplicity, and light weight performance.

  ./templates

## XML Standard Attributes

  id = "tag-identifier"

The "id" attribute maps to the same in HTML and is made available to the application, programmatically.

  label = "my label"

The "label" attribute is mean to provide a human readable text for sections and input widgets.

  caption = "tool tip text"

The "caption" attribute is used for quick popup text.  It translates the HTML's "title" attribute.


## XML Structural Tags

  <application name="myapp" title="My App" version="0.1.0">

