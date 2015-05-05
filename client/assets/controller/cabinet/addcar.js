app.controller("addcar", [
"$scope", "$http", "$rootScope","$location","FileUploader", function($scope, $http, $rootScope,$location,FileUploader) {
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/addcar.html";
	$scope.contentTitle = "Добавить автомобиль";
	$scope.data = {};
	$scope.markaAvto = markaAvto;
	$scope.data.photo = [];
	console.log($scope.data.photo);
	// var uploader = $scope.uploader = new FileUploader({
 //        url: 'upload.php'
 //    });
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
    	console.log(response.img);
    	console.log($scope.data.photo);
	 //  	return response.id = $scope.me._id + "_" + Math.floor(Math.random() * (256000 - 64 + 1)) + 64;
	 //  	$scope.offer.photos.unshift(response);
		// $scope.untils.progress = 0 + '%';
		// $scope.untils.previewImage = $scope.offer.photos[$scope.offer.photos.length - 1].photo_604;
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