document.getElementById("urlForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Generate a random root URL
  var rootUrl = generateRootUrl();
  
  // Get the entered text
  var textInput = document.getElementById("textInput").value;
  
  // Save the text and root URL to local storage or a database of your choice
  
  // Display the root URL to the user
  document.getElementById("rootUrl").textContent = rootUrl;
  
  // Construct the complete URL with the text input
  var completeUrl = rootUrl + "?textinput=" + encodeURIComponent(textInput);
  
  // Retrieve the text from the complete URL
  fetch(completeUrl)
    .then(response => response.text())
    .then(data => {
      // Display the retrieved text on the webpage
      document.getElementById("retrievedText").textContent = data;
    })
    .catch(error => {
      console.error("Error retrieving text:", error);
    });
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
