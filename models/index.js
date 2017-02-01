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


var Sequelize = require('sequelize'), sequelize = null;

if (process.env.HEROKU_POSTGRESQL_DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('postgres://gisellawalter@localhost:5432/kvizo');
  }



//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Card = sequelize.import("./card");


module.exports.models = {
	Card : Card,

};


	