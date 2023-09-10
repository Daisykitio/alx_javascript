// Import the 'request' module
const request = require('request');

// Check if the user provided the API URL as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
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
      const data = JSON.parse(body);

      // Filter the movies that contain the character ID 18 (Wedge Antilles)
      const moviesWithWedge = data.results.filter((movie) => {
        return movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
      });

      // Print the number of movies with Wedge Antilles
      console.log(moviesWithWedge.length);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});

