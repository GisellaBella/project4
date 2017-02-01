//Connect
var Sequelize = require('sequelize');
var pg = require('pg');
pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});

var sequelize = new Sequelize('postgres://gisellawalter@localhost:5432/kvizo');


//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Card = sequelize.import("./card");


module.exports.models = {
	Card : Card,

};


	