// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route to handle the GET requests to /comments
// 4. Create a route to handle POST requests to /comments
// 5. Create a route to handle PUT requests to /comments
// 6. Create a route to handle DELETE requests to /comments
// 7. Start the server
// 8. Create a route to handle GET requests to /comments/:id

// 1. Load express
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// 2. Create an instance of express
const app = express();

// 3. Create a route to handle the GET requests to /comments
app.use(bodyParser.json