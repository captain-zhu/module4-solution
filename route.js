/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */
(function () {
  'use strict';
  angular.module('MenuApp')
    .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html'
    });
  }
})();