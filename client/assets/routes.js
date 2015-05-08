app.config([
  "$routeProvider","$locationProvider", function($routeProvider,$locationProvider) {
    $routeProvider.when("/", {
      premission:"all",
      title:"Аукцион ИНТРО - Главная",
      templateUrl: "/templates/layer/main.html",
      controller: "main"
    });

    $routeProvider.when("/registration/", {
      premission:"all", 
      title:"Регистрация на сайте",
      templateUrl: "/templates/layer/main.html",
      controller: "registration"
    });
    $routeProvider.when("/login/", {
      premission:"all",
      title:"Вход на сайт",
      templateUrl: "/templates/layer/main.html",
      controller: "login"
    });
    //cabinet
    $routeProvider.when("/cabinet/", {
      premission:"user",
      redirectX:"/login/",
      title:"Личный кабинет",
      templateUrl: "/templates/layer/main.html",
      controller: "cabinet"
    });
    $routeProvider.when("/cabinet/addcar/", {
      premission:"user",
      redirectX:"/login/",
      title:"Личный кабинет - добавить автомобиль",
      templateUrl: "/templates/layer/main.html",
      controller: "addcar"
    });
    $routeProvider.when("/cabinet/mycar/", {
      premission:"user",
      redirectX:"/login/",
      title:"Личный кабинет - мои автомобили", 
      templateUrl: "/templates/layer/main.html",
      controller: "mycar"
    });
    $routeProvider.when("/cabinet/auctioneditor/", {
      premission:"user",
      redirectX:"/cabinet/login/",
      title:"Личный кабинет - мои автомобили", 
      templateUrl: "/templates/layer/main.html",
      controller: "auctioneditor"
    });
    //cabinet
    $locationProvider.html5Mode(true);
  }
]);