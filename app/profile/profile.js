angular.module('app.profile', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.profile', {
		url: '/profile',
		templateUrl: 'profile/profile.html',
		controller: 'ProfileCtrl as ctrl'
	});
}])

.controller('ProfileCtrl', ['userService', function(userService) {
	var ctrl = this;

	/** Attributes **/
	ctrl.isEditProfile = false;
	ctrl.editProfileSuccess = false;
	ctrl.editProfileError = false;
	ctrl.errorMessage;
	ctrl.currentUser;
	ctrl.editUser = { name: '', email: '' };
	
	/** Initialization **/
	init();

	/** Methods **/
	ctrl.editProfile = editProfile;
	ctrl.saveProfile = saveProfile;


	/**********/
	function init() {
		userService.getCurrentUser().then(function(user) {
			ctrl.currentUser = user;
			ctrl.editUser.name = user.name;
			ctrl.editUser.email = user.email;
		});
	}

	function editProfile() {
		ctrl.isEditProfile = true;
	}

	function saveProfile(user) {
		userService.updateCurrentUser(user)
			.then(
				function(response) {
					console.log(response);
					if(response.status) {
						ctrl.currentUser = response.user;
						ctrl.isEditProfile = false;
						ctrl.editProfileSuccess = true;
						ctrl.editProfileError = false;
					} else {
						ctrl.editProfileSuccess = false;
						ctrl.editProfileError = true;
						ctrl.errorMessage = 'Tente com outros dados.'
					}
				},
				function(error) {
					ctrl.editProfileSuccess = false;
					ctrl.editProfileError = true;
					ctrl.errorMessage = error;
				}
			);
	}
}]);