angular.module('fanpic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = ''; // tratamento bi-direcional da informação

	// $http.get('v1/fotos').success(function(fotos) {
	// 	$scope.fotos = fotos;
	// }).error(function(erro) {
	// 	console.log(erro);
	// });

	var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error) {
	 	console.log(error);
	 });
});