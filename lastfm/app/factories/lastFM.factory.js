(function(){
  'use strict'
  angular
    .module("lastFMApp")
    .factory("lastFMArtist",lastFMArtist)
    .factory("lastFMTracks",lastFMTracks);

    lastFMArtist.$inject = ["$resource"];
    function lastFMArtist($resource){
      return $resource('http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=4bf440aafff710b1d06df31a3661ef2c&format=json&limit=10');
    };

    lastFMTracks.$inject = ["$resource"];
    function lastFMTracks($resource){
      return $resource('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=4bf440aafff710b1d06df31a3661ef2c&format=json&limit=10');
    }
})()
