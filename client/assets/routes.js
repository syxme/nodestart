app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/main.html",
      controller: "main"
    });
    $routeProvider.when("/login/", {
      templateUrl: "/login.html",
      controller: "login"
    });
    $routeProvider.when("/admin/users/", {
      templateUrl: "/admin/users.html",
      controller: "users"
    });

    $locationProvider.html5Mode(true);
  }
  // ,
  // "RestangularProvider", function(RestangularProvider) {
  //   return RestangularProvider.setBaseUrl("/api");
  // }
]);