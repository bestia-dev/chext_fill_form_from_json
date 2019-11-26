//region: boilerplate
// This helps avoid conflicts in case we inject 
// this script on the same page multiple times
// without reloading.
var injected = injected || (function () {

    // An object that will contain the "methods"
    // we can use from our event script.
    var methods = {};


    // This tells the script to listen for
    // messages from our extension.
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var data = {};
        // If the method the extension has requested
        // exists, call it and assign its response
        // to data.
        if (methods.hasOwnProperty(request.method))
            data = methods[request.method]();
        // Send the response back to our extension.
        sendResponse({ data: data });
        return true;
    });
    //endregion boilerplate


    //the method to read json and fill the form
    methods.fill_form_now = function () {
        //get the json through storage
        try {
            chrome.storage.local.get('fill_form_json',
                function (data) {
                    var jsonObj = JSON.parse(data.fill_form_json);
                    for (var prop in jsonObj) {
                        assignValueToInputs(prop, jsonObj[prop]);
                    }
                }
            );
        }
        catch (err) {
            alert(err.message);
        }
        return true;
    }

    function assignValueToInputs(inputName, newText) {
        if (typeof newText === 'string') {
            //input is text, checkbox, radio
            Array.from(document.querySelectorAll('input')).forEach(el => {
                if (el.name == inputName) {
                    if (el.type == "text") {
                        el.value = newText;
                    }
                    else if (el.type == "radio") {
                        setCheckedValue(el, newText);
                    }
                    else if (el.type == "checkbox") {
                        if (newText == "true") {
                            el.checked = true;
                        } else {
                            el.checked = false;
                        }
                    }
                }
            });
            Array.from(document.querySelectorAll('textarea')).forEach(el => {
                if (el.name == inputName) {
                    el.value = newText;
                }
            });
            Array.from(document.querySelectorAll('select')).forEach(el => {
                if (el.name == inputName) {
                    var val = newText;
                    var opts = el.options;
                    for (var opt, j = 0; opt = opts[j]; j++) {
                        if (opt.value == val) {
                            //alert(opt.value);
                            el.selectedIndex = j;
                            break;
                        }
                    }
                }
            });
        }
    }

    // set the radio button with the given value as being checked
    // do nothing if there are no radio buttons
    // if the given value does not exist, all the radio buttons
    // are reset to unchecked
    function setCheckedValue(radioObj, newValue) {
        if (!radioObj)
            return;
        var radioLength = radioObj.length;
        if (radioLength == undefined) {
            radioObj.checked = (radioObj.value == newValue.toString());
            return;
        }
        for (var i = 0; i < radioLength; i++) {
            radioObj[i].checked = false;
            if (radioObj[i].value == newValue.toString()) {
                radioObj[i].checked = true;
            }
        }
    }

    //region: boilerplate
    return true;
})();
//endregion boilerplate