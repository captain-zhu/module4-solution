/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */

(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['items'];
  function MenuItemsController(items) {
    var controller = this;
    controller.items = items.menu_items;
    console.log(controller.items);
  };

})();