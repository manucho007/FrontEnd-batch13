(function (){
  'use strict'

  var hello ={
    template :'<h1>Welcome</h1>'
  };

  angular
  .module("starApp")
  .component("hello",hello);
})();
