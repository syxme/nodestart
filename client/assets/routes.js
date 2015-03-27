app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/templates/main.html",
      controller: "main"
    });
    $routeProvider.when("/login/", {
      templateUrl: "/templates/login.html",
      controller: "login"
    });
    $routeProvider.when("/admin/users/", {
      templateUrl: "/templates/users.html",
      controller: "users"
    });

    $locationProvider.html5Mode(true);
  }
  // ,
  // "RestangularProvider", function(RestangularProvider) {
  //   return RestangularProvider.setBaseUrl("/api");
  // }
]);