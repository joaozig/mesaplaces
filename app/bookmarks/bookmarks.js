angular.module('app.bookmarks', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.bookmarks', {
		url: '/bookmarks',
		templateUrl: 'bookmarks/bookmarks.html',
		controller: 'BookmarksCtrl as ctrl'
	});
}])

.controller('BookmarksCtrl', ['bookmarksService', function(bookmarksService) {
	var ctrl = this;

	/** Attributes **/
	ctrl.bookmarks;	
	ctrl.currentBookmark;
	ctrl.newRating;
	ctrl.showLoading = true;
  ctrl.showErrorMessage = false;
  ctrl.errorMessage;

  /** Methods **/
  ctrl.setCurrentBookmark = setCurrentBookmark;
  ctrl.saveNewRating = saveNewRating;

  /** Initialization **/
  init();

  /***********/
  function init() {
  	bookmarksService.getBookmarks()
  		.then(
  			function(response) {
  				ctrl.showLoading = false;

  				console.log(response);
  				ctrl.bookmarks = response;
  			},
  			function(error) {
  				ctrl.showLoading = false;
  				ctrl.showErrorMessage = true;
  				ctrl.errorMessage = error;
					console.log(error);
  			}
  		);
  }

	function setCurrentBookmark(bookmark) {
		ctrl.currentBookmark = bookmark;
	}

	function saveNewRating(rating) {
		var newRating = {
			name: 'Nome do usuário',
			grade: rating.grade,
			comments: rating.comments
		};

		ctrl.currentPlace.ratings.unshift(newRating);
	}
}]);