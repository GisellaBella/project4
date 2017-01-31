var express = require('express');
var router = express.Router();
var italiansController = require('../controllers/italians.js');
var spanishsController = require('../controllers/spanishs.js');


//Italian Routes
  
// index
router.get('/api/italian', italiansController.index);

// create
router.post('/api/italian', italiansController.create);

// show
router.get('/api/italian/:id', italiansController.show);

// update
router.put('/api/italian/:id', italiansController.update);

// destroy
router.delete('/api/italian/:id', italiansController.destroy);

//Spanish Routes

// index
router.get('/api/spanish', spanishsController.index);

// create
router.post('/api/spanish', spanishsController.create);

// show
router.get('/api/spanish/:id', spanishsController.show);

// update
router.put('/api/spanish/:id', spanishsController.update);

// destroy
router.delete('/api/spanish/:id', spanishsController.destroy);


module.exports = router;