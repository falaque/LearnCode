
//alert('hi');
(function(){
  var app = angular.module('forecastCard',[]);
  
  app.directive('forecastCard',function(){
    return {
      restrict:'E',
      templateUrl:'ExampleWeatherApp/template/forecastCard.html',
      scope:{
        day_forecast:'=finfo'
      }
      
    };
  });
})();

