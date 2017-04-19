(function(){
  var app = angular.module('weather',['forecastCard']);
  app.controller('WeatherController',['$scope','WeatherService',function($scope,WeatherService){
    WeatherService.then(function(data){
      $scope.WReport = data.data;
    });
  }]);
  
  app.factory('WeatherService',['$http',function($http){
    return $http.get('ExampleWeatherApp/forecast.json');
  }])
  
})();