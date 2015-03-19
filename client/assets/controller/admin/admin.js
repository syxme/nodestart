app.controller("admin", [
	"$scope", "$http", "$rootScope", function($scope, $http, $rootScope) {
	$scope.auth = $rootScope.auth;
	$scope.login = function() {
		var data	= {};
		$scope.info	= "";
		data.login	= $scope.ilogin;
		data.pass	= $scope.ipass;
		
		if (data.login && data.pass != null){
			$http.post("api/users/login",data).success(function(req) {
				if (req.success){	
					$rootScope.User = req.req;
					$rootScope.auth = $scope.auth = true;	
				}else{
					$scope.info = "Error: Чувак не найден!";
				}
			});
			
		}else{
			$scope.info = "Error";
		}
	}
	$scope.exit = function() {
		$http.put("api/users/exit").success(function(req) {
			if (req.success){	
				$rootScope.auth = $scope.auth = false;	
			}else{
				$scope.info = "Error";
			}
		});
	}
	$scope.Register = function() {
		var data	= {};
		$scope.info	= "";
		data.login	= $scope.ilogin;
		data.pass	= $scope.ipass;
		
		if (data.login && data.pass != null){
			if (data.login.length >= 3){
				$http.post("api/users/register",data).success(function(req) {
					if (req.success){
						$rootScope.User = req.req;
						$rootScope.auth = $scope.auth = true;	
					}else{
						$scope.info = "Error: Чувак, такой пользователь есть уже!";
					}
				});
			}else{
				$scope.info = "Error: Чувак, замути больше букв!";
			}
		}else{
			$scope.info = "Error";
		}
	}
 }
]);