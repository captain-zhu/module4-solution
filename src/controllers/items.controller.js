/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */

(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
  ;

  categorieItemsController.$inject = ['items'];
  function categorieItemsController(items) {
    var categorieItemsCtrl = this;
    categorieItemsCtrl.items = items;

  }

})();