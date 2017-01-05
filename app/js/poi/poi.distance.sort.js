//Cheers to Antti & Xiadong!
(function() {
  'use strict';

  angular
    .module('cityInfo.poi')
    .factory('poiDistanceSort', distanceSort);

  distanceSort.$inject = [];

  function distanceSort() {

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    };

    function deg2rad(deg) {
      return deg * (Math.PI/180);
    };

    function sort(distanceTo, pois) {
      for(var i = 0; i < pois.length; i++) {
        pois[i].distanceToUser =
          getDistanceFromLatLonInKm(Number(pois[i].geometry.location.lat()),
                                    Number(pois[i].geometry.location.lng()),
                                    Number(distanceTo.lat),
                                    Number(distanceTo.lng));
      }
    };

    return {
      sort: sort
    };
  };


})();
