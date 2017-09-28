(function (){
  'use strict';

  var topTracks = {
    templateUrl : './app/components/topTracks.component.html',
    controller: topTracks
  }

  angular
  .module("lastFMApp")
  .component("topTracks", topTracks);

  topTracks.$inject = ["lastFMTracks"];
  function topTracks(lastFMTracks) {
    var vm = this;
    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;

    function onInit() {
      vm.topTracks = null;
      vm.data = lastFMTracks.get().$promise.then(function (response){
          vm.topTracks = response.tracks.track;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
