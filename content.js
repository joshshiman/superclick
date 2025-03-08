document.addEventListener('mousedown', function(event) {
    // Check for Command (metaKey) + Shift + Left Click (button 0)
    if (event.metaKey && event.shiftKey && event.button === 0) {
      // Ensure the click is not on a link to avoid conflicts
      if (event.target.tagName !== 'A') {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
          // Send a message to the background script with the selected text
          chrome.runtime.sendMessage({ action: "search", text: selectedText });
          event.preventDefault(); // Optional: Prevents default actions
        }
      }
    }
  });