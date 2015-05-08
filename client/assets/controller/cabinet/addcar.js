app.controller("addcar", [
"$scope", "$http","$location","FileUploader", function($scope, $http,$location,FileUploader) {
	if (!$scope.$root.auth){
  		$location.path("/login/");
  	}
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/addcar.html";
	$scope.contentTitle = "Добавить автомобиль";
	$scope.data = {};
	$scope.data.photo = [];

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
	
}]);