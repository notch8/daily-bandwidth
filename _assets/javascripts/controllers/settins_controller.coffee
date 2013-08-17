app.SettingsController = ($scope, $timeout, SettingsStore, alertService)->
  $scope.nextSave = null
  $scope.saveSettings = ->
    $scope.nextSave = new XDate()
    $scope.nextSave.addSeconds(1)
    $scope.checkSave()

  $scope.checkSave = ->
      if $scope.nextSave
        now = new XDate()
        if now > $scope.nextSave
          $scope.settingsStore.set(angular.fromJson(angular.toJson($scope.settings)), (error)->
            if error
              alertService.addError 'Error.  we could not make your change.  Please try again.'
            else
              alertService.addSuccess 'Success,  we updated your settings.'      
          )
          $scope.nextSave = null
        else
          setTimeout((-> $scope.checkSave()),500) 


  $scope.resetDefaults = ->
    $scope.settings = $scope.settingDefaults
    #$scope.saveSettings()

  $scope.addNewProject = ->
    $scope.settings.projects = [] unless $scope.settings.projects
    $scope.settings.projects.push
      name: null
      commitment: null
      commitment_scope: null

  $scope.addShare = ->
    $scope.settings.sharesWith = [] unless $scope.settings.sharesWith
    $scope.settings.sharesWith.push(
      email: $scope.newEmail
    )
    $scope.saveSettings()


