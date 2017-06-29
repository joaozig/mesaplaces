angular.module('app.resetpassword', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('resetpassword', {
		url: '/resetpassword',
		templateUrl: 'resetpassword/resetpassword.html',
		controller: 'ResetPasswordCtrl'
	});	
}])

.controller('ResetPasswordCtrl', [function() {

}]);