app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/main?", {
      templateUrl: "/main.html",
      controller: "main"
    });
    $routeProvider.when("/login?", {
      templateUrl: "/register.html",
      controller: "login"
    });
    $routeProvider.when("/admin/", {
      templateUrl: "/admin/index.html",
      controller: "admin"
    });
    //return $routeProvider.otherwise({
    //  redirectTo: "/"
   // });
    $locationProvider.html5Mode(true);
  }
]);