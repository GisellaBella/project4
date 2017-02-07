var express = require('express');
var router = express.Router();
var cardsController = require('../controllers/cards.js');


//Italian Routes
  
// index
router.get('/api/cards', cardsController.index);

// create
router.post('/api/cards', cardsController.create);

// show
router.get('/api/cards/:id', cardsController.show);

// update
router.put('/api/cards/:id', cardsController.update);

// destroy
router.delete('/api/cards/:id', cardsController.destroy);




module.exports = router;