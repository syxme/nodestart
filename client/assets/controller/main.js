app.controller("main", [
  "$scope", "$http", function($scope, $http) {
  	$scope.data = {};	
  	$scope.nowDate = new Date();	
  	var dataDays = {};
  	var updateStatus = function(){
	  	$http.post("/api/daymoney/get").success(function(req) {
			if (req.success&& req.response.data!=null){	
				dataDays = req.response.data;
				$scope.data.GetnextMoney = Date.strFormat(dataDays.GetnextMoney)
				$scope.data.GetMoney = Date.strFormat(dataDays.GetMoney);
				$scope.data.money = dataDays.money;
				calculation(req.response.payout);
			}else{
				$scope.info = "Error: Чувак не найден!";
			}
		});		
  	}

	var calculation = function(trans){
		var days = Date.daysBetween(new Date(dataDays.GetnextMoney),new Date());
		var tmp;	
		$scope.data.transaction = [];
		$scope.data.transactionAll = [];
		$scope.outmoney = dataDays.money;
		trans.forEach(function(day){
			$scope.outmoney -= day.money; 
			tmp = angular.copy(day);
			if (tmp.money>0){
				tmp.money = tmp.money  *-1;
			}else{
				tmp.money = tmp.money.replace(/\-/g, "+");
			}
			$scope.data.transactionAll.push(day);
		});

		days = days * -1
		$scope.days = days;
		$scope.daymoney = Math.round(($scope.outmoney / days)*100)/100;
		$scope.daysx = $scope.daymoney;

		trans.forEach(function(day){
			tmp = new Date(day.date).getDate()+"."+new Date(day.date).getMonth();
			if (tmp == new Date().getDate()+"."+new Date().getMonth()){
				tmp = angular.copy(day);
				if (tmp.money>0){
					tmp.money = tmp.money  *-1;
				}else{
					tmp.money = tmp.money.replace(/\-/g, "+");
				}
				$scope.data.transaction.push(tmp);
				$scope.daysx -= day.money;
			}
		
		});
		$scope.daymoney = $scope.outmoney/ days;

		if ($scope.daysx<0){
			$scope.daysx = 0;
			$scope.infoBlock  = {'box-shadow': '0px 0px 13px 1px #F00'};
		}else{
			$scope.infoBlock  = {'box-shadow': '0px 0px 13px 1px #CBFFCE'};
		}

	}



	$scope.removeTrans = function(id){
		console.log(id);
		$http.post("/api/daymoney/rmtr",{id:id}).success(function(req) {
				if (req.success){	
					console.log("rmtr:ok");
					updateStatus();
				}else{
					$scope.info = "Error";
				}
			});
	}


	$scope.Payout = function(ins){
		var data = {};
		data.money = $scope.payout;
		if(ins){
			data.money = data.money *-1;
		}
		
		data.date = new Date();
		if ($scope.payout!=null){
			$http.post("/api/daymoney/payout",{data:data}).success(function(req) {
				if (req.success){	
					console.log("payout:ok");
					updateStatus();
				}else{
					$scope.info = "Error";
				}
			});
		}else{
			console.log("error payout");
		}
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