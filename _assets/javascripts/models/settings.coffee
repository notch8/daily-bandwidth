class app.Settings
  constructor: (settingsStore)->
    self = this
    @settingsStore = settingsStore
    @settings = null

  values: ->
    if @settingsStore.first
      @settings = @settingsStore.first
    else
      @settings = @.setNew()

    console.log '---------'
    console.log @settingsStore
    console.log @settingsStore[0]
    return @settings

  resetAll: ->
    if @settingsStore.first
      @settingsStore.remove @settingsStore.first

  setNew: ->
    bandwith = new app.DefaultBandwithSettings(null)
    @settings =
      defaultBandwith: bandwith.settings
    @settingsStore.add(@settings,->
      console.log "added"
    )


class app.DefaultBandwithSettings
  constructor:(settings) ->
    if settings
      @settings = settings
    else
      @_setNew()

  _setNew: ->
    @settings = 
      monday: 0
      tuesday: 0
      wednesday: 0
      thursday: 0
      friday: 0
      saturday: 0
      sunday: 0
