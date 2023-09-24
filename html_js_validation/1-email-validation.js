// Function to validate the email format
function validateEmail() {
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");

    // Regular expression for a standard email format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = ""; // Clear any previous error message
        return true; // Allow form submission
    }
}

// Add event listener to the form to call validateEmail when submitted
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if email format is not valid
    }
});

