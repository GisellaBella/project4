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
		$http.get('/api/italians')
			.then(function(response) {
				vm.allItalians = response.data;
			});		
	}

	function deleteItalian(italian) {
		$http.delete('/api/italians/'+italian.id)
			.then(function(response) {
				var italianIndex = vm.allItalians.indexOf(italian);
				vm.allItalians.splice(italianIndex, 1);
			});
	}

	getAllItalians();
}

ItalianShowController.$inject = ["$http", "$routeParams"];
function ItalianShowController($http, $routeParams) {
	var vm = this;
	
	function getOneItalian() {
		console.log($routeParams.id);
		$http.get('/api/italians/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneItalian = response.data;
			});			
	}

	getOneItalian();
}

ItalianNewController.$inject = ["$http", "$location"];
function ItalianNewController($http, $location) {
	var vm = this;
	vm.saveItalian = saveItalian;

	function saveItalian() {
		console.log(vm.newItalian);
		$http.post('/api/italians/', vm.newItalian)
			.then(function(response) {
				var italian = response.data;
				$location.path("/italians/" + italian.id);
			});		
	}

}

ItalianEditController.$inject = ["$http", "$routeParams", "$location"];
function ItalianEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateItalian = updateItalian;

	function getItalian() {
		console.log($routeParams.id);
		$http.get('/api/italians/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedItalian = response.data;
			});			
	}

	function updateItalian() {
		$http.put('/api/italians/'+$routeParams.id, vm.updatedItalian)
			.then(function(response) {
				var italian = response.data;
				$location.path("/italians/" + italian.id);
			});			
	}

	getItalian();
}