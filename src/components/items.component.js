/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */
(function () {
  'use strict';
  angular.module('MenuApp')
    .component('items', {
      bindings: {
        items: "<"
      },
      templateUrl: 'src/templates/items.component.html',
    })
})();