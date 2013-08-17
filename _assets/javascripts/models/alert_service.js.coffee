class app.AlertService
  constructor: ->
    @all = []

  addError: (msg, expires=null)->
    @all.splice(0,1) #remove for now, so only one shows at a time,  until fade implimented
    @all.push({type: 'error', msg: msg})

  addSuccess: (msg, expires=500)->
    params = {type: 'success', msg: msg}
    @all.splice(0,1)
    @all.push(params)

  addNotice: (msg, expires=500)->
    @all.splice(0,1)
    @all.push({msg: msg})



