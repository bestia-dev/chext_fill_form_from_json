# chext_fill_form_from_json

**Chrome extension to fill a form from json**  
***version: 1.0  date: 2021-12-17 author: [bestia.dev](https://bestia.dev) repository: [GitHub](https://github.com/bestia-dev/chext_fill_form_from_json)***  

![Hits](https://bestia.dev/webpage_hit_counter/get_svg_image/504794898.svg)

Hashtags: #javascript #chromeextension

It is published on Google WebStore:  
<https://chrome.google.com/webstore/detail/chextfillformfromjson/gdgkhgfgpfhnmiebaedlcaignonmjobe>  

Filling long web forms with repeated data is boring, tedious, time consuming and error prone.  
It is better to save this data as json and use it multiple times to fill the forms.  
Json is a simple text format that is a standard for web communication.  
It is human readable and easy to edit, copy, save, send,...  
The extension supports string and number in json. The extension supports name and ng-reflect-name in html.  

## Security

This extension does not send any data over the network for security and privacy.  
The extension can access only the active Tab.  
It can get a json from an URL that you enter.  
The source code is published on github and anybody can inspect it to see there is no malicious or dangerous code.  

## OpenSource

This is an open source application. It is free of charge as free beer - MIT Licence.  
Anybody can use this application and its source code for their needs.  
Sure I would be happy to drink a free beer for your health. You could donate a beer on <https://paypal.me/LucianoBestia>.

## Example 1 : copy/paste json

Open the json data file:
<https://bestia.dev/chext_fill_form_from_json/form_example.json>  
and copy the json to the clipboard (ctrl+a, ctrl+c).  
Open the webpage:  
<https://bestia.dev/chext_fill_form_from_json/form_example.html>  
start the extension and paste the data from the clipboard.  
Click on `Fill form from json`.  
Done.  

## Example 2 : Fill from URL

Open the webpage:  
<https://bestia.dev/chext_fill_form_from_json/form_example.html>  
start the extension and enter this URL:
<https://bestia.dev/chext_fill_form_from_json/form_example.json>  
Click on `Fill form from URL`.  
Done.
  
## Development

For development you can install it from the local disk.  
In `<chrome://extensions/>` enable `Developer mode` and then use `Load unpacked`.  

## Publishing

Publishing a Chrome Extension to Chrome Web Store is fairly easy.  
<https://chrome.google.com/webstore/developer/dashboard>  
