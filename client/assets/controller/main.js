app.controller("main", [
  "$scope", "$http", function($scope, $http) {
	$scope.$root.content = "/templates/subtpl/index.html";
	$scope.contentTitle = "Главная страница";

  }
]);