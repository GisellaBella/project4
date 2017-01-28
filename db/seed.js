var DB = require("../models").models;

var spanishCreate = function() {
	return DB.Spanish.create({
    english_phrase: "Can I have water, please?",
    spanish_phrase: "Puedo tener agua, por favor?"
  });
};

var italianCreate = function() {
	return DB.Italian.create({
    english_phrase: "Go straight! then turn left/ right!",
    italian_phrase: "Vada dritto! e poi giri a destra/ sinistra!"
	});
};



italianCreate()
.then(spanishCreate)
.then(function() {
	process.exit();
});

