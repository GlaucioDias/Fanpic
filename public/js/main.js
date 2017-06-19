angular.module('fanpic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true); //habilita o locationProvider para retirada do '#' na barra de endereço

		$routeProvider.when('/fotos', { //aponta para o principal.html
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/fotos'});
	});
