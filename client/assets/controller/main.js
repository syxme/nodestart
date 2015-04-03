app.controller("main", [
  "$scope", "$http", function($scope, $http) {
  	$scope.data = {};	
  	var dataDays = {};
  	var updateStatus = function(){
	  	$http.post("/api/daymoney/get").success(function(req) {
			if (req.success){	
				dataDays = req.response.data;
				$scope.data.GetnextMoney = Date.strFormat(dataDays.GetnextMoney)
				$scope.data.GetMoney = Date.strFormat(dataDays.GetMoney);
				$scope.data.money = dataDays.money;
				calculation();
			}else{
				$scope.info = "Error: Чувак не найден!";
			}
		});		
  	}
  	

	var calculation = function(){
		var days = Date.daysBetween(new Date(dataDays.GetnextMoney),new Date());
		days = days * -1
		$scope.days = days;
		$scope.daymoney =Math.round((dataDays.money / days)*100)/100;
	}
	$scope.Payout = function(){
		var data = {};
		data.money = $scope.payout;
		data.date = new Date();
		$http.post("/api/daymoney/payout",{data:data}).success(function(req) {
			if (req.success){	
				console.log("ok");
			}else{
				$scope.info = "Error: Чувак не найден!";
			}
		});	

	}
 	$scope.Update = function(){
 		var data = $scope.data;
 		if (data.GetMoney && data.GetnextMoney && data.money != null){
 			data.GetMoney = data.GetMoney.replace(/\./g, "-");
 			data.GetnextMoney = data.GetnextMoney.replace(/\./g, "-");
			$http.post("/api/daymoney/update",{data:data}).success(function(req) {
				if (req.success){	
					updateStatus();
				}else{
					$scope.info = "Error: Чувак не найден!";
				}
			});
			
		}else{
			$scope.info = "Error";
		}
 	}

 	updateStatus();
  }
]);