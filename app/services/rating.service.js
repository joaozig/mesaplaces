angular.module('app')

.factory('ratingService', function($q, $http, CONFIG) {
  var ratingService = {
  	addRating: addRating
  };

  return ratingService;

  /**********/
	function addRating(rating) {
		var deferred = $q.defer();

		$http.post(CONFIG.apiUrl + '/ratings/add', {rating: rating})
	    .success(function(response){
	      deferred.resolve(response);
	    })
	    .error(function(data, status, headers,config){
	      deferred.reject(CONFIG.requestErrorMessage);
	    });

	  return deferred.promise;
	}
});