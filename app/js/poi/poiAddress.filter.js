(function() {
  'use strict';
  angular.module('cityInfo.poi')
    .filter('poiAddress', function () {
      return function (input, shortVersion) {
        if (input === null) {
          return null;
        }
        
        if (input.address_components !== undefined) {
          if (shortVersion) {
            var route = "";
            var streetNumber = "";
            var locality = null;

            for (var i = 0; i < input.address_components.length; ++i) {
              var component = input.address_components[i];
              if (component.types) {
                for (var j = 0; j < component.types.length; ++j) {
                  var type = component.types[j];
                  if (type === "route") {
                    route = component.long_name;
                  }
                  else if (type === "street_number") {
                    streetNumber = component.long_name;
                  }
                  else if (type === "locality") {
                    locality = component.long_name;
                  }
                }
              }
            }

            var address = route + " " + streetNumber;
            return locality !== null ? (address + ", " + locality) : address;
          }
          else {
            return input.formatted_address;
          }
        }
        else if (input.formatted_address !== undefined) {
          return input.formatted_address;
        }
        else {
          return null;
        }
      };
    })
})();
