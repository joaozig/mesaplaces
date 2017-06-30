angular.module('app.bookmarks', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.bookmarks', {
		url: '/bookmarks',
		templateUrl: 'bookmarks/bookmarks.html',
		controller: 'BookmarksCtrl as ctrl'
	});
}])

.controller('BookmarksCtrl', ['bookmarksService', 'ratingService', function(bookmarksService, ratingService) {
	var ctrl = this;

	/** Attributes **/
	ctrl.bookmarks;	
	ctrl.currentBookmark;
	ctrl.newRating;
	ctrl.showLoading = true;
  ctrl.showErrorMessage = false;
  ctrl.errorMessage;
  ctrl.showSuccessMessage = false;
  ctrl.successMessage;

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
  				ctrl.bookmarks = response;
  			},
  			function(error) {
  				ctrl.showLoading = false;
  				ctrl.showErrorMessage = true;
  				ctrl.errorMessage = error;
  			}
  		);
  }

	function setCurrentBookmark(bookmark) {
		ctrl.showErrorMessage = false;
		ctrl.showSuccessMessage = false;
		ctrl.currentBookmark = bookmark;
	}

	function saveNewRating(rating) {
		rating.place_id = ctrl.currentBookmark.place.id;
		ctrl.showErrorMessage = false;

		ratingService.addRating(rating)
			.then(
				function(response) {
					if(response.status) {
						ctrl.currentBookmark.place.ratings.unshift(response.rating);
						ctrl.showSuccessMessage = true;
						ctrl.successMessage = 'Avaliação realizada com sucesso!'
					} else {
						ctrl.showErrorMessage = true;
						ctrl.errorMessage = 'Não foi possível salvar a avaliação.'
					}
				},
				function(error) {
					ctrl.showErrorMessage = true;
					ctrl.errorMessage = error;
				}
			);
	}
}]);