angular.module('app.profile', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.profile', {
		url: '/profile',
		templateUrl: 'profile/profile.html',
		controller: 'ProfileCtrl as ctrl'
	});
}])

.controller('ProfileCtrl', [function() {
	var ctrl = this;

	ctrl.isEditProfile = false;

	ctrl.editProfile = function() {
		ctrl.isEditProfile = true;
	}

	ctrl.saveProfile = function() {
		// save profile
		ctrl.isEditProfile = false;
	}
}]);