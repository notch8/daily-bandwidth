(function() {
  app.LogoutController = function($scope, $route, $location, angularFireAuth, alertService) {
    return $scope.logout = function() {
      alertService.clear();
      return angularFireAuth.logout();
    };
  };

}).call(this);
