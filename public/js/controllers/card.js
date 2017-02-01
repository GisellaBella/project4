angular.module("kvizoApp")
	.controller("CardIndexController", CardIndexController)
	.controller("CardShowController", CardShowController)
	.controller("CardShowSpController", CardShowController)
	.controller("CardShowItController", CardShowController)
	.controller("CardNewController", CardNewController)
	.controller("CardNewSpController", CardNewSpController)
	.controller("CardNewItController", CardNewItController)
	.controller("CardEditController", CardEditController)
	.controller("CardEditItController", CardEditItController)
	.controller("CardEditItController", CardEditItController);

CardIndexController.$inject = ["$http"];
function CardIndexController($http) {
	var vm = this;
	vm.deleteCard = deleteCard;

	function getAllCards() {
		$http.get('/api/card')
			.then(function(response) {
				vm.allCards = response.data;
				shuffleArray(vm.allCards); //shuffle function below.
			});		
	}

	function deleteCard(card) {
		$http.delete('/api/card/'+card.id)
			.then(function(response) {
				var cardIndex = vm.allCards.indexOf(card);
				vm.allCards.splice(cardIndex, 1);
			});
	}

	getAllCards();
}

 // -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};




CardShowController.$inject = ["$http", "$routeParams"];
function CardShowController($http, $routeParams) {
	var vm = this;
	
	function getOneCard() {
		console.log($routeParams.id);
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneCard = response.data;
			});			
	}

	getOneCard();
}

CardNewController.$inject = ["$http", "$location"];
function CardNewController($http, $location ) {
	var vm = this;
	vm.saveCard = saveCard;
	function saveCard() {
		console.log(vm.newCard);
		$http.post('/api/card/', vm.newCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/card/" + card.id);
			});		
	}
}




CardEditController.$inject = ["$http", "$routeParams", "$location"];
function CardEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateCard = updateCard;

	function getCard() {
		console.log($routeParams.id);
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedCard = response.data;
			});			
	}

	function updateCard() {
		$http.put('/api/card/'+$routeParams.id, vm.updatedCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/card/" + card.id);
			});			
	}


	getCard();
}


CardNewSpController.$inject = ["$http", "$location"];
function CardNewSpController($http, $location ) {
	var vm = this;
	vm.saveCard = saveCard;
	function saveCard(card) {
		console.log(vm.newCard);
		$http.post('/api/card/', vm.newCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/spanish/" + card.id);
			});		
}	

}

CardShowSpController.$inject = ["$http", "$routeParams"];
function CardShowSpController($http, $routeParams) {
	var vm = this;
	
	function getOneCard() {
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				vm.oneCard = response.data;
			});			
	}

	getOneCard();
}

CardNewItController.$inject = ["$http", "$location"];
function CardNewItController($http, $location ) {
	var vm = this;
	vm.saveCard = saveCard;
	function saveCard() {
		console.log(vm.newCard);
		$http.post('/api/card/', vm.newCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/italian/" + card.id);
			});		
	}

}

CardShowItController.$inject = ["$http", "$routeParams"];
function CardShowItController($http, $routeParams) {
	var vm = this;
	
	function getOneCard() {
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				vm.oneCard = response.data;
			});			
	}

	getOneCard();

CardEditItController.$inject = ["$http", "$routeParams"];
function CardEditItController($http, $routeParams, $location) {
	var vm = this;
	vm.updateCard = updateCard;

	function getCard() {
		console.log($routeParams.id);
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedCard = response.data;
			});			
	}
function updateCard() {
		$http.put('/api/card/'+$routeParams.id, vm.updatedCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/italian/" + card.id);
			});			
	}


	getCard();
}

CardEditSpController.$inject = ["$http", "$routeParams", "$location"];
function CardEditSpController($http, $routeParams, $location) {
	var vm = this;
	vm.updateCard = updateCard;

	function getCard() {
		console.log($routeParams.id);
		$http.get('/api/card/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedCard = response.data;
			});			
	}

	function updateCard() {
		$http.put('/api/card/'+$routeParams.id, vm.updatedCard)
			.then(function(response) {
				var card = response.data;
				$location.path("/spanish/" + card.id);
			});			
	}


	getCard();
}
}