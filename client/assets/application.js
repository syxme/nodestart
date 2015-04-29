
var app = angular.module("AuctionR", ["ngRoute","ngAnimate","restangular","angucomplete-alt"]);

app.run(["$http", "$rootScope", "$location","$q","$window",function ($http,$rootScope,$location,$q,$window) {
  var defer = $q.defer();
  $rootScope.user = {};
  $http.post("/api/users/auth").success(function(req) {
    if (req.success){
      $rootScope.user = req.req;
      $rootScope.auth = true;

    }else{
      $rootScope.auth = false;
      $rootScope.user.firstname = "Гость" 
    }
  });
  $rootScope.iheader = "/templates/index/header.html";
  $rootScope.icontent = "/templates/index/content.html";
  $rootScope.countrys = function(){
    $http.post('/api/utilits/getcountry').success(function(req) {
      defer.resolve(req.response.items);
    });
    return defer.promise;
  };
  $rootScope.exit = function() {
    $http.get("/api/users/exit").success(function(req) {
      if (req.success){ 
        $rootScope.auth = false;  
        $window.location.reload();

      }else{
        $scope.info = "Error";
      }
    });
  } 
  $rootScope.linc = function(path) {
    if ($location.path() == path) {
      return "active";
    } else {
      return "";
    }
  };

}]);

app.config([
  "RestangularProvider", function(RestangularProvider) {
   return RestangularProvider.setBaseUrl("/api/");
  }
]);
