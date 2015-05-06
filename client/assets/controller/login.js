app.controller("login", [
"$scope", "$http", "$rootScope","$location","$window", function($scope, $http, $rootScope,$location,$window) {
	$scope.$root.content = "/templates/subtpl/login.html";
	$scope.contentTitle = "Вход в учетную запись";
	$scope.errors = {};
	$scope.data = {};

	$scope.auth = $rootScope.auth;
  	if ($scope.auth){
  		$location.path("/cabinet/");
  	}
	$scope.login = function() {
		if ($scope.data.login && $scope.data.password !== null){
			$http.post("/api/users/login",$scope.data).success(function(req) {
				if (req.success){	
					$rootScope.user = req;
					$rootScope.auth = $scope.auth = true;	
					$window.location.reload();
				}else{
					$scope.error = "Пользователь не найден либо неверный пароль!!!";
				}
			});
			
		}else{
			$scope.error = "Введите логин и пароль!!!!";
		}
	};
	$scope.exit = function() {
		$http.get("/api/users/exit").success(function(req) {
			if (req.success){	
				$rootScope.auth = $scope.auth = false;	
				$window.location.reload();

			}else{
				$scope.info = "Error";
			}
		});
	};	
 }
]);