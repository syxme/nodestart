
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
app.filter('dateforms', [function() {
    return function (dateforms) { 
      var year = new Date(dateforms).getFullYear();
      var month =  new Date(dateforms).getMonth()+1;
      var day = new Date(dateforms).getDate();
        var monthNames = [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
            'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'декабря' ];
        return day+" "+monthNames[month]+" "+year+" Года";
    }
}]);
app.filter('ocr', [function() {
    return function (ocr) { 
        return Math.round((ocr*100)/100);
    }
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
