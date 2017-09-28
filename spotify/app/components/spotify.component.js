(function (){
  'use strict';

  var spotifyComp = {
    templateUrl : './app/components/spotify.component.html',
    controller: spotifyCtrl
  }

  angular
  .module("spotifyApp")
  .component("spotifyComp", spotifyComp);

  spotifyCtrl.$inject = ["spotifyApi"];
  function spotifyCtrl(spotifyApi) {
    var vm = this;

    vm.playlist = null;
    vm.song = null;
    vm.audio = new Audio;
    vm.play = play;
    vm.search =doSearch;
    vm.milliseconds = milliseconds;
    vm.dataResult =null;

    vm.category ="track";

    function play(song) {
      vm.song = song;
      vm.audio.src = song.preview_url;
      vm.audio.pause();
      vm.audio.play();
    }

    function doSearch() {
      vm.data = spotifyApi.get({song:vm.song_name ,category:vm.category}).$promise.then(function (response){
          vm.dataResult = response.tracks.items;
          console.log(vm.dataResult);
        })
    }

    function milliseconds(ms) {
      var min =Math.floor((ms/1000/60));
      var seconds = Math.floor((ms/1000)%60);
      return min+":"+seconds;
    }


    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
