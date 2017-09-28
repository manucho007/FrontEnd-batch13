(function (){
  'use strict';

  var heroes = {
    templateUrl : './app/components/myHero.component.html',
    controller: heroCtrl
  }

  angular
  .module("marvelApp")
  .component("myHeroes", heroes);

  heroCtrl.$inject = ["marvelApi"];
  function heroCtrl(marvelApi) {
    var vm = this;

    vm.$onInit = onInit;
    vm.$onDestroy = onDestroy;

    function onInit() {
      vm.characters = null;
      vm.data = marvelApi.get().$promise.then(function (response){
          vm.characters = response.data.results;
        })
    }

    function onDestroy() {
      console.log("destruyeControl");
    }
  }
})();
