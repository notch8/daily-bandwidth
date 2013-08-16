app.BandwidthContainerController = ($scope)->
  $scope.isEditEnabled = false

  $scope.$watch('bandwith',(newVal, oldVal)->
    #$scope.bandwidthStore.set($scope.bandwidths)    
    console.log('saved')
  )

