// Import the 'request' module
const request = require('request');

// Check if the user provided the Movie ID as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

// Get the Movie ID from the command line argument
const movieId = process.argv[2];

// Construct the API endpoint URL for the movie
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

      // Display the character names from the movie
      console.log(movie.title);
      console.log('Characters:');
      movie.characters.forEach((characterUrl) => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const character = JSON.parse(charBody);
            console.log(character.name);
          } else {
            console.error(`Error fetching character: ${charError ? charError.message : charResponse.statusCode}`);
          }
        });
      });
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});

