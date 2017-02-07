angular.module("kvizoApp", ['ngRoute', 'puigcerber.capitalize'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: "CardIndexController as cards"
      })
      // .when('/about', {
      // 	templateUrl: '/templates/about.html'
      // })
 
	
			// index
			.when('/:subject', {
				templateUrl: '/templates/card/index.html',
				controller: "CardIndexController as cards"
			})

			// new (create)
			.when('/:subject/new', {
				templateUrl: '/templates/card/new.html',
				controller: "CardNewController as new"
			})

			// show
			.when('/:subject/show/:id', {
				templateUrl: '/templates/card/show.html',
				controller: "CardShowController as show"
			})

			// edit 
			.when('/:subject/:id/edit', {
				templateUrl: '/templates/card/edit.html',
				controller: "CardEditController as edit"
			});

			

			
  });
