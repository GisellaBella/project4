angular.module("kvizoApp")
	.controller("CardIndexController", CardIndexController)
	.controller("CardShowController", CardShowController)
	.controller("CardNewController", CardNewController)
	.controller("CardEditController", CardEditController);

CardIndexController.$inject = ["$http", "$routeParams"];
function CardIndexController($http, $routeParams) {
	var vm = this;
	vm.deleteCard = deleteCard;
	vm.subject = $routeParams.subject;

	function getAllCards() {
		$http.get('/api/cards')
			.then(function(response) {
				vm.allCards = response.data;
				shuffleArray(vm.allCards); //shuffle function below.
			});		
	}

	function deleteCard(card) {
		$http.delete('/api/cards/'+ card.id)
			.then(function(response) {
				var cardIndex = vm.allCards.indexOf(card);
				vm.allCards.splice(cardIndex, 1);
			});
	}

	getAllCards();
}

 // -> Fisher–Yates shuffle algorithm
function shuffleArray (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




CardShowController.$inject = ["$http", "$routeParams"];
function CardShowController($http, $routeParams, $location) {
	var vm = this;
	// vm.subject = $routeParams.subject;
	// vm.question = $routeParams.question;
	// vm.answer = $routeParams.answer;
	// vm.id= $routeParams.id;

	function getOneCard() {
		$http.get('/api/cards/'+ $routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneCard = response.data;
			});			
	}

	getOneCard();
}

CardNewController.$inject = ["$http", "$location", "$routeParams"];
function CardNewController($http, $location, $routeParams) {
	var vm = this;
	vm.subject = $routeParams.subject;
	// vm.question = $routeParams.question;
	// vm.answer = $routeParams.answer;
	vm.saveCard = saveCard;

	function saveCard(card) {
	console.log(vm.newCard);
		$http.post('/api/cards/', vm.newCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/" + vm.subject + "/show/" + card.id);
			});		
	}
}




CardEditController.$inject = ["$http", "$routeParams", "$location"];
function CardEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateCard = updateCard;

	function getCard() {
		console.log($routeParams.id);
		$http.get('/api/cards/'+ $routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedCard = response.data;
			});			
	}

	function updateCard() {
		$http.put('/api/cards/'+$routeParams.id, vm.updatedCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/card/" + card.subject + "/" + card.id);
			});			
	}


	getCard();
}


