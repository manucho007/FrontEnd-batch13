(function () {
  'use strict';

  var luke ={
    bindings : {message:"="},
    templateUrl :'./app/components/luke.component.html',
    controller : lukeCtrl
  }

  angular
    .module("darthApp")
    .component("luke", luke);

    function lukeCtrl() {
      var vm = this;
      vm.data = this.message;

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
