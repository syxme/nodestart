app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/templates/layer/main.html",
      controller: "main"
    });

    $routeProvider.when("/registration/", {
      templateUrl: "/templates/layer/main.html",
      controller: "registration"
    });
    $routeProvider.when("/login/", {
      templateUrl: "/templates/layer/main.html",
      controller: "login"
    });
    $routeProvider.when("/cabinet/", {
      templateUrl: "/templates/layer/main.html",
      controller: "cabinet"
    });
    $locationProvider.html5Mode(true);
  }
]);