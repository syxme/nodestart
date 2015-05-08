app.controller("cabinet", [
"$scope", "$http", "$rootScope","$location","$window", function($scope, $http, $rootScope,$location,$window) {
	if (!$scope.$root.auth){
  		$location.path("/login/");
  	}
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/index.html";
	$scope.contentTitle = "Личный Кабинет";
	$scope.data = {};
}]);