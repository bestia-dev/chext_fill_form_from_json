//region: boilerplate
let button_send_json = document.getElementById('button_send_json');

button_send_json.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        fill_form_now(tabs[0]);
    });
};

// Execute the inject.js in a tab and call a method,
// passing the result to a callback function.
function injectedMethod(tab, method, callback) {
    chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function() {
        chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });
}
//endregion boilerplate

//call the injected function fill_form_now
function fill_form_now(tab) {
    //pass json through storage
    chrome.storage.local.set({ fill_form_json: document.getElementById("json").value },
        function() {
            injectedMethod(tab, 'fill_form_now', function(response) {
                return true;
            })
        });
}


/* File url read */

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

fileurl_read();

let button_from_fileurl_read = document.getElementById('button_from_fileurl_read');
button_from_fileurl_read.onclick = function() {
    fileurl_read(true);
}

function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

function fileurl_read(getJson) {
    var from_fileurl_input = document.getElementById('from_fileurl');
    var localstorage_key_data_name = 'chext_fill_form_from_json_from_fileurl'; // contains the key name
    var fileUrl = getJson ? from_fileurl_input.value : 'https://';

    // Get url setted in localStorage
    var from_fileurl = localStorage.getItem(localstorage_key_data_name);

    if (!from_fileurl || getJson) {
        // Set default url where read json data
        localStorage.setItem(localstorage_key_data_name, fileUrl);
        from_fileurl = fileUrl;
    }

    // Set url in the input
    from_fileurl_input.value = from_fileurl;// Set in input key name

    if (from_fileurl && isValidHttpUrl(from_fileurl)) {
        getJSON(from_fileurl,
            function(err, data) {
                document.getElementById('json').value = err ? JSON.stringify(err) : JSON.stringify(data);

                if (!err && data) {
                    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                        fill_form_now(tabs[0]);
                    });
                }
            }
        );
    } else if (from_fileurl && getJson) {
        alert('Invalid URL');
    }
}