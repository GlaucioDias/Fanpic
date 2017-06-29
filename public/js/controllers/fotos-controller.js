angular.module('fanpic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = ''; // tratamento bi-direcional da informação
	$scope.mensagem = ''; // exibe mensagem para o usuário

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;		
	}, function(erro) {
		console.log(erro);
	});

	
		$scope.remover = function(foto) { // função para remover foto

			recursoFoto.delete({fotoId : foto._id}, function() {
				var indiceDaFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceDaFoto,1);
				$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
			});
		};	
});