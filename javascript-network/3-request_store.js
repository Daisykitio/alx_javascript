// Import the 'request' module
const request = require('request');
const fs = require('fs');
const utf8 = require('utf8'); // Import the 'utf8' module for encoding

// Check if the user provided both URL and file path arguments
if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file-path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFile(filePath, utf8.encode(body), (writeError) => {
      if (writeError) {
        console.error(`Error writing to file: ${writeError.message}`);
      } else {
        console.log(`Content saved to ${filePath}`);
      }
    });
  }
});

