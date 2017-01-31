angular.module("kvizoApp")
	.controller("SpanishIndexController", SpanishIndexController)
	.controller("SpanishShowController", SpanishShowController)
	.controller("SpanishNewController", SpanishNewController)
	.controller("SpanishEditController", SpanishEditController);

SpanishIndexController.$inject = ["$http"];
function SpanishIndexController($http) {
	var vm = this;
	vm.deleteSpanish = deleteSpanish;

	function getAllSpanishs() {
		$http.get('/api/spanish')
			.then(function(response) {
				vm.allSpanishs = response.data;
			});		
	}

	function deleteSpanish(spanish) {
		$http.delete('/api/spanish/'+spanish.id)
			.then(function(response) {
				var spanishIndex = vm.allSpanishes.indexOf(spanish);
				vm.allSpanishes.splice(spanishIndex, 1);
			});
	}

	getAllSpanishs();
}

SpanishShowController.$inject = ["$http", "$routeParams"];
function SpanishShowController($http, $routeParams) {
	var vm = this;
	
	function getOneSpanish() {
		$http.get('/api/spanish/'+$routeParams.id)
			.then(function(response) {
				vm.oneSpanish = response.data;
			});			
	}

	getOneSpanish();
}

SpanishNewController.$inject = ["$http", "$location"];
function SpanishNewController($http, $location) {
	var vm = this;
	vm.saveSpanish = saveSpanish;

	function saveSpanish() {
		$http.post('/api/spanish/', vm.newSpanish)
			.then(function(response) {
				var spanish = response.data;
				$location.path("/spanish/" + spanish.id);
			});		
	}

}

SpanishEditController.$inject = ["$http", "$routeParams", "$location"];
function SpanishEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateSpanish = updateSpanish;

	function getSpanish() {
		$http.get('/api/spanish/'+$routeParams.id)
			.then(function(response) {
				vm.updatedSpanish = response.data;
			});			
	}

	function updateSpanish() {
		$http.put('/api/spanish/'+$routeParams.id, vm.updatedSpanish)
			.then(function(response) {
				var spanish = response.data;
				$location.path("/spanish/" + spanish.id);
			});			
	}

	getSpanish();
}