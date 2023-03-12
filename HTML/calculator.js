
angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.plans == 'Basic') {
                return 100* $scope.b;
            }
            if ($scope.plans == 'Boost') {
                return 450* $scope.b;
            }
            if ($scope.plans == 'Ultra') {
                return 1800 * $scope.b;
            }
        };
    });