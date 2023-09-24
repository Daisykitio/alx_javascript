// Function to handle form submission
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    // Check if required fields are filled
    if (name.trim() === "" || email.trim() === "") {
        // Display an error message
        alert("Please fill in all required fields.");
    } else {
        // Display a success message
        alert("Form submitted successfully!");
        // You can optionally submit the form to a server here using AJAX or other methods
    }
}

// Add an event listener to the form for the "submit" event
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);

