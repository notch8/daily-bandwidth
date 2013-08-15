app.GithubLoginController = ($scope, angularFireAuth)->
  $scope.initiateSignIn = ->
    angularFireAuth.login('github')
