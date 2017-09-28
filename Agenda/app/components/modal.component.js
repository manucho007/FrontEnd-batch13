(function (){
  'use strict';
    var modal = {
      templateUrl : './app/components/calendar.component.html',
      controller: modalCtrl
    }
    angular
    .module("calendarApp")
    .component("modalView", modal);

  function modalCtrl() {
    var vm = this;
    }

})();
