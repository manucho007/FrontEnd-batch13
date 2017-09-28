(function () {
  'use strict';

  var darth ={
    templateUrl :'./app/components/darth.component.html',
    controller : darthCtrl
  }

  angular
    .module("darthApp")
    .component("darth", darth);

    function darthCtrl() {
      var vm = this;
      vm.$onInit = onInit;
      vm.$onDestroy = onDestroy;
      vm.messageleia ="Mensaje para leia";
      vm.mensajeluke ="Luke im your father";

      function onInit() {
        console.log("iniciaControl");
        vm.data ="Luke im your father";
      }

      function onDestroy() {
        console.log("destruyeControl");
      }
    }
})();
