app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      title:"Аукцион ИНТРО - Главная",
      templateUrl: "/templates/layer/main.html",
      controller: "main"
    });

    $routeProvider.when("/registration/", {
      title:"Регистрация на сайте",
      templateUrl: "/templates/layer/main.html",
      controller: "registration"
    });
    $routeProvider.when("/login/", {
      title:"Вход на сайт",
      templateUrl: "/templates/layer/main.html",
      controller: "login"
    });
    //cabinet
    $routeProvider.when("/cabinet/", {
      title:"Личный кабинет",
      templateUrl: "/templates/layer/main.html",
      controller: "cabinet"
    });
    $routeProvider.when("/cabinet/addcar/", {
      title:"Личный кабинет - добавить автомобиль",
      templateUrl: "/templates/layer/main.html",
      controller: "addcar"
    });
    $routeProvider.when("/cabinet/mycar/", {
      title:"Личный кабинет - мои автомобили", 
      templateUrl: "/templates/layer/main.html",
      controller: "mycar"
    });
    //cabinet
    $locationProvider.html5Mode(true);
  }
]);