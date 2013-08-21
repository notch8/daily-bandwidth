(function() {
  app.SettingsController = function($scope, $timeout, alertService) {
    $scope.nextSave = null;
    $scope.saveSettings = function() {
      $scope.nextSave = new XDate();
      $scope.nextSave.addSeconds(1);
      return $scope.checkSave();
    };
    $scope.checkSave = function() {
      var now;
      if ($scope.nextSave) {
        now = new XDate();
        if (now > $scope.nextSave) {
          $scope.settingsStore.set(angular.fromJson(angular.toJson($scope.settings)), function(error) {
            if (error) {
              return alertService.addError('Error.  we could not make your change.  Please try again.');
            } else {
              return alertService.addSuccess('Success,  we updated your settings.');
            }
          });
          return $scope.nextSave = null;
        } else {
          return setTimeout((function() {
            return $scope.checkSave();
          }), 500);
        }
      }
    };
    $scope.resetDefaults = function() {
      $scope.settings = $scope.settingsDefaults;
      return $scope.saveSettings();
    };
    $scope.addNewProject = function() {
      if (!$scope.settings.projects) {
        $scope.settings.projects = [];
      }
      return $scope.settings.projects.push({
        name: null,
        commitment: null,
        commitment_scope: null,
        newRecord: true
      });
    };
    return $scope.addShare = function() {
      if (!$scope.settings.sharesWith) {
        $scope.settings.sharesWith = [];
      }
      $scope.settings.sharesWith.push({
        email: $scope.newEmail
      });
      return $scope.saveSettings();
    };
  };

}).call(this);
