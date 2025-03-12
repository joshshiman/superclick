chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "search") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.text)}`;
      chrome.tabs.create({ url: searchUrl });
    }
  });