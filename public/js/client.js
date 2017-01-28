angular.module("kvizoApp", ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/about', {
      	templateUrl: '/templates/about.html'
      })

			//Italian Routes
			  
			// index
			.when('/italians', {
				templateUrl: '/templates/italians/index.html',
				controller: "ItalianIndexController as italiansController"
			})

			// new
			.when('/italians/new', {
				templateUrl: '/templates/italians/new.html',
				controller: "ItalianNewController as italianNewController"
			})

			// show
			.when('/italians/:id', {
				templateUrl: '/templates/italians/show.html',
				controller: "ItalianShowController as italianController"
			})

			// edit
			.when('/italians/:id/edit', {
				templateUrl: '/templates/italians/edit.html',
				controller: "ItalianEditController as italianEditController"
			})

			//Spanish Routes
			  
			// index
			.when('/spanishs', {
				templateUrl: '/templates/spanishs/index.html',
				controller: "SpanishIndexController as spanishsController"
			})

			// new
			.when('/spanishs/new', {
				templateUrl: '/templates/spanishs/new.html',
				controller: "SpanishNewController as spanishNewController"
			})

			// show
			.when('/spanishs/:id', {
				templateUrl: '/templates/spanishs/show.html',
				controller: "SpanishShowController as spanishController"
			})

			// edit
			.when('/spanishs/:id/edit', {
				templateUrl: '/templates/spanishs/edit.html',
				controller: "SpanishEditController as spanishEditController"
			});

			
  });
