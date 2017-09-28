// http://swapi.co/api/
(function(){
  'use strict'

  angular
    .module("starApp")
    .factory("starApi",starApi);

    starApi.$inject = ["$resource"];
    function starApi($resource,category){
      return $resource('http://swapi.co/api/:category/:id');
    }
})()
