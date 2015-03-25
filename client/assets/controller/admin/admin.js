app.controller("admin", [
  "$scope", "$http", "$rootScope","$location", function($scope, $http, $rootScope,$location) {
  	$scope.auth = $rootScope.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
	
 }
]);