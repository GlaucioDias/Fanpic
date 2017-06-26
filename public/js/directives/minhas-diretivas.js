angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	var ddo = {};

	//directive definition object(DDO)
	ddo.restrict = "AE";
	ddo.transclude = true; //Habilite '.transclude' para Diretivas que necessitam manter elementos filhos

	ddo.scope = {
		titulo: '@'
	};
	
	ddo.templateUrl = 'js/directives/meu-painel.html';
	
return ddo;
})
.directive('minhaFoto', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

	return ddo;
})
.directive('meuBotaoPerigo', function() {

	var ddo = {};
	ddo.restrict = "E";

	ddo.scope = {
		nome: '@', // '@' passa como valor uma string
		acao: '&' // caso scope.acao esteja associado à uma função de um controller
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;

});

