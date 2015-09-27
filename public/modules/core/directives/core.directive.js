'use strict';

angular.module('core').directive('load', function() {
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      $(document).ready(function() {
        $('select').material_select();
      });

      $('.parallax').parallax();
    }
  };
});
