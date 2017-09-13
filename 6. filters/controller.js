var myNamespace = angular.module('myApp', []);
myNamespace.controller('myController', function myController($scope, $http){
	$http.get("data.json").success(function(data){
		$scope.artist = data;
	})
	});