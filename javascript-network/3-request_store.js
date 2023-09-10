const request = require('request');
const fs = require('fs');
const utf8 = require('utf8');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file-path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

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
        const contentLength = utf8.encode(body).length; // Calculate content length
        console.log(`Content saved to ${filePath}`);
        console.log(`Content Length: ${contentLength} characters`);
      }
    });
  }
});

