var myNamespace = angular.module('myApp', []);
myNamespace.controller('myController', function myController($scope, $http){
	$http.get("../js/data.json").success(function(data){
		$scope.author = data;
	})
	});