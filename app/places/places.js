angular.module('app.places', ['ui.router', 'ngGeolocation'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.places', {
		url: '/places',
		templateUrl: 'places/places.html',
		controller: 'PlacesCtrl'
	});
}])

.controller('PlacesCtrl', ['$geolocation', '$scope', function($geolocation, $scope) {

	$scope.places = ['place 1', 'place 2', 'place 3'];

	$geolocation.getCurrentPosition({
		timeout: 60000
	}).then(function(position) {
		console.log('entrou')
		console.log(position)
		$scope.myPosition = position.coords.latitude + ' ' + position.coords.longitude;
		initMap(position.coords.latitude, position.coords.longitude);
	});

  var map;
  var infowindow;

  function initMap(latitude, longitude) {
    // var pyrmont = {lat: -33.867, lng: 151.195};
    var pyrmont = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,
      type: ['store']
    }, callback);
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
}]);