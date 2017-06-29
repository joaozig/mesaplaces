angular.module('app', [
	'ui.router',
	'ng-token-auth',
	'ngGeolocation',
	'app.login',
	'app.resetpassword',
	'app.signup',
	'app.places',
	'app.bookmarks',
	'app.profile'
])
.config(
	['$authProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider',
		function($authProvider, $stateProvider, $locationProvider, $urlRouterProvider) {

	$authProvider.configure({
		apiUrl: 'http://localhost:3000/api'
	});

	$urlRouterProvider.otherwise('/login');

	$stateProvider.
		state('app', {
			abstract: true,
			templateUrl: 'application.html',
			controller: 'AppCtrl as appctrl',
			resolve: {
				auth: function($auth) {
					return $auth.validateUser();
				}
			}
		});

  // $locationProvider
  //   .html5Mode(true)
  //   .hashPrefix('!')
}])

.controller('AppCtrl', ['$state', '$location', '$auth', function($state, $location, $auth) {
	var ctrl = this;

	ctrl.location = $location;

	ctrl.logout = function() {
		$auth.signOut()
			.then(function(response) {
				$state.go('login');
			})
			.catch(function(response) {
				alert('ocorreu um erro ao tentar fazer o logout.');
			});
	}
}]);