(function() {
  app.GithubLoginController = function($scope, angularFireAuth) {
    return $scope.initiateSignIn = function() {
      return angularFireAuth.login('github');
    };
  };

}).call(this);
