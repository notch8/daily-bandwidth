class app.AlertService
  constructor: ->
    @all = []

  addError: (msg, expires=null)->
    @all.push({type: 'error', msg: msg})

  addSuccess: (msg, expires=500)->
    params = {type: 'success', msg: msg}
    @all.push(params)
    this.addExpiration(params, expires)

  addNotice: (msg, expires=500)->
    @all.push({msg: msg})
    this.addExpiration(@all.indexOf(params), expires)

