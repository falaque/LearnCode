(function(){
  var app = angular.module('YWeatherService',[]);
  app.factory('YWeatherService',['$http','$sce',function($http,  $sce){
     //return $http({method:'GET',url:"temp/testJson.json"});
     var url = "http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='bangalore')&format=json";
     
     return $http.jsonp($sce.trustAsResourceUrl(url), {jsonpCallbackParam: 'callback'}).then(function(resp){
       console.log(JSON.stringify(resp));
       return resp;
     });
    
  }]);
  
})();