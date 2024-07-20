// content.js
document.addEventListener('input', function(event) {
  if (event.target.tagName === 'TEXTAREA' || (event.target.tagName === 'INPUT' && event.target.type === 'text')) {
    const text = event.target.value;
    chrome.storage.local.set({ text: text });
  }
});
