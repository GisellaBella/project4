module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("card", {
        subject:Sequelize.STRING,
        question:Sequelize.STRING,
    	answer: Sequelize.STRING
  });
  return model;
};