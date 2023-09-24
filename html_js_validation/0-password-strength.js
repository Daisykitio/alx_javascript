// Function to validate the password
function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    var passwordStrength = 0;

    // Check the password length
    if (password.length >= 8) {
        passwordStrength++;
    }

    // Check for at least one uppercase letter
    if (/[A-Z]/.test(password)) {
        passwordStrength++;
    }

    // Check for at least one lowercase letter
    if (/[a-z]/.test(password)) {
        passwordStrength++;
    }

    // Check for at least one numeric digit
    if (/[0-9]/.test(password)) {
        passwordStrength++;
    }

    // Check for at least one special character
    if (/[^A-Za-z0-9]/.test(password)) {
        passwordStrength++;
    }

    // Display error message if the password is weak
    if (passwordStrength < 5) {
        errorElement.textContent = "Password is too weak. Please follow the password criteria.";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = ""; // Clear any previous error message
        return true; // Allow form submission
    }
}

// Add event listener to the form to call validatePassword when submitted
document.getElementById("passwordForm").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

