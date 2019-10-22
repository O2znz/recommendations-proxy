// require express & body parser & path
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// initialize express server and set to app
const app = express();

const PORT = 3000;

// use body parser on incoming requests
app.use(bodyParser.json());

// write dummy response to GET req
app.get('/', (req, res) => {
  res.status(200).send('None shall pass!');
});

// listen on port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});