app.controller("users", ["$scope", "$http", "$rootScope","$location","Restangular", 
function($scope, $http, $rootScope,$location,Restangular) {
	$scope.auth = $rootScope.auth;
	if (!$scope.auth){
		$location.path("/login/");
	}
	$scope.users = Restangular.all("users").getList().$object;
}
]);