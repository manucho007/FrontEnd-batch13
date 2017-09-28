(function () {
  'use strict';

  var leia ={
    bingdings :{messageleia:"="},
    templateUrl :'./app/components/leia.component.html',
    controller : leiaCtrl
  }

  angular
    .module("darthApp")
    .component("leia", leia);

    function leiaCtrl() {
      var vm = this;

      vm.$onInit = onInit;
      vm.$onDestroy = onDestroy;

      function onInit() {
        console.log("iniciaControl");
      }

      function onDestroy() {
        console.log("destruyeControl");
      }
    }
})();
