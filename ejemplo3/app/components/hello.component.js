(function (){
  'use strict';
  var helloWorld = {
    bindings:{nombre:"="},
    templateUrl:'./app/components/hello.component.html',
    controller:helloCtrl
  };

  angular
    .module("myApp")
    .component("helloWorld",helloWorld)
    .controller("secondCtrl",secondCtrl);


    function helloCtrl(){
      var vm = this;
      vm.saludo ="Hola Mundo";
      //vm.nombre ="Carlos";
    };

    function secondCtrl(){
      var vm = this;
      vm.despedida ="Adios";
    };
})()
