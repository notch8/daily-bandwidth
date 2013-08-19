(function() {
  app.TopNavController = function($scope) {
    $scope.$on("angularFireAuth:login", function(evt, user) {
      $scope.shouldShowHome = true;
      $scope.shouldShowLogout = true;
      return $scope.shouldShowSettings = true;
    });
    return $scope.$on("angularFireAuth:logout", function(evt, user) {
      $scope.shouldShowHome = false;
      $scope.shouldShowLogout = false;
      return $scope.shouldShowSettings = false;
    });
  };

}).call(this);
