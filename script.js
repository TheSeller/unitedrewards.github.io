document.getElementById("urlForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Generate a random root URL
  var rootUrl = generateRootUrl();
  
  // Get the entered text
  var textInput = document.getElementById("textInput").value;
  
  // Save the text and root URL to local storage or a database of your choice
  
  // Display the root URL to the user
  document.getElementById("rootUrl").textContent = rootUrl;
});

// Function to generate a random root URL
function generateRootUrl() {
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var length = 10;
  var rootUrl = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    rootUrl += characters.charAt(randomIndex);
  }
  
  return rootUrl;
}
