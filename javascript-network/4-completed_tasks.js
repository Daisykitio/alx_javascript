// Import the 'request' module
const request = require('request');

// Check if the user provided the API URL as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Send a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const todos = JSON.parse(body);

      // Initialize an object to store the completed task counts by user ID
      const completedTaskCounts = {};

      // Loop through the todos and count completed tasks for each user
      todos.forEach((todo) => {
        if (todo.completed) {
          if (completedTaskCounts[todo.userId]) {
            completedTaskCounts[todo.userId]++;
          } else {
            completedTaskCounts[todo.userId] = 1;
          }
        }
      });

      // Print the completed task counts by user ID
      console.log(completedTaskCounts);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});

