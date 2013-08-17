app.EditableSharingController = ($scope)->
  $scope.remove = ->
    $scope.settings.sharesWith.pop($scope.share)
    $scope.saveSettings()
