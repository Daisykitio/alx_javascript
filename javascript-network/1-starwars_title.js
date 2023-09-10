// Import the 'request' module
const request = require('request');

// Check if the user provided a movie ID as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movie ID>');
  process.exit(1);
}

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the API endpoint URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const movie = JSON.parse(body);
      
      // Print the title of the movie
      console.log(movie.title);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});

