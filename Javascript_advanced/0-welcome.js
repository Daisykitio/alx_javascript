function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}

// Test the function with 'Holberton' and 'School'
welcome('Holberton', 'School');

