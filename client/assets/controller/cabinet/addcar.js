app.controller("addcar", [
"$scope", "$http", "$rootScope","$location","FileUploader", function($scope, $http, $rootScope,$location,FileUploader) {
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/addcar.html";
	$scope.contentTitle = "Добавить автомобиль";
	$scope.data = {};
	$scope.markaAvto = markaAvto;
	$scope.data.photo = [];
	$scope.years = [];

	for (var i=1900;i<=2015;i++){$scope.years.push(i);} 

    var	uploader = $scope.uploader = new FileUploader({
		  url: '/api/upload/image',
		  alias: "image",
		  autoUpload: true
		});
    uploader.onCompleteItem =  function(item, response, status, headers) {
    	if (!$scope.data.photo){
    		$scope.data.photo[0] = response.img;
    	}else{
    		$scope.data.photo.push(response.img);
    	}
	};

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