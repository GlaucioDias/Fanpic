angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {
	return $resource('v1/fotos/:fotoId', null, {
		'update' : {
			method : 'PUT'
		}
	});
})
.factory('cadastroDeFotos', function(recursoFoto, $q) { //$q permite criar minhas próprias promises
	var service = {};

	service.cadastrar = function(foto) {
		return $q(function(resolve, reject) {
			if(foto._id) {
				recursoFoto.update({fotoId: foto._id}, foto, function() {
					resolve({ // resolve não aceita receber vários parámetros concatenados ex: resolve('Foto ' + foto.titulo + ' incluída com sucesso!')
						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!', // utiliza-se um objeto {} ex: resolve ({});
						inclusao: false
					});

				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: 'Não foi possível alterar a foto ' + foto.titulo
					});
				});
			} else {
				recursoFoto.save(foto, function() {
					resolve({
						mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso!',
						inclusao: true
					});
				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir a foto ' + foto.titulo
					});
				});

			}
		});
	};
	return service;
});