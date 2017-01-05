(function() {
    'use strict';
    angular.module('cityInfo.places').controller('PlacesController', PlacesController);

    PlacesController.$inject = ['$scope'];

    function PlacesController ($scope) {
        $scope.POIlist= [{
            "cafe": [
                {
                    "name":"Cafe Tullintori",
                    "address":"Tullikatu 6",
                    "rate":"4.0",
                    "distance":"0.75"
                },
                {
                    "name":"Wayne's Coffee",
                    "address":"Hämeenkatu 3",
                    "rate":"4.0",
                    "distance":"1.1"
                },
                {
                    "name":"Pyymäen Oma",
                    "address":"Tuomiokirkonkatu 30",
                    "rate":"4.5",
                    "distance":"1.1"
                }
            ],
            "bar": [
                {
                    "name":"Moro Sky Bar",
                    "address":"Ratapihankatu 43",
                    "rate":"3.8",
                    "distance":"0.75"
                },
                {
                    "name":"O'Connell's",
                    "address":"Rautatienkatu 24,",
                    "rate":"4.4",
                    "distance":"0.8"
                },
                {
                    "name":"Majava Baari ",
                    "address":"Aleksanterinkatu 29",
                    "rate":"4.2",
                    "distance":"1.6"
                }
            ],
            "restaurant": [
                {
                    "name":"Sasor Ravintolat Oy",
                    "address":"Yliopistonkatu 50",
                    "rate":"4.3",
                    "distance":"0.34"
                },
                {
                    "name":"Bengol Curry",
                    "address":"Tullintori, Tullikatu 6",
                    "rate":"4.1",
                    "distance":"0.75"
                },
                {
                    "name":"Ravintola Myllärit",
                    "address":"Åkerlundinkatu 4",
                    "rate":"3,8",
                    "distance":"0.45"
                }
            ]
        }];
    }
})();
