Provider = require './provider'
Provider2 = require './provider2'


module.exports =
  provider: null
  provider2: null

  activate: (state) ->
   @provider = new Provider()
   @provider2 = new Provider2()

  provide: ->
    [@provider2,@provider]
