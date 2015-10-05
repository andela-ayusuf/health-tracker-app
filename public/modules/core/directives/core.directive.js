'use strict';

angular.module('core').directive('slider', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      if (true) {
        $timeout(function() {
          $(function() {
            $("#meal-slider").owlCarousel({
              navigation: true,
              navigationText: [
                '<i class="btn btn-primary btn-large">Next</i>',
                '<i class="btn btn-primary btn-large">Previous</i>'
              ],
              slideSpeed: 300,
              singleItem: true,
              autoPlay: false,
              autoHeight: true
            });
          });
        });
      }
    }
  };
});
