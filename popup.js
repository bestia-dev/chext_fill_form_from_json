//region: biolerplate
let button_send_json = document.getElementById('button_send_json');

button_send_json.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        fill_form_now(tabs[0]);
    });
};

// Execute the inject.js in a tab and call a method,
// passing the result to a callback function.
function injectedMethod(tab, method, callback) {
    chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function () {
        chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });
}
//endregion boilerplate

//call the injected function fill_form_now
function fill_form_now(tab) {
    //pass json through storage
    chrome.storage.local.set({ fill_form_json: document.getElementById("json").value },
        function () {
            injectedMethod(tab, 'fill_form_now', function (response) {
                return true;
            })
        });
}