var DB = require("../models").models;

var italianCreate = function() {
  return DB.Italian.create({
    english_phrase: "I need to practice my Italian",
    italian_phrase: "ho bisogno di fare pratica con il mio italiano"
  });
};


var spanishCreate = function() {
  return DB.Spanish.create({
    english_phrase: 'I need to practice my Spanish',
    spanish_phrase: "me falta práctica en Español"
  });


// var italianSeed = {
//   italian: require("italian_data")
// };

// var spanishSeed = {
//   spanish: require("spanish_data")
// };

// var italianCreate = function () {
//   return DB.models.Italian.bulkCreate(Seed.italianSeed)
//   .then(function(){
//   return DB.models.Italian.findAll();
//   });
// };

// var spanishCreate = function () {
//   return DB.models.Spanish.bulkCreate(Seed.spanishSeed)
//   .then(function(){
//   return DB.models.Spanish.findAll();
//   });
};
italianCreate()
.then(spanishCreate)
.then(function(){
  process.exit();
});