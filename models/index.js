

//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://gisellawalter@localhost:5432/kvizo');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;


var Card = sequelize.import("./card");


module.exports.models = {
	Card : Card,

};


	