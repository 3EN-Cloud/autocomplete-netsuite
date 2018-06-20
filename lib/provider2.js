'use babel'
var fs = require('fs');
var path = require('path');

export default class Provider2 {

  constructor() {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
      this.inclusionPriority = 1;
      this.exludeLowerPriority = true;

      this.netsuiteData = JSON.parse(fs.readFileSync(path.join(__dirname,'..','netsuite-api2.json'), 'utf8'));
  }

  getLine(editor, bufferPosition) {
   return editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
  }

  getPreviousWord(editor, bufferPosition) {
    const words = this.getLine(editor, bufferPosition).split(/[^A-Za-z]/);
    return words.length >= 2 ? words[words.length - 2].trim() : null;
  }

  iterateNetSuiteData(key, prefix) {
    var suggestions = [];

    console.log("iterateNetSuiteData");

    this.netsuiteData[key].forEach(function(snippetData) {
      if(snippetData.snippet.toLowerCase().startsWith(prefix.toLowerCase())) {
        snippetData.replacementPrefix = prefix;
        suggestions.push(snippetData);
      }
    });

    return suggestions;
  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

     if(!prefix) {
       return [];
     }

      // console.log(scopeDescriptor);
      // console.log(prefix);
      // console.log("Previous Word "+this.getPreviousWord(editor, bufferPosition));
      // console.log("Line "+this.getLine(editor, bufferPosition));

     const previousWord = this.getPreviousWord(editor, bufferPosition);

     return new Promise((resolve) => {
       var suggestions = []

       if(previousWord == "UserEventType" && prefix == '.') {
         suggestions.push(...this.netsuiteData.userEventTypeEnum);
       } else if(previousWord == "UserEventType" ) {
         suggestions.push(...this.iterateNetSuiteData('userEventTypeEnum', prefix))
       } else if(previousWord == "Type" && prefix == '.') {
         suggestions.push(...this.netsuiteData.recordTypeEnums);
       } else if(previousWord == "Type") {
         suggestions.push(...this.iterateNetSuiteData('recordTypeEnums', prefix))
       } else if(previousWord == "log" && prefix == '.') {
         suggestions.push(...this.netsuiteData.logGlobalObjectMembers);
       } else if(previousWord == "log") {
         suggestions.push(...this.iterateNetSuiteData('logGlobalObjectMembers', prefix))
       } else if(previousWord == "util" && prefix == '.') {
         suggestions.push(...this.netsuiteData.utilGlobalObjectMembers);
       } else if(previousWord == "util") {
         suggestions.push(...this.iterateNetSuiteData('utilGlobalObjectMembers', prefix))
       }

       suggestions.push(...this.iterateNetSuiteData('functions', prefix))

       return resolve(suggestions);
     });

  }

}
