# fill form from json

*Things are changing fast. This is the situation on 2019-11-26.*  
Chrome extension to fill a form from json.  
It is published on Google WebStore:  
<https://chrome.google.com/webstore/detail/chextfillformfromjson/gdgkhgfgpfhnmiebaedlcaignonmjobe>  

Filling long web forms with repeated data is boring, time consuming and error prone.  
It is better to save this data as json and use it multiple times to fill the forms.  
Json is a simple text format that is a standard for web communication.  
It is human readable and easy to edit, copy, save, send,...  

## Security

This extension does not send any data over the network for security and privacy.  
The extension can access only the active Tab.  
The source code is published on github and anybody can inspect it to see there is no malicious or dangerous code.  

## OpenSource

This is an open source application. It is free of charge as free beer - MIT Licence.  
Anybody can use this application and its source code for their needs.  
Sure I would be happy to drink a beer for your health. You could donate a beer on <https://www.paypal.com/paypalme/LucianoBestia>.

## Example

For now the extension has permission to modify form data only on this websites:  
`https://www.indianfrro.gov.in/`  
`https://bestia.dev/efrro_form_c_json/`  

If you need it for other sites, contact me, I can simply add them.  

For one example: open the json data file  
<https://github.com/LucianoBestia/chext_fill_form_from_json/raw/master/example/efrro_form_c.json>  
and copy it to the clipboard.  
Then open the webpage  
<https://bestia.dev/efrro_form_c_json/example/efrro_form_c.html>  
start the extension and paste the data from the clipboard.  
Click on `fill form`.  
Done.  

## Development

For development you can install it from the local disk.  
In `<chrome://extensions/>` enable `Developer mode` and then use `Load unpacked`.  

## Publishing

Publishing a Chrome Extension to Chrome Web Store is fairly easy.  
It is easy to add permission for enable the use of the extension for other sites.  
<https://chrome.google.com/webstore/developer/dashboard>  
