app.MainController = ($scope, $route, angularFireAuth)->
  $scope.$route = $route

  url = 'https://dailybandwidth.firebaseIO.com'
  angularFireAuth.initialize(url, {scope: $scope, name: "user"})

  $scope.$on("angularFireAuth:login", (evt, user) ->
    window.location = '/project.html#/home'

  )

  $scope.$on("angularFireAuth:logout", (evt)->
    window.location = '/project.html#/login'
  )

