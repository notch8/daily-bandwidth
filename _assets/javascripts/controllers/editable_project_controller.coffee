app.EditableProjectController = ($scope)->
  $scope.inEditMode = false
  $scope.commitmentScopes = ['week', 'month']

  $scope.enableEdit = ->
    $scope.inEditMode = true

  $scope.save = ->
    $scope.saveSettings()
    $scope.inEditMode = false

  $scope.cancel = ->
    $scope.inEditMode = false

  $scope.remove = ->
    $scope.settingsstore.projects.pop($scope.project)
    $scope.saveSettings()

