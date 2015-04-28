
var app = angular.module("AuctionR", ["ngRoute","ngAnimate","restangular","angucomplete"]);

app.run(["$http", "$rootScope", "$location",function ($http,$rootScope,$location) {

$rootScope.iheader = "/templates/index/header.html";
$rootScope.icontent = "/templates/index/content.html";
  $http.get('http://api.vk.com/method/database.getCountries?v=5.5&need_all=1&count=1000').success(function(req) {
    console.log(req.response);
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
