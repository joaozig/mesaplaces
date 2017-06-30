angular.module('app.places', ['ui.router', 'ngGeolocation'])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('app.places', {
		url: '/places',
		templateUrl: 'places/places.html',
		controller: 'PlacesCtrl as ctrl'
	});
}])

.controller('PlacesCtrl', ['$scope', '$geolocation', function($scope, $geolocation) {
  var ctrl = this;

  /** Attributes **/
  ctrl.places;
  ctrl.showLoading = true;
  ctrl.showPlaces = false;
  ctrl.showErrorMessage = false;
  ctrl.errorMessage;

  /** Methods **/
  ctrl.init = init;

  /** Initialization **/
  ctrl.init();

  /**********/
  function init() {
    ctrl.showErrorMessage = false;
    ctrl.showLoading = true;

    $geolocation.getCurrentPosition({
      timeout: 15000
    }).then(function(position) {
      initMap(position.coords.latitude, position.coords.longitude);
    },function(response) {
      switch(response.error.code) {
        case 1:
          ctrl.errorMessage = 'Ative a sua geolocalização.'
          break;
        case 3:
          ctrl.errorMessage = 'Tempo expirado.'
          break;
        default:
          ctrl.errorMessage = 'Não foi possível obter os lugares.'
      }
      ctrl.showErrorMessage = true;
      ctrl.showLoading = false;
    });
  }

  var map;
  var infowindow;

  function initMap(latitude, longitude) {
    ctrl.showPlaces = true;
    ctrl.showLoading = false;
    var centerLocal = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('map'), {
      center: centerLocal,
      zoom: 16
    });

    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: centerLocal,
      radius: 300,
      type: ['store']
    }, callbackPlaces);
  }

  function callbackPlaces(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      ctrl.places = results;
      $scope.$digest();
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    } else {
      alert('Não foi possível recuperar os lugares.');
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