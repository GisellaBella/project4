var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://gisellawalter@localhost:5432/kvizo_models');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Italian = sequelize.import("./italian");
var Spanish = sequelize.import("./spanish");

module.exports.models = {
	Italian : Italian,
	Spanish : Spanish
};