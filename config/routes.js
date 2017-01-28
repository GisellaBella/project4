var express = require('express');
var router = express.Router();
var italiansController = require('../controllers/italians.js');
var spanishsController = require('../controllers/spanishs.js');


//Italian Routes
  
// index
router.get('/api/italians', italiansController.index);

// create
router.post('/api/italians', italiansController.create);

// show
router.get('/api/italians/:id', italiansController.show);

// update
router.put('/api/italians/:id', italiansController.update);

// destroy
router.delete('/api/italians/:id', italiansController.destroy);

//Spanish Routes

// index
router.get('/api/spanishs', spanishsController.index);

// create
router.post('/api/spanishs', spanishsController.create);

// show
router.get('/api/spanishs/:id', spanishsController.show);

// update
router.put('/api/spanishs/:id', spanishsController.update);

// destroy
router.delete('/api/spanishs/:id', spanishsController.destroy);


module.exports = router;