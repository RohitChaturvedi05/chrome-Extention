

$(document).ready(function () {
  console.log("Ext Lodded");

  $("#btnOpen").click(function () {
    chrome.tabs.create({ 'url': chrome.extension.getURL('ticket.html') }, function (tab) {
      // Tab opened.
    });
  });
  $("#btnBook").click(function () {
    chrome.tabs.executeScript(null, { file: "background.js" });
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript(null, { file: "background.js" });
      }
    })

  })
})