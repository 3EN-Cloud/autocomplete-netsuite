'use babel'

export default class Provider {

  constructor(manager) {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {
     var suggestion = {
       text : 'nlapi',
       type: 'function'
     }

     var suggestions = [];

     suggestions.push(suggestion);

     return suggestions;
  }

}
