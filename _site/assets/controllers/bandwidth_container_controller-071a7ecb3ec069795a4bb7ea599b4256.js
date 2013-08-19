(function() {
  app.BandwidthContainerController = function($scope) {
    $scope.$watch('day.hours', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        return $scope.saveBandwidths();
      }
    });
    return $scope.decrement = function() {
      if ($scope.day.hours >= 1) {
        return $scope.day.hours -= 1;
      }
    };
  };

}).call(this);
