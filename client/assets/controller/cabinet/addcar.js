app.controller("addcar", [
"$scope", "$http", "$rootScope","$location","FileUploader", function($scope, $http, $rootScope,$location,FileUploader) {
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/addcar.html";
	$scope.contentTitle = "Добавить автомобиль";
	$scope.data = {};
	$scope.markaAvto = markaAvto;

	var uploader = $scope.uploader = new FileUploader({
        url: 'upload.php'
    });
	$scope.upmark = function(){
		$scope.model = markaAvto[$scope.data.marka];
	};
	$scope.sendavto = function(){
		$http.post("/api/cabinet/addcar",$scope.data).success(function(req) {
			if (req.success){
				$location.path("/cabinet/mycar/");
			}else{
				//$scope.errors. = "Такой логин уже существует";
			}
		});

	};
	$scope.auth = $rootScope.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
}]);