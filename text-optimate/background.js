// background.js
chrome.storage.local.get('text', function(data) {
  if (data.text) {
    console.log('Stored text:', data.text);
  }
});
