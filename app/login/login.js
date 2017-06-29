angular.module('app.login', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl as ctrl'
	});
}])

.controller('LoginCtrl', ['$state', function($state) {
	var ctrl = this;

	ctrl.login = function() {
		$state.go('app.places');
	}
}]);