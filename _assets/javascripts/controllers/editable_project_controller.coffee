app.EditableProjectController = ($scope)->
  if $scope.project.newRecord
    $scope.inEditMode = true
  else
    $scope.inEditMode = false
  $scope.commitmentScopes = ['week', 'month']

  $scope.enableEdit = ->
    $scope.inEditMode = true

  $scope.save = ->
    $scope.saveSettings()
    $scope.inEditMode = false
    $scope.project.newRecord = false

  $scope.cancel = ->
    $scope.inEditMode = false

  $scope.remove = ->
    $scope.settingsstore.projects.pop($scope.project)
    $scope.saveSettings()

