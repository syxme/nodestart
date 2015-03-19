
var app = angular.module("FasterGet", ["ngRoute"]);

app.run(["$http", "$rootScope", "$location",function ($http,$rootScope,$location) {
  $rootScope.isActive = function(path) {
    if ($location.path() == path) {
      return "active";
    } else {
      return "";
    }
  };
  $http.post("api/users/auth").success(function(req) {
    if (req.success){
      $rootScope.User = req.req;
      $rootScope.auth = true;
    }else{
      $rootScope.auth = false;
    }
  });
}]);