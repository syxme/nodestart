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
    $locationProvider.html5Mode(true);
  }
]);