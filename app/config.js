;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('kc-interview')
    .constant('CONSTANTS', {
      'API_URL': 'http://api.openweathermap.org/data/2.5/',
      'API_KEY': '076fe43cb92a263f4426e88cc3009c1e'
    });

})();
