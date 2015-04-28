app.controller("registration", [
"$scope", "$http", "$rootScope","$location","$window", function($scope, $http, $rootScope,$location,$window) {
	$scope.$root.content = "/templates/subtpl/registration.html";
	$scope.contentTitle = "Быстрая регистрация!!!";
	$scope.errors = {};
	$scope.data = {};


	$scope.Register = function() {
		var data	= {};
		$scope.info = "";
		data.login	= $scope.ilogin;
		data.pass	= $scope.ipass;
		
		if (data.login && data.pass != null){
			if (data.login.length >= 3){
				$http.post("/api/users/register",data).success(function(req) {
					if (req.success){
						$rootScope.User = req.req;
						$rootScope.auth = $scope.auth = true;	
					}else{
						$scope.info = "Error: Чувак, такой пользователь есть уже!";
					}
				});
			}else{
				$scope.info = "Error: Чувак, замути больше букв!";
			}
		}else{
			$scope.info = "Error";
		}
	}
	function validateEmail(email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(email);
	}
	$scope.chart = function(){
		console.log('SS',$scope.selectedPerson);
	}
	$scope.people = [
            {firstName: "Daryl", surname: "Rowland", twitter: "@darylrowland", pic: "img/daryl.jpeg"},
            {firstName: "Alan", surname: "Partridge", twitter: "@alangpartridge", pic: "img/alanp.jpg"},
            {firstName: "Annie", surname: "Rowland", twitter: "@anklesannie", pic: "img/annie.jpg"}
    ];
	$scope.checkfield = function() {
		var is = true;
		if (!$scope.data.firstname||$scope.data.firstname.length<4){
			$scope.errors.firstname = "Введите имя пользователя";
			is = false;
		}else{
			$scope.errors.firstname = "";
		}

		if (!$scope.data.lastname||$scope.data.lastname.length<4){
			$scope.errors.lastname = "Введите фамилию пользователя";
			is = false;
		}else{
			$scope.errors.lastname = "";
		}

		if (!validateEmail($scope.data.email)){
			$scope.errors.email = "Введите email пользователя";
			is = false;
		}else{
			$scope.errors.email = "";
		}
		return(false);
	}
	
	
 }
]);