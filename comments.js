// Create web server with Express
// Create a comments route
// Create a POST route for creating comments
// Create a GET route for reading comments
// Create a PUT route for updating comments
// Create a DELETE route for deleting comments
// Use the comments route in the main app

const express = require('express');
const app = express();
const comments = require('./comments');

app.use('/comments', comments);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});