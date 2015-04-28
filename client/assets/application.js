
var app = angular.module("AuctionR", ["ngRoute","ngAnimate","restangular","angucomplete"]);

app.run(["$http", "$rootScope", "$location","$q",function ($http,$rootScope,$location,$q) {
  var utils = $q.defer();

  $rootScope.iheader = "/templates/index/header.html";
  $rootScope.icontent = "/templates/index/content.html";
  $rootScope.untils = {};
  $rootScope.countrys = utils.promise;

  $rootScope.countrys.then(function(){
    $http.get('/api/utilits/getcountry').success(function(req) {
      console.log('AFASFASFAS');
      return req.response;
    });
  });
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
