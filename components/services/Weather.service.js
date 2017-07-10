angular
  .module('kc-interview')
  .factory('WeatherService', [
    '$http', '$q', 'CONSTANTS', 'QueryService', WeatherService
  ]);

function WeatherService($http, $q, CONSTANTS, QueryService) {

  function getWeather(city, count){

  }

  return {
    getWeather: getWeather
  }

}
