// Creating angular Application with module name "SecurityTestApp"
var app = angular.module('SecurityTestApp', []);

// If we implement the basic security in spring boot then the response will
// contains the header 'WWW-Authenticate: Basic'. So the browser will popup a
// alert to get the user credentials. To avoid that we have to set a header in
// every request we are making using AngularJs.
app.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
} ]);

// Creating the Angular Controller
app.controller('AppCtrl', function($http, $scope) {

	// method for login
	var login = function() {
		$http.get('/user').success(function(res) {
			$scope.user = res;
			console.log(res);
		}).error(function(error) {
			$scope.resource = error;
		});

	};
	login();
	// method for getting an Administrator Resource
	$scope.getAdminResouce = function() {
	};
	// method for getting a User Resource
	$scope.getUserResouce = function() {
	};
	// method for logout
	$scope.logout = function() {
		$http.post('/logout').success(function(res) {
			$scope.user = null;
		}).error(function(error) {
			console.log("error >> ", error);
		});
	};
});