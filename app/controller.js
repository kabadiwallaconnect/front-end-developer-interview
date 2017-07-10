/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('kc-interview')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', 'WeatherService'];


  function MainController(LocalStorage, QueryService, WeatherService) {

    // 'controller as' syntax
    var self = this;

    self.city = "";
    self.type = "Current";

    self.onSearch = function (city, type){

    }


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();
