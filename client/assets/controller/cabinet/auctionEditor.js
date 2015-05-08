app.controller("auctioneditor", [
"$scope", "$http","$location", function($scope, $http,$location) {
	if (!$scope.$root.auth){
  		$location.path("/login/");
  	}
	$scope.$root.content = "/templates/subtpl/cabinet/cabinet.html";
	$scope.$root.cabinet = "/templates/subtpl/cabinet/auctionEdit.html";
	$scope.contentTitle = "Редактор аукционов";
	$scope.data = {};
	$scope.date = {};
	$http.post("/api/auctions/gettype").success(function(req) {
		if (req){
			$scope.auctionType = req;
		}else{
			//$scope.errors. = "Такой логин уже существует";
		}
	});

	var time = new Date();
	$scope.date.date = time.getDate();
	$scope.date.month = time.getMonth();
	$scope.date.year = time.getFullYear();
	$scope.date.hours = time.getHours();


	$scope.uptime = function(){
		
	};
	$scope.sendavto = function(){
		$http.post("/api/auctions/createauction",$scope.data).success(function(req) {
			if (req.success){
				console.log(req);
			}else{
				//$scope.errors. = "Такой логин уже существует";
			}
		});

	};
	
}]);