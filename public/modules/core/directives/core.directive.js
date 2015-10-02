'use strict';

angular.module('core').directive('onRender', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      console.log('asgdgags');
      if (scope.$last === true) {
        $timeout(function() {
          console.log($(".food-item img"));
          // $(".food-item img").slickhover({
          //   icon: "/modules/core/img/check.png",
          //   color: "transparent",
          //   speed: 800,
          //   animateIn: true
          // });
        });
      }
    }
  }
});
