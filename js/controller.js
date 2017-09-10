var myNamespace = angular.module('myApp', []);
myNamespace.controller('myController', function myController($scope){
		$scope.author = {
			'name' : 'john',
			'title' : 'title',
			'company' : 'abc'
		}
	});