(function (){
  'use strict';

  var trackComp = {
    templateUrl : './app/components/tracks.component.html',
    controller: trackCtrl
  }

  angular
  .module("spotifyApp")
  .component("trackComp", trackComp);

  trackCtrl.$inject = ["spotifyApi"];
  function trackCtrl(spotifyApi) {
    var vm = this;
    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;
    vm.category ="track";

    function onInit() {
      vm.dataResult = null;
      vm.data = spotifyApi.get({category:vm.category}).$promise.then(function (response){
          vm.dataResult = response.tracks.items;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
