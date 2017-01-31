angular.module("kvizoApp")
.controller("MainCtrl", MainCtrl);

MainController.$inject = ["$scope"];
function mainCtrl($scope) {
    $scope.removeDIV = function() {
     var element = angular.element( document.querySelector(this.#box) );
     element.remove();
    };
    
}