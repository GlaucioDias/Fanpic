angular.module('fanpic')
	.controller('FotoController', function($scope, recursoFoto, $routeParams) {
	
		// var recursoFoto = $resource('v1/fotos/:fotoId', null, {
		// 	'update' : {
		// 		metod: 'PUT'
		// 	}
		// });

		$scope.foto = {};
		$scope.mensagem = '';

		if($routeParams.fotoId) {
			recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
				$scope.foto = foto;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto';
			});
		}
			
		// 	$http.get('v1/fotos/' + $routeParams.fotoId)
		// 	.success(function(foto) {
		// 		$scope.foto = foto;
		// 	})
		// 	.error(function(erro) {
		// 		console.log(erro);
		// 		$scope.mensagem = 'Não foi possível obter a foto';
		// 	});
		// };

		$scope.submeter = function() {
			
			if ($scope.formulario.$valid) {
				// if ($scope.foto._id) {
				if($routeParams.fotoId) {

					recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function() {
						$scope.mensagem = 'Foto  alterada com sucesso';

					}, function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar a foto ';
						
					});

					// $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
					// .success(function(){
					// 	$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
					// })
					// .error(function(erro) {
					// 	console.log(erro);
					// 	$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
					// });
				} else {

					recursoFoto.save($scope.foto, function() {
						$scope.foto = {};
						$scope.mensagem = 'Foto incluída com sucesso';
					}, function(erro) {
						$scope.mensagem = 'Não foi possível incluir a foto';
						console.log(erro);
					});

					// $http.post('/v1/fotos', $scope.foto)
					// .success(function() {
					// 	$scope.foto = {};
					// 	$scope.formulario.$setPristine(); // previne validação após  limpar formuário
					// 	$scope.mensagem = 'Foto incluída com sucesso';
					// })
					// .error(function(erro) {
					// 	console.log(erro);
					// 	$scope.mensagem = 'Não foi possível cadastrar a foto';
					// });
				}
			}
		};

});