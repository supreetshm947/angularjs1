var appModule = angular.module('myApp', [
  'ngRoute',
  'artistController'
]);

appModule.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl : 'partials/list.html',
		controller : 'listController'
	}).
	when('/details/:itemId',{
		templateUrl : 'partials/details.html',
		controller : 'detailController'
	}).
	otherwise({
		redirectTo : '/list'
	});
}]);