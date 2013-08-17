app.AlertController = ($scope, alertService)->
  $scope.alerts = alertService.all

  $scope.closeAlert= (index)->
    $scope.alerts.splice(index,1)