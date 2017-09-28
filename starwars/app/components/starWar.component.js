(function(){
  'use strict'

  //object
  var starWars = {
    bindings : {category : '=', id:'='},
    templateUrl:'./app/components/starWars.component.html',
    controller: starCtrl
  };

  angular
    .module("starApp")
    .component("starWars",starWars);

  starCtrl.$inject = ["starApi"];

  function starCtrl (starApi){
    var star = this;
    star.$onInit = onInit;
    star.$onDestroy = onDestroy;

    function onInit() {
      star.characters = null;
      star.data = starApi.get(
        {category: star.category }).$promise.then(function (response){
          console.log(response);
          star.characters = response.results;
        })
    };

    function onDestroy() {
      console.log("chauu");
    }

  }
})()
