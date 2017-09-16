var myNamespace = angular.module('artistController', []);
myNamespace.controller('listController', function($scope, $http){
	$http.get("data.json").success(function(data){
		$scope.artist = data;
		$scope.artistorder = "name";
	})
	});

myNamespace.controller('detailController', function($scope, $http, $routeParams){
	$http.get("data.json").success(function(data){
		$scope.artist = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId>0){
			$scope.prevItem = Number($routeParams.itemId)-1;
		}else{
			$scope.prevItem = $scope.artist.length-1;
		}

		if($routeParams.itemId<$scope.artist.length-1){
			$scope.nextItem = Number($routeParams.itemId)+1;
		}else{
			$scope.nextItem = 0;	
		}
	})
	});