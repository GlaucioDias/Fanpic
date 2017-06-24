angular.module('fanpic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = ''; // tratamento bi-direcional da informação
	$scope.mensagem = ''; // exibe mensagem para o usuário

	$http.get('v1/fotos') // obtem as fotos do servidor
		.success(function(fotos) { // se sucesso carrega as fotos no array fotos
			$scope.fotos = fotos; // array de fotos
		})
		.error(function(erro) { // exibe mensagem de erro no console caso apresente algum problema ao
				console.log(erro); // tentar obter as fotos do servidor
		});

		$scope.remover = function(foto) { // função para remover foto
			$http.delete('v1/fotos/' + foto._id) // deleta a foto pelo id (._id) de forma dinânica
			.success(function() { // executa a função para deletar a foto selecionada
				var indiceFoto = $scope.fotos.indexOf(foto); //obtem  o indice da foto que está sendo removida
				$scope.fotos.splice(indiceFoto,1); //remove o elemento da lista de fotos de acordo com o indice da foto removida
				$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso'; // exibe mensagem de sucesso para o usuário
			})
			.error(function(erro) { // função que exibe mensagem de erro caso a foto não seja removida
				console.log(erro); // exibe mensagem de erro no console
				$scope.mensagem = 'Não foi possível remover a foto' + foto.titulo; // exibe mensagem de erro para o usuário
			});
		};
	
});