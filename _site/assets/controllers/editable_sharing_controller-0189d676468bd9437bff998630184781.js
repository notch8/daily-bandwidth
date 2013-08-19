(function() {
  app.EditableSharingController = function($scope) {
    return $scope.remove = function() {
      $scope.settings.sharesWith.pop($scope.share);
      return $scope.saveSettings();
    };
  };

}).call(this);
