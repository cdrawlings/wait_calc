angular.module('MyApp', [] )
.controller('calcController', function($scope) {
    var vm = this;

    $scope.submit = function() {

    vm.meal = null;
    vm.tipAmount = 0;
    vm.subtotal = 0;
    vm.total = vm.tipAmount + vm.subtotal;
    vm.tipTotal += vm.tipAmount;
    vm.subtotal = vm.meal + (vm.meal * vm.tax);
    vm.averageTip = vm.tipAmount / vm.count;
    vm.tax = vm.meal * (vm.taxRate / 100);
    vm.tipAmount = vm.meal * (vm.tip / 100);
    vm.total = vm.tipAmount + vm.subtotal;
    vm.count ++;
    }

    $scope.init = function() {
      vm.subtotal = 0;
      vm.meal = null;
      vm.taxRate = 10;
      vm.count = 0
      vm.tip = 20;
      vm.tipTotal = 0;
      vm.count = 0;
    }
    $scope.init();
});

