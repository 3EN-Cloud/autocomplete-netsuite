AutocompleteNetsuiteView = require './autocomplete-netsuite-view'
{CompositeDisposable} = require 'atom'

module.exports = AutocompleteNetsuite =
  autocompleteNetsuiteView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @autocompleteNetsuiteView = new AutocompleteNetsuiteView(state.autocompleteNetsuiteViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @autocompleteNetsuiteView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'autocomplete-netsuite:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @autocompleteNetsuiteView.destroy()

  serialize: ->
    autocompleteNetsuiteViewState: @autocompleteNetsuiteView.serialize()

  toggle: ->
    console.log 'AutocompleteNetsuite was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
