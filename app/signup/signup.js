angular.module('app.signup', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'signup/signup.html',
		controller: 'SignupCtrl as ctrl'
	});
}])

.controller('SignupCtrl', ['$state', '$auth', function($state, $auth) {
	var ctrl = this;

	/** Properties **/
	ctrl.isSignupError = false;

	/** Methods */
	ctrl.signup = function(user) {
		$auth.submitRegistration(user)
			.then(function(response) {
				$state.go('app.places');
			})
			.catch(function(response) {
				ctrl.isSignupError = true;
				console.log(response);
			});
	}
}]);