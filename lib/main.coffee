Provider = require './provider'

module.exports =

  provider: null

  activate: (state) ->
    @provider = new Provider()

  provide: ->
    @provider
