app.controller("menu", [
"$scope","$location", function($scope,$location) {
	$scope.linc = function(path) {
    if ($location.path() == path) {
      return "active";
    } else {
      return "";
    }
	}
}]);