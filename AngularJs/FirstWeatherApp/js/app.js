
(function(){
  var app = angular.module("WeatherApp",['YWeatherPanel','YWeatherService']);
  app.controller('WeatherController',['YWeatherService','$sce',function(YWeatherService,$sce){
    this.title="Weather App";
    var ctl = this;
    
    YWeatherService.then(function(resp){
      ctl.info=resp.data;
    });
  }]);
})();

