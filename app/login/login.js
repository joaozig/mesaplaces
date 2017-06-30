angular.module('app.login', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl as ctrl'
	});
}])

.controller('LoginCtrl', ['$state', '$auth', function($state, $auth) {
	var ctrl = this;

	/** Properties **/
	ctrl.isLoginError = false;

	/** Methods */
	ctrl.login = login;
	ctrl.facebookLogin = facebookLogin;

	/*************/
	function login(user) {
		$auth.submitLogin(user)
			.then(function(response) {
				$state.go('app.places');
			})
			.catch(function(response) {
				ctrl.isLoginError = true;
				ctrl.errorMessage = 'E-mail e/ou Senha incorreto(s).';
			});
	}

	function facebookLogin() {
		$auth.authenticate('facebook')
			.then(function(resp) {
				$state.go('app.places');
			})
			.catch(function(resp) {
				ctrl.isLoginError = true;
				ctrl.errorMessage = 'Não foi possível entrar com o Facebook.';
			});
	}
}]);