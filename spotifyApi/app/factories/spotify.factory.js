(function(){
  'use strict'
  angular
    .module("spotifyApp")
    .factory("spotifyApi",spotifyApi);

    spotifyApi.$inject = ["$resource"];
    function spotifyApi($resource){
      return $resource('https://api.spotify.com/v1/search?q=simple%20plan&type=:category');
    };
})();
