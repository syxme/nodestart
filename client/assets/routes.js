app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/main/", {
      templateUrl: "/main.html",
      controller: "main"
    });
    $routeProvider.when("/login/", {
      templateUrl: "/login.html",
      controller: "login"
    });
    $routeProvider.when("/admin/", {
      templateUrl: "/admin/index.html",
      controller: "admin"
    });
    $routeProvider.when("/", {
      redirectTo: "/login/"
    });
    $locationProvider.html5Mode(true);
  }
]);