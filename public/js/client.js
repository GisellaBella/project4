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
			.when('/italian', {
				templateUrl: '/templates/italian/index.html',
				controller: "ItalianIndexController as italians"
			})

			// new (create)
			.when('/italian/new', {
				templateUrl: '/templates/italian/new.html',
				controller: "ItalianNewController as new"
			})

			// show
			.when('/italian/:id', {
				templateUrl: '/templates/italian/show.html',
				controller: "ItalianShowController as show"
			})

			// edit
			.when('/italian/:id/edit', {
				templateUrl: '/templates/italian/edit.html',
				controller: "ItalianEditController as italianEditController"
			})

			//Spanish Routes
			  
			// index
			.when('/spanish', {
				templateUrl: '/templates/spanish/index.html',
				controller: "SpanishIndexController as spanish"
			})

			// new
			.when('/spanish/new', {
				templateUrl: '/templates/spanish/new.html',
				controller: "SpanishNewController as new"
			})

			// show
			.when('/spanish/:id', {
				templateUrl: '/templates/spanish/show.html',
				controller: "SpanishShowController as show"
			})

			// edit
			.when('/spanish/:id/edit', {
				templateUrl: '/templates/spanish/edit.html',
				controller: "SpanishEditController as edit"
			});

			
  });
