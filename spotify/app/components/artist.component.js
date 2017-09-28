(function (){
  'use strict';

  var artistComp = {
    templateUrl : './app/components/artist.component.html',
    controller: artistCtrl
  }

  angular
  .module("spotifyApp")
  .component("artistComp", artistComp);

  artistComp.$inject = ["spotifyApi"];
  function artistCtrl(spotifyApi) {
    var vm = this;
    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;
    vm.category ="artist";

    function onInit() {
      vm.dataResult = null;
      vm.data = spotifyApi.get({category:vm.category}).$promise.then(function (response){
          vm.dataResult = response.artists.items;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
