app.controller("cabinet", [
"$scope", "$http", "$rootScope","$location","$window", function($scope, $http, $rootScope,$location,$window) {
	$scope.$root.content = "/templates/subtpl/cabinet.html";
	$scope.contentTitle = "Личный Кабинет";
	$scope.data = {};

	$scope.auth = $rootScope.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
}]);