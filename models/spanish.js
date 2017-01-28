module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("spanish", {
    english_phrase:Sequelize.STRING,
    spanish_phrase: Sequelize.STRING
  });
  return model;
};