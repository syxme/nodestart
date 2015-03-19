app.controller("main", [
  "$scope", "$http", function($scope, $http) {
    $http.post("/index/user",{}).success(function(response) {
  		$scope.content = response;
  	});
  }
]);