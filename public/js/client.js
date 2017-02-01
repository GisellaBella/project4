angular.module("kvizoApp", ['ngRoute'])
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
 
			//Italian Routes
			  
			// index
			.when('/italian', {
				templateUrl: '/templates/italian/index.html',
				controller: "CardIndexController as cards"
			})

			// new (create)
			.when('/italian/new', {
				templateUrl: '/templates/italian/new.html',
				controller: "CardNewItController as new"
			})

			// show
			.when('/italian/:id', {
				templateUrl: '/templates/italian/show.html',
				controller: "CardShowItController as showIt"
			})

			// edit
			.when('/italian/id/edit', {
				templateUrl: '/templates/italian/edit.html',
				controller: "CardEditItController as editIt"
			})

			//Spanish Routes
			  
			// index
			.when('/spanish', {
				templateUrl: '/templates/spanish/index.html',
				controller: "CardIndexController as cards"
			})

			// new
			.when('/spanish/new', {
				templateUrl: '/templates/spanish/new.html',
				controller: "CardNewSpController as new"
			})

			// show
			.when('/spanish/:id', {
				templateUrl: '/templates/spanish/show.html',
				controller: "CardShowSpController as show"
			})

			// edit
			.when('/spanish/:id/edit', {
				templateUrl: '/templates/spanish/edit.html',
				controller: "CardEditSpController as edit"
			});

		// 	// Create Routes
		// 	.when('/card', {
		// 	templateUrl: '/templates/card/index.html',
		// 	controller: "CardNewController as new"

		// });

			
  });
