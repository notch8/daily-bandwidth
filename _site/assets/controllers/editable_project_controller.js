(function() {
  app.EditableProjectController = function($scope) {
    if ($scope.project.newRecord) {
      $scope.inEditMode = true;
    } else {
      $scope.inEditMode = false;
    }
    $scope.commitmentScopes = ['week', 'month'];
    $scope.enableEdit = function() {
      return $scope.inEditMode = true;
    };
    $scope.save = function() {
      $scope.saveSettings();
      $scope.inEditMode = false;
      return $scope.project.newRecord = false;
    };
    $scope.cancel = function() {
      return $scope.inEditMode = false;
    };
    return $scope.remove = function() {
      $scope.settingsstore.projects.pop($scope.project);
      return $scope.saveSettings();
    };
  };

}).call(this);
