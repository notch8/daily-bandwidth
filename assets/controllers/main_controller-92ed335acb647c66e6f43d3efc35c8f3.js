(function() {
  app.MainController = function($scope, $route, angularFireAuth) {
    var url;
    url = 'https://dailybandwidth.firebaseIO.com';
    angularFireAuth.initialize(url, {
      scope: $scope,
      name: "user",
      path: "/login"
    });
    $scope.$on("angularFireAuth:login", function(evt, user) {
      return $scope.loadUserSettings();
    });
    $scope.loadUserSettings = function() {
      url = "https://dailybandwidth.firebaseIO.com/" + $scope.user.login + "/settings";
      $scope.settingsStore = new Firebase(url);
      return $scope.settingsStore.on('value', function(settings) {
        return setTimeout((function() {
          if (settings.val() === null) {
            $scope.settings = $scope.settingsDefaults;
          } else {
            $scope.settings = settings.val();
            $scope.$apply();
          }
          return $scope.settingsStore.off('value');
        }), 1);
      });
    };
    $scope.$on("angularFireAuth:logout", function(evt) {
      return window.location = '/project.html#/login';
    });
    $scope.$on("angularFireAuth:login", function(evt) {
      if (window.location.hash === '#/login') {
        return window.location = '/project.html#/home';
      }
    });
    return $scope.settingsDefaults = {
      defaultBandwidths: [
        {
          name: 'Monday',
          hours: 0
        }, {
          name: 'Tuesday',
          hours: 0
        }, {
          name: 'Wednesday',
          hours: 0
        }, {
          name: 'Thursday',
          hours: 0
        }, {
          name: 'Friday',
          hours: 0
        }, {
          name: 'Saturday',
          hours: 0
        }, {
          name: 'Sunday',
          hours: 0
        }
      ],
      projects: [],
      sharesWith: []
    };
  };

}).call(this);
