
var app = angular.module("FasterGet", ["ngRoute","ngAnimate","restangular"]);

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

///
Date.daysBetween = function ( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  return Math.round(difference_ms/one_day); 
}
Date.strFormat = function (date) {
  return ((new Date(date).getFullYear())+"."+(new Date(date).getMonth()+1)+"."+(new Date(date).getDate())); 
}
///
app.config([
  "RestangularProvider", function(RestangularProvider) {
   return RestangularProvider.setBaseUrl("/api/");
  }
]);
