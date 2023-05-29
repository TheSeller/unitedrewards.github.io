// Get the displayed-text element
var displayedTextElement = document.getElementById("displayed-text");

// Extract the text from the URL
var url = window.location.href;
var text = url.substr(url.lastIndexOf('/') + 1);

// Display the text on the page
displayedTextElement.textContent = decodeURI(text);
