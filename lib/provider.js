'use babel'
var fs = require('fs');
var path = require('path');

export default class Provider {

  constructor() {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
      this.inclusionPriority = 1;
      this.exludeLowerPriority = true;

      this.netsuiteData = JSON.parse(fs.readFileSync(path.join(__dirname,'..','netsuite-api.json'), 'utf8'));
  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

     if(!prefix.startsWith('nl')) {
       return [];
     }

     return new Promise((resolve) => {
       var suggestions = []

       this.netsuiteData.functions.forEach(function(func) {

         if(func.snippet.toLowerCase().startsWith(prefix.toLowerCase())) {
           func.replacementPrefix = prefix;
           suggestions.push(func);
         }

       });

       return resolve(suggestions);
     });

  }

}
