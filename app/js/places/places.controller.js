(function() {
    'use strict';
    angular.module('cityInfo.places').controller('PlacesController', PlacesController);

    PlacesController.$inject = ['PoiApiFactory', 'poiDistanceSort'];

    function PlacesController (PoiApiFactory, poiDistanceSort) {
        var vm = this;

        vm.latestLocation = null;
        vm.pois = [];

        vm.poiApi = null;

        function searchNearbyPlaces() {
          if (vm.poiApi !== null && vm.category !== null && vm.latestLocation !== null) {
            var queryObj = {
              keyword: '',
              location: vm.latestLocation,
              radius: 250
            }

            vm.poiApi.searchWithDetails(queryObj, function(results) {
              poiDistanceSort.sort(vm.latestLocation, results);
              vm.pois = results;
            });
          }
        }

        PoiApiFactory.createApi(document.getElementById('placestab-attribution-container')).then(
          function(placesApi) {
            vm.poiApi = placesApi;
            searchNearbyPlaces();
          },
          function(rejectReason) {
            console.log(rejectReason);
          }
        );

        llb_app.addListener('location', function(data){
          var latLng = {
            lat: data.data.latitude,
            lng: data.data.longitude
          };

          vm.latestLocation = latLng;
          searchNearbyPlaces();
        });
        llb_app.request('location');
    }
})();
