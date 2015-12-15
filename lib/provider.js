'use babel'
var fs = require('fs');
var path = require('path');

export default class Provider {

  constructor(manager) {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

     if(prefix.startsWith('nl')) {

       var obj = JSON.parse(fs.readFileSync(path.join(__dirname,'..','netsuite-api.json'), 'utf8'));

       var suggestions = obj.functions;

       return suggestions;
     }
  }

}
