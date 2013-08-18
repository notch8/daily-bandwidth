(function() {
  app.EditableBandwidthController = function($scope) {
    $scope.isEditEnabled = false;
    $scope.$watch('weekday.hours', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        return $scope.saveSettings();
      }
    });
    $scope.decrement = function() {
      if ($scope.weekday.hours >= 1) {
        return $scope.weekday.hours -= 1;
      }
    };
    return $scope.increment = function() {
      return $scope.weekday.hours += 1;
    };
  };

}).call(this);
