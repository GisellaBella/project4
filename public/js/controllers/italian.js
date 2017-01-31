angular.module("kvizoApp")
	.controller("ItalianIndexController", ItalianIndexController)
	.controller("ItalianShowController", ItalianShowController)
	.controller("ItalianNewController", ItalianNewController)
	.controller("ItalianEditController", ItalianEditController);

ItalianIndexController.$inject = ["$http"];
function ItalianIndexController($http) {
	var vm = this;
	vm.deleteItalian = deleteItalian;

	function getAllItalians() {
		$http.get('/api/italian')
			.then(function(response) {
				vm.allItalians = response.data;
				shuffleArray(vm.allItalians); //shuffle function below.
			});		
	}

	function deleteItalian(italian) {
		$http.delete('/api/italian/'+italian.id)
			.then(function(response) {
				var italianIndex = vm.allItalians.indexOf(italian);
				vm.allItalians.splice(italianIndex, 1);
			});
	}

	getAllItalians();
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


ItalianShowController.$inject = ["$http", "$routeParams"];
function ItalianShowController($http, $routeParams) {
	var vm = this;
	
	function getOneItalian() {
		console.log($routeParams.id);
		$http.get('/api/italian/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneItalian = response.data;
			});			
	}

	getOneItalian();
}

ItalianNewController.$inject = ["$http", "$location"];
function ItalianNewController($http, $location ) {
	var vm = this;
	vm.saveItalian = saveItalian;


	function saveItalian() {
		console.log(vm.newItalian);
		$http.post('/api/italian/', vm.newItalian)
			.then(function(response) {
				var italian = response.data;
				$location.path("/italian/" + italian.id);
			});		
	}

}

ItalianEditController.$inject = ["$http", "$routeParams", "$location"];
function ItalianEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateItalian = updateItalian;

	function getItalian() {
		console.log($routeParams.id);
		$http.get('/api/italian/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedItalian = response.data;
			});			
	}

	function updateItalian() {
		$http.put('/api/italian/'+$routeParams.id, vm.updatedItalian)
			.then(function(response) {
				var italian = response.data;
				$location.path("/italian/" + italian.id);
			});			
	}


	getItalian();
}