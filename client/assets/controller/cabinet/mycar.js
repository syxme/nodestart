app.controller("mycar", [
"$scope","$http","$location","$modal", function($scope, $http, $location,$modal) {
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


	$scope.auction = function(i){
		var modalInstance = $modal.open({
		  templateUrl:'/templates/modal/auctionadd.html',
		  backdrop: false,
		  controller: [
		    "$scope", function(modalScope) {
		      modalScope.isShown = true;
		       modalScope.close = function(todo, reason) {
		        return modalScope.$close([todo, reason]);
		      };
		    }
		  ]
		});
	};

	$scope.auth = $scope.$root.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
}]);