angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	var ddo = {};

	//directive definition object(DDO)
	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true; //Habilite '.transclude' para Diretivas que necessitam manter elementos filhos

	ddo.templateUrl = 'js/directives/meu-painel.html';
			

return ddo;
});