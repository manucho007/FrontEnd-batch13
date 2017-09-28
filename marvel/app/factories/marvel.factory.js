(function(){
  'use strict'
  angular
    .module("marvelApp")
    .factory("marvelApi",marvelApi);

    marvelApi.$inject = ["$resource"];
    function marvelApi($resource){
      return $resource('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cd610d56ee03be3a21d2153d09049058&hash=7fbd146bd057401df720b3fe57c71bdb');
    }
})()
