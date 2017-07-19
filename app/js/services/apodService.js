angular.module('app')
  .service('ApodService', function($http) {
    return {
      getAll: function() {
        return $http.get('https://api.nasa.gov/planetary/apod?api_key=MCBSaNcdLUpgdJ546qOqEcBjFhsOm3AO4UDXFRVh');
      }
    };
  });
