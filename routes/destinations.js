var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

// Define the Route to create a destination
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;