
var app = angular.module("AuctionR", ["ngRoute","ngAnimate","ui.bootstrap","restangular","angucomplete-alt","angularFileUpload"]);

app.run(["$http", "$rootScope", "$location","$q","$window",function ($http,$rootScope,$location,$q,$window) {
  var defer = $q.defer();
  $rootScope.user = {};

  if (ACU){
    $rootScope.user = JSON.parse(Base64.decode(ACU));
    $rootScope.auth = true;
  }else{
    $rootScope.auth = false;
    $rootScope.user.firstname = "Гость";
  }
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
  };

  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);




app.filter('Numbers', [function() {
  return function(ocr) { 
    if (ocr){
      return ocr.replace(/\d(?=(?:\d{3})+\b)/g, "$&" + ' ');
    }
    else{
      return "";
    }
  };
}]);

app.filter('type_kuzov', [function() {
  return function(ocr) { 
    return type_kuzov[ocr];
  };
}]);
app.config([
  "RestangularProvider", function(RestangularProvider) {
   return RestangularProvider.setBaseUrl("/api/");
  }
]);
