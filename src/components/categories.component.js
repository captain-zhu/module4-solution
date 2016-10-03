/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */
(function () {
  'use strict';
  angular.module('MenuApp')
    .component('categories', {
      bindings: {
        categories: "<"
      },
      templateUrl: 'src/templates/categories.component.html'
    });
})();