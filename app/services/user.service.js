angular.module('app')

.factory('userService', function($q, $http, CONFIG) {
  var userService = {
  	getCurrentUser: getCurrentUser,
  	updateCurrentUser: updateCurrentUser
  };

  return userService;

  /**********/
	function getCurrentUser() {
		var deferred = $q.defer();

	  $http.get(CONFIG.apiUrl + '/users/current')
	  	.success(function(response) {
	  		deferred.resolve(response);
	  	})
	  	.error(function(data, status, headers, config) {
	  		deferred.reject(CONFIG.requestErrorMessage);
	  	});

	  return deferred.promise;
	}

	function updateCurrentUser(user) {
		var deferred = $q.defer();

		$http.patch(CONFIG.apiUrl + '/users/update', {user: user})
	    .success(function(response){
	      deferred.resolve(response);
	    })
	    .error(function(data, status, headers,config){
	      deferred.reject(CONFIG.requestErrorMessage);
	    });

	  return deferred.promise;
	}
});