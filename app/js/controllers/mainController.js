angular.module('app')
    .controller('MainController', function($scope, ApodService) {
      ApodService.getAll().then(function(res) {
        $scope.apod = res.data;
      }, function(err) {
        console.log("APOD API call did not work");
      });
    });
