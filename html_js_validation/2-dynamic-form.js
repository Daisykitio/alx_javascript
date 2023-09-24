// Function to generate dynamic input fields based on the selected value
function generateInputFields(selectedValue) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear any existing fields
    
    for (var i = 1; i <= selectedValue; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.name = "field" + i;
        input.placeholder = "Field " + i;
        inputContainer.appendChild(input);
    }
}

// Function to validate the form
function validateForm(event) {
    var numFields = document.getElementById("numFields").value;
    var inputContainer = document.getElementById("inputContainer").children;

    for (var i = 0; i < inputContainer.length; i++) {
        if (inputContainer[i].value.trim() === "") {
            alert("Please fill in all fields.");
            event.preventDefault(); // Prevent form submission
            return;
        }
    }
}

// Add event listeners to handle dynamic field generation and form submission
document.getElementById("numFields").addEventListener("change", function () {
    var selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

document.getElementById("dynamicForm").addEventListener("submit", validateForm);

