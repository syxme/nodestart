app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/templates/layer/main.html",
      controller: "main"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);