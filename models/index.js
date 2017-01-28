//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://gisellawalter@localhost:5432/kvizo_models');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Spanish = sequelize.import("./spanish");
var Italian = sequelize.import("./italian");

module.exports.models = {
	Italian : Italian,
	Spanish : Spanish
};