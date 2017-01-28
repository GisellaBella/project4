module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("italian", {
    english_phrase:Sequelize.STRING,
    italian_phrase: Sequelize.STRING
  });
  return model;
};
