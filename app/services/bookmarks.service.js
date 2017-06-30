angular.module('app')

.factory('bookmarksService', function($q, $http, CONFIG) {
  var bookmarksService = {
  	getBookmarks: getBookmarks,
  	addPlace: addPlace
  };

  return bookmarksService;

  /**********/
	function getBookmarks() {
		var deferred = $q.defer();

	  $http.get(CONFIG.apiUrl + '/bookmarks')
	  	.success(function(response) {
	  		deferred.resolve(response);
	  	})
	  	.error(function(data, status, headers, config) {
	  		deferred.reject(CONFIG.requestErrorMessage);
	  	});

	  return deferred.promise;
	}

	function addPlace(place) {
		var deferred = $q.defer();

		$http.post(CONFIG.apiUrl + '/bookmarks/add', {place: place})
	    .success(function(response){
	      deferred.resolve(response);
	    })
	    .error(function(data, status, headers,config){
	      deferred.reject(CONFIG.requestErrorMessage);
	    });

	  return deferred.promise;
	}
});