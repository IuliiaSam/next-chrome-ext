// background page - an invisible page that holds the main logic of the extension
chrome.devtools.network.onRequestFinished.addListener(request => {
  console.log(request.request.url);
});
