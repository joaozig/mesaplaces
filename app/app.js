angular.module('app', [
	'ui.router',
	'ngGeolocation',
	'app.login',
	'app.resetpassword',
	'app.signup',
	'app.places',
	'app.bookmarks',
	'app.profile'
])
.config(
	['$stateProvider', '$locationProvider', '$urlRouterProvider',
		function($stateProvider, $locationProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');

	$stateProvider.
		state('app', {
			abstract: true,
			templateUrl: 'application.html',
			controller: 'AppCtrl as appctrl'
		});
  // $locationProvider
  //   .html5Mode(true)
  //   .hashPrefix('!')
}])

.controller('AppCtrl', ['$state', '$location', function($state, $location) {
	var ctrl = this;

	ctrl.location = $location;

	ctrl.logout = function() {
		$state.go('login');
	}
}]);