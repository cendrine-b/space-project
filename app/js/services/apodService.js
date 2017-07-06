angular.module('app')
  .service('ApodService', function($http) {
    return {
      getAll: function() {
        return $http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      }
    };
  });
