/**
 * Created by zhuyongxuan1 on 2016/10/3.
 */
(function () {
  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var controller = this;
    controller.categories = categories;
  }
})();