// require express & body parser & path
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// initialize express server and set to app
const app = express();

const PORT = 3000;

// use body parser on incoming requests
app.use(bodyParser.json());

// serve up static html file
app.use('/', express.static('public'));

// write dummy response to GET req
app.get('/dummy', (req, res) => {
  res.status(200).send('None shall pass!');
});

// listen on port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});