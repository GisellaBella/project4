var express = require('express');
var router = express.Router();
var italianController = require('../controllers/italian.js');
var spanishController = require('../controllers/spanish.js');

//Italian Routes
  
// index
router.get('/api/italian', italianController.index);

// create
router.post('/api/italian', italianController.create);

// show
router.get('/api/italian/:id', italianController.show);

// update
router.put('/api/italian/:id', italianController.update);

// destroy
router.delete('/api/italian/:id', italianController.destroy);

//Spanish Routes
  
// index
router.get('/api/spanish', spanishController.index);

// create
router.post('/api/spanish', spanishController.create);

// show
router.get('/api/spanish/:id', spanishController.show);

// update
router.put('/api/spanish/:id', spanishController.update);

// destroy
router.delete('/api/spanish/:id', spanishController.destroy);



module.exports = router;