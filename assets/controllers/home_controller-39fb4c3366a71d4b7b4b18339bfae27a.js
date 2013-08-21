(function() {
  app.HomeController = function($scope, weekService, alertService) {
    $scope.today = new XDate();
    $scope.nextSave = null;
    $scope.$watch('settings', function(settings) {
      if (settings) {
        weekService.setUser($scope.user);
        weekService.setSettings(settings);
        return $scope.week = weekService.thisWeek($scope);
      }
    });
    $scope.doneLoadingWeek = function() {
      return $scope.$apply();
    };
    $scope.loadPreviousWeek = function() {
      return $scope.week = weekService.getPrevious($scope.week, $scope);
    };
    $scope.loadThisWeek = function() {
      return $scope.week = weekService.thisWeek($scope);
    };
    $scope.loadNextWeek = function() {
      return $scope.week = weekService.getNext($scope.week, $scope);
    };
    $scope.saveBandwidths = function() {
      return $scope.week.save();
    };
    $scope.duplicatePreviousWeek = function() {
      var lastWeek, tempScope;
      tempScope = {
        doneLoadingWeek: function(week) {
          $scope.week.cloneProjects(week);
          return $scope.$apply();
        }
      };
      return lastWeek = weekService.getPrevious($scope.week, tempScope);
    };
    return $scope.clearWeek = function() {
      return $scope.week.reset($scope.settings.projects);
    };
  };

}).call(this);
