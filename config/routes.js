var express = require('express');
var router = express.Router();
var cardsController = require('../controllers/cards.js');


//Italian Routes
  
// index
router.get('/api/card', cardsController.index);

// create
router.post('/api/card', cardsController.create);

// show
router.get('/api/card/:id', cardsController.show);

// update
router.put('/api/card/:id', cardsController.update);

// destroy
router.delete('/api/card/:id', cardsController.destroy);




module.exports = router;