(function (){
  'use strict';

  var albumComp = {
    templateUrl : './app/components/album.component.html',
    controller: albumCtrl
  }

  angular
  .module("spotifyApp")
  .component("albumComp", albumComp);

  albumCtrl.$inject = ["spotifyApi"];
  function albumCtrl(spotifyApi) {
    var vm = this;
    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;
    vm.category ="album";

    function onInit() {
      vm.dataResult = null;
      vm.data = spotifyApi.get({category:vm.category}).$promise.then(function (response){
          vm.dataResult = response.albums.items;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
