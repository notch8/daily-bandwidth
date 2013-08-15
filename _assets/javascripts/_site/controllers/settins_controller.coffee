app.SettingsController = ($scope, DefaultBandwidthStore)->
  defaultSettings = new app.Settings(DefaultBandwidthStore)
  console.log 'from settings controller'
  $scope.defa