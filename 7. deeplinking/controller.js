var myNamespace = angular.module('artistController', []);
myNamespace.controller('listController', function($scope, $http){
	$http.get("data.json").success(function(data){
		$scope.artist = data;
		$scope.artistorder = "name";
	})
	});

