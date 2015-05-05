app.controller("registration", [
"$scope", "$http", "$rootScope","$location","$window","$q", function($scope, $http, $rootScope,$location,$window,$q) {
  	if ($rootScope.auth){
  		$location.path("/");
  	}
	$scope.$root.content = "/templates/subtpl/registration.html";
	$scope.contentTitle = "Быстрая регистрация!!!";
	$scope.errors = {};
	$scope.data = {};

	var country_id = 0;
	var region_id = 0;
	$scope.state = false;
	$scope.citi = false;
	$scope.registr = function() {
		if ($scope.checkfield()){
			var data = angular.copy($scope.data);
			$http.post("/api/users/register",data).success(function(req) {
				if (req.success){
					$rootScope.User = req.req;
					$rootScope.auth = $scope.auth = true;	
					$location.path("/");
				}else{
					$scope.errors.login = "Такой логин уже существует";
				}
			});
		}		
	};

	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	$scope.country = countrys.items;
	$scope.selectedCountry = function(e){
		country_id = e.originalObject.id;
		$scope.data.country = e.originalObject.title;
		$http.post('/api/utilits/getregions',{q:'',country_id:country_id}).success(function(req) {
			$scope.Regions = req.response.items;
			$scope.state = true;
		});
	};
	$scope.selectedRegion = function (e){
		$scope.data.region = e.originalObject.title;
		region_id = e.originalObject.id;
		$http.post('/api/utilits/getcities',{country_id:country_id,region_id:region_id}).success(function(req) {
			$scope.Cities = req.response.items;
		});
		$scope.citi = true;
	};
	$scope.changeCities = function(str){
		$http.post('/api/utilits/getcities',{query:str,country_id:country_id,region_id:region_id}).success(function(req) {
			$scope.Cities = req.response.items;
		});	
	};
	$scope.selectedCities = function (e){
		$scope.data.city = e.originalObject.title;
	};

	$scope.checkfield = function() {
		var is = true;
		if (!$scope.data.login||$scope.data.login.length<3){
			$scope.errors.login = "Неверный логин или слишком короткий";
			is = false;
		}else{
			$scope.errors.login = "";
		}

		if (!$scope.data.password||$scope.data.password.length<6){
			$scope.errors.password = "Пароль слишком короткий, минимум 6 знаков";
			is = false;
		}else{
			$scope.errors.password = "";
		}

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

		if (!$scope.data.adress||$scope.data.adress.length<3){
			$scope.errors.adress = "Введите правельный адрес";
			is = false;
		}else{
			$scope.errors.adress = "";
		}

		if (!$scope.data.zip||$scope.data.zip.length<5){
			$scope.errors.zip = "Введите правельный zip";
			is = false;
		}else{
			$scope.errors.zip = "";
		}
		if (!$scope.data.phone||$scope.data.phone.length<11){
			$scope.errors.phone = "Ошибка, например:79281234567";
			is = false;
		}else{
			$scope.errors.phone = "";
		}
		if (!validateEmail($scope.data.email)){
			$scope.errors.email = "Введите email пользователя";
			is = false;
		}else{
			$scope.errors.email = "";
		}
		if (!$scope.data.country){
			$scope.errors.country = "Выберите страну из списка";
			is = false;
		}else{
			$scope.errors.country = "";
			if (!$scope.data.region){
				$scope.errors.region = "Выберите регион из списка";
				is = false;
			}else{
				$scope.errors.region = "";
				if (!$scope.data.city){
					$scope.errors.city = "Выберите город из списка";
					is = false;
				}else{
					$scope.errors.city = "";
				}
			}
		}
		if (is){
			return true;
		}else{
			return false;
		}
	};		
 }
]);