app.controller("addcar", [
"$scope", "$http", "$rootScope","$location","$window","FileUploader", function($scope, $http, $rootScope,$location,$window,FileUploader) {
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
	
	$scope.auth = $rootScope.auth;
  	if (!$scope.auth){
  		$location.path("/login/");
  	}
}]);