var db = require('../models');
var Card = db.models.Card;

function index(req, res) {
	Card.findAll().then(function(cards) {
		res.json(cards);
	});
}

function show(req, res) {
  Card.findById(req.params.id)
  .then(function(card){
    if(!card) return error(res, "not found");
    res.json(card);
  });	
}

function create(req, res) {
	Card.create(req.body).then(function(card){
    if(!card) return error(res, "not saved");
    res.json(card);
  });
}

function update(req, res) {
  Card.findById(req.params.id)
  .then(function(card){
    if(!card) return error(res, "not found");
    return card.updateAttributes(req.body);
  })
  .then(function(card){
    res.json(card);
  });
}

function destroy(req, res) {
  Card.findById(req.params.id)
  .then(function(card){
    if(!card) return error(res, "not found");
    return card.destroy();
  })
  .then(function(){
    res.redirect("/card");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;