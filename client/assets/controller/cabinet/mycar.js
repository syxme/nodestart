app.controller("mycar", [
"$scope","$http","$location","$modal", function($scope, $http, $location,$modal) {
	if (!$scope.$root.auth){
  		$location.path("/login/");
  	}
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



	$scope.remove = function(id,idx){
		$http.post("/api/cabinet/rmcar",{_id:id}).success(function(req) {
			if (req.success){
				$scope.cars.splice(idx,1);
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
}]);