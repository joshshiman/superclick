chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "search") {
      // Construct the Google search URL with the selected text
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.text)}`;
      // Create a new tab with the search URL
      chrome.tabs.create({ url: searchUrl });
    }
  });