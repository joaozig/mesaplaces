angular.module('app.bookmarks', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.bookmarks', {
		url: '/bookmarks',
		templateUrl: 'bookmarks/bookmarks.html',
		controller: 'BookmarksCtrl as ctrl'
	});
}])

.controller('BookmarksCtrl', [function() {
	var ctrl = this;

	ctrl.currentPlace;
	ctrl.newRating;

	ctrl.places = [
		{
			name: 'Place 1',
			ratings: [
				{name: 'João Ricardo', grade: 4, comments: 'Teste teste teste teste teste teste'},
				{name: 'José Ricardo', grade: 3, comments: 'Teste teste2 teste 3'},
				{name: 'Raquel Holanda', grade: 2, comments: 'Lorem ipsum dolor sit amet.'}
			]
		},
		{
			name: 'Place 2',
			ratings: [
				{name: 'Pedro Pedro', grade: 3, comments: 'Teste teste teste teste teste teste'},
				{name: 'Maria Maria', grade: 5, comments: 'Lorem ipsum dolor sit amet.'}
			]
		}
	];

	ctrl.setCurrentPlace = function(place) {
		ctrl.currentPlace = place;
	}

	ctrl.saveNewRating = function(rating) {
		var newRating = {
			name: 'Nome do usuário',
			grade: rating.grade,
			comments: rating.comments
		};

		console.log(newRating);
		ctrl.currentPlace.ratings.unshift(newRating);
	}
}]);