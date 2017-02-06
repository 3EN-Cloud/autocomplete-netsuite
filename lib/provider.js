'use babel'
var fs = require('fs');
var path = require('path');

export default class Provider {

  constructor() {
      this.selector = '.source.js';
      this.disableForSelector = '.source.js .comment';
      this.inclusionPriority = 1;
      this.exludeLowerPriority = true;

      this.netsuiteData = JSON.parse(fs.readFileSync(path.join(__dirname,'..','netsuite-api1.json'), 'utf8'));

  }

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) {

     if(!prefix) {
       return [];
     }

     return new Promise((resolve) => {
       var suggestions = []

       if("suiteletcomment".startsWith(prefix.toLowerCase())) {

        var fileHeader = "/*******************************************************************\n"+
                         "*\n" +
                         "*\n" +
                         "* Name: "+editor.getTitle()+"\n" +
                         "* Script Type: ${1:scriptType}\n" +
                         "* Version: 0.0.1\n" +
                         "* \n" +
                         "* \n" +
                         "* Author: ${2:Author Name} \n" +
                         "* Purpose: ${3:A description of the purpose of this script} \n" +
                         "* Script: ${4:The script record id} \n" +
                         "* Deploy: ${5:The script deployment record id} \n" +
                         "*\n" +
                         "*\n" +
                         "* ******************************************************************* */"


        return resolve([{
          "type": "snippet",
          "snippet": fileHeader,
          "description": "Netsuite Suitelet file header comment template"

        }]);

      } else {

       this.netsuiteData.functions.forEach(function(func) {

         if(func.snippet.toLowerCase().startsWith(prefix.toLowerCase())) {
           func.replacementPrefix = prefix;
           suggestions.push(func);
         }

       });

       this.netsuiteData.objects.forEach(function(obj) {

         if(obj.snippet.toLowerCase().startsWith(prefix.toLowerCase())) {
           obj.replacementPrefix = prefix;
           suggestions.push(obj);
         }

       });

     }

       return resolve(suggestions);
     });

  }

}
