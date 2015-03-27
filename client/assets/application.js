
var app = angular.module("FasterGet", ["ngRoute","restangular"]);

app.run(["$http", "$rootScope", "$location",function ($http,$rootScope,$location) {

$rootScope.pageTitle = "Главная";

  $rootScope.linc = function(path) {
    if ($location.path() == path) {
      return "active";
    } else {
      return "";
    }
  };
  $http.post("/api/users/auth").success(function(req) {
    if (req.success){
      $rootScope.User = req.req;
      $rootScope.auth = true;

    }else{
      $rootScope.auth = false;
      $location.path("/login/");
    }
  });
}]);
app.config([
  "RestangularProvider", function(RestangularProvider) {
   return RestangularProvider.setBaseUrl("/api/");
  }
]);
