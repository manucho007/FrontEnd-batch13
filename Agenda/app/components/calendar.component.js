(function (){
  'use strict';
    var cal = {
      templateUrl : './app/components/calendar.component.html',
      controller: calCtrl
    }
    angular
    .module("calendarApp")
    .component("calendarioB", cal);

  function calCtrl() {
    var vm = this;
    }

})();
