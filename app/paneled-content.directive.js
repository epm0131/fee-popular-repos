(function() {
  'use strict';

  angular.module('app')
    .directive('paneledContent', PaneledContentDirective);

    function PaneledContentDirective() {

      return {
        templateUrl: '/app/panel.template.html',
        restrict: 'A',
        scope: {

        }
      };
    }

}());
