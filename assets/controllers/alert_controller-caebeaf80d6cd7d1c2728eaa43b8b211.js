(function() {
  app.AlertController = function($scope, alertService) {
    $scope.alerts = alertService.all;
    return $scope.closeAlert = function(index) {
      return $scope.alerts.splice(index, 1);
    };
  };

}).call(this);
