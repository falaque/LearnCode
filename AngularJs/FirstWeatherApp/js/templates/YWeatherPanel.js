(function(){
  var app = angular.module("YWeatherPanel",[]);
  app.directive('yweatherPanel',function(){
    return {
      restrict:'EA',
      templateUrl:'js/templates/YWeatherPanel.html',
      scope:{
        winfo:"=winfo"
      }
    }
  });
})();