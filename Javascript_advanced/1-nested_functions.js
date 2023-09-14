// Create a global variable named globalVariable with value "Welcome"
var globalVariable = "Welcome";

// Create a function outer
function outer() {
  // Alert the content of the variable globalVariable
  alert(globalVariable);

  // Create a variable named course with value "Holberton"
  var course = "Holberton";

  // Create a function inner
  function inner() {
    // Alert the content of the variable globalVariable and course (concatenated)
    alert(globalVariable + " " + course);

    // Create a variable named exclamation with value "!"
    var exclamation = "!";

    // Create a function inception
    function inception() {
      // Alert the content of the variable globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + " " + course + exclamation);
    }

    // Call the function inception
    inception();
  }

  // Call the function inner
  inner();
}

// Call the function outer
outer();

