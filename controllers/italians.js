var db = require('../models');
var Italian = db.models.Italian;

function index(req, res) {
	Italian.findAll().then(function(italians) {
		res.json(italians);
	});
}

function show(req, res) {
  Italian.findById(req.params.id)
  .then(function(italian){
    if(!italian) return error(res, "not found");
    res.json(italian);
  });	
}

function create(req, res) {
	Italian.create(req.body).then(function(italian){
    if(!italian) return error(res, "not saved");
    res.json(italian);
  });
}

function update(req, res) {
  Italian.findById(req.params.id)
  .then(function(italian){
    if(!italian) return error(res, "not found");
    return italian.updateAttributes(req.body);
  })
  .then(function(italian){
    res.json(italian);
  });
}

function destroy(req, res) {
  Italian.findById(req.params.id)
  .then(function(italian){
    if(!italian) return error(res, "not found");
    return italian.destroy();
  })
  .then(function(){
    res.redirect("/italians");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;