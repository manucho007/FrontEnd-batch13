(function (){
  'use strict';
    var nav = {
      templateUrl : './app/components/navbar.component.html',
      controller: navCtrl
    }
    angular
    .module("calendarApp")
    .component("componenteNavegacion", nav);

  function navCtrl() {
    var vm = this;
    }

})();
