var db = require('../models');
var Spanish = db.models.Spanish;

function index(req, res) {
	Spanish.findAll().then(function(spanishes) {
		res.json(spanishes);
	});
}

function show(req, res) {
  Spanish.findById(req.params.id)
  .then(function(spanish){
    if(!spanish) return error(res, "not found");
    res.json(spanish);
  });	
}

function create(req, res) {
	Spanish.create(req.body).then(function(spanish){
    if(!spanish) return error(res, "not saved");  
    res.json(spanish);
  });
}

function update(req, res) {
  Spanish.findById(req.params.id)
  .then(function(spanish){
    if(!spanish) return error(res, "not found");
    return spanish.updateAttributes(req.body);
  })
  .then(function(spanish){
    res.json(spanish);
  });
}

function destroy(req, res) {
  Spanish.findById(req.params.id)
  .then(function(spanish){
    if(!spanish) return error(res, "not found");
    return spanish.destroy();
  })
  .then(function(){
    res.redirect("/spanish");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;