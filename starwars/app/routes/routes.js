(function (){
  'use strict';

  angular
  .module("starApp")
  .config(config);

  function config($routeProvider,$locationProvider){
    $routeProvider
    .when('/people',{
      template:`<star-wars category="'people'"></star-wars>`
    })
    .when('/planets',{
      template:`<star-wars category="'planets'"></star-wars>`
    })
    .when('/',{
      template : `<hello></hello>`
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
  }
})()
