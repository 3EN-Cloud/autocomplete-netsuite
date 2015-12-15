'use babel'

export default class Provider {

  constructor(manager) {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

     if(prefix.startsWith('nl')) {
       var suggestion = {
         snippet : "nlapiAddDays(${1:d}, ${2:days})",
         type : "function",
         leftLabel : "Date",
         description: "Adds/subtracts a number of days to or from a date object"
       }

       var suggestions = [];

       suggestions.push(suggestion);

       console.log(prefix);

       return suggestions;
     }
  }

}
