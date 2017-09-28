(function (){
  'use strict';

  var topArtist = {
    templateUrl : './app/components/topArtist.component.html',
    controller: topArtist
  }

  angular
  .module("lastFMApp")
  .component("topArtist", topArtist);

  topArtist.$inject = ["lastFMArtist"];
  function topArtist(lastFMArtist) {
    var vm = this;
    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;

    function onInit() {
      vm.topArtist = null;
      vm.data = lastFMArtist.get().$promise.then(function (response){
          vm.topArtist = response.topartists.artist;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
