document.addEventListener('mousedown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.button === 0) {
    if (event.target.tagName !== 'A') {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(searchUrl, '_blank'); 
        event.preventDefault(); 
      }
    }
  }
});
