app.controller("mycar", [
"$scope", "$http","$location", function($scope, $http, $location) {
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/mycar.html";
	$scope.contentTitle = "Мои автомобили";
	$http.post("/api/cabinet/cars").success(function(req) {
		if (req){
			$scope.cars = req;
		}else{
			//$scope.errors. = "Такой логин уже существует";
		}
	});



	$scope.remove = function(id){
		$http.post("/api/cabinet/rmcar",{_id:id}).success(function(req) {
			if (req){
				$scope.cars = req;
			}else{
				console.log("error");
			}
		});
	};

	// $scope.auction = function(i){
	// 	var modalInstance = $modal.open({
	// 		templateUrl:"/templates/modal/auctionadd.html"
	// 	});
	// };

	$scope.auth = $scope.$root.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
}]);