app.MainController = ($scope, $route, angularFireAuth)->
  $scope.$route = $route

  url = 'https://dailybandwidth.firebaseIO.com'
  angularFireAuth.initialize(url, {scope: $scope, name: "user"})

  $scope.$on("angularFireAuth:login", (evt, user) ->
    console.log 'logged in'
    window.location = '/project.html#/home'
    console.log $scope.user

  )

  $scope.$on("angularFireAuth:logout", (evt)->
    console.log 'logged out'
    window.location = '/project.html#/login'
  )

