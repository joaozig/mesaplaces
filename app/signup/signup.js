angular.module('app.signup', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'signup/signup.html',
		controller: 'SignupCtrl'
	});
}])

.controller('SignupCtrl', [function() {

}]);