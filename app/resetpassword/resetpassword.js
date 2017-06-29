angular.module('app.resetpassword', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('resetpassword', {
		url: '/resetpassword',
		templateUrl: 'resetpassword/resetpassword.html',
		controller: 'ResetPasswordCtrl as ctrl'
	});	
}])

.controller('ResetPasswordCtrl', ['$auth', '$location', function($auth, $location) {
	var ctrl = this;

	console.log(window.location.search.substr(1));

	/** Properties **/
	ctrl.isResetSuccess = false;
	ctrl.isResetError = false;

	/** Methods */
	ctrl.resetPassword = function(user) {
		$auth.requestPasswordReset(user)
			.then(function(response) {
				ctrl.isResetSuccess = true;
				ctrl.isResetError = false;
				console.log(response);
			})
			.catch(function(response) {
				ctrl.isResetSuccess = false;
				ctrl.isResetError = true;
				console.log(response);
			});
	}
}]);