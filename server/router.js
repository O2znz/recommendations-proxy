// require express, express.router
const express = require('express');
const router = express.Router();

// make timeLog function that sends back time
var timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.send(time);
}

// make test route for GET req
router.get('/', (req, res) => {
  res.status(200).send('Proxy api is working!');
});

// make test route to time
router.get('/time', timeLog);

// make route to get recommendations module
router.get('/recommendations', (req, res) => {
  res.send('Recommendations Module');
});

// export router
module.exports = router;