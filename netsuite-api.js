/**
 * @projectDescription SuiteScript API (Last Updated on 4 Jun 2015)
 * @version 2015.1
 * Known issues:
 * Windows->Preferences->JavaScript-<Editor->Content Assist
 * Insertion:
 * [ ] Guess filled function argument       (Must be turned off)
 */

var JSON = {

/**
 * This method parses a JSON text to produce an object or array.
 * @param {String} text - JSON string to parse.
 * @param {Function} reviver [optional] - Optional function that can filter and transform the results. It receives each of the keys and values, and its return value is used instead of the original value. If it returns what it received, then the structure is not modified. If it returns undefined then the member is deleted.
 * @returns {Object} JavaScript value.
 * @memberOf JSON
 */
parse : function(text, reviver) { },

/**
 * This method produces a JSON text from a JavaScript value.
 * @param {Object} value - Any JavaScript value, usually an object or array.
 * @param {Object} replacer [optional] - An optional parameter that determines how object values are stringified for objects. It can be a function or an array of strings.
 * @param {Object} space [optional] - An optional parameter that specifies the indentation of nested structures. If it is omitted, the text will be packed without extra whitespace. If it is a number, it will specify the number of spaces to indent at each level. If it is a string (such as '\t' or '&nbsp;'), it contains the characters used to indent at each level.
 * @returns {String} JSON string
 * @memberOf JSON
 */
stringify : function(value, replacer, space) { }

};

/**
 * Adds/subtracts a number of days to or from a date object
 * @param {Date} d [required] - Date object
 * @param {Number} days [required] - Number of days being added to the date
 * @returns {Date} Date object corresponding to date that was passed in, plus the days you added or subtracted
 */
function nlapiAddDays(d, days) { };

/**
 * Adds/subtracts a number of months to or from a date object
 * @param {Date} d [required] - Date object
 * @param {Number} months [required] - number of months being added to the date
 * @returns {Date} Date object corresponding to date that was passed in, plus the months you added or subtracted
 */
function nlapiAddMonths(d, months) { };

/**
 * Attaches a single record to another record. The following attachment relationships are supported:
 * <ul>
 *     <li>Support Case attached to Issue</li>
 *     <li>Contact attached to Customer|Partner|Vendor|Lead|Prospect|Project</li>
 *     <li>File attached to any transaction, item, activity, custom, or entity record</li>
 *     <li>Custom child record attached to supported parent record</li>
 *     <li>Entity to a static entity group. Note that if attaching an entity to a static entity group, you must specify <strong>entitygroup</strong> as the internal ID for the type2 argument (see below).</li>
 * </ul>
 * <p>This API is supported in client, user event, scheduled, and Suitelet scripts. See API Governance for the unit cost associated with this API.
 * @param {String} type [required] - The record internal ID name for the record being attached. For a list of supported record types and their internal IDs, see SuiteScript Supported Records in the NetSuite Help Center. Note that if you want to attach a file from the file cabinet, set type to <strong>file</strong>.
 * @param {String} id [required] - The record internalId for the record being attached, for example 555 or 78.
 * @param {String} type2 [required] - The record internal ID name for the record being attached to. Note that if attaching an entity to a static entity group, the internal ID for the entity group record type is <strong>entitygroup</strong>.
 * @param {String} id2 [required] - The record internalId for the record being attached to.
 * @param {Object} attributes [optional] - Name/value pairs containing attributes for the attachment:
 * <ul>
 *     <li>contact->company record: role (the contact role id used for attaching contact to customer/vendor/partner)</li>
 *     <li>customrecord*->parent record: field (the custom field used to link child custom record to parent record)</li>
 * </ul>
 * @returns {Void}
 * @since Version 2008.1
 */
function nlapiAttachRecord(type, id, type2, id2, attributes) { };

/**
 * Cancels any uncommited changes to the current line of a sublist
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Void}
 */
function nlapiCancelLineItem(type) { };

/**
 * Saves/commits the changes to the current line in a sublist. This is the equivalent of clicking <strong>Done</strong> for a line item in the UI.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Void}
 */
function nlapiCommitLineItem(type) { };

/**
 * Initializes a new record using field data from an existing record. Note that this API simply creates a new instance of another record. After making changes to the copy, you must submit the copy (which is considered as a new record) to the database for your changes to be committed to NetSuite.
 * <p>This API is supported in all script types. See API Governance for the unit cost associated with this API.
 * @param {String} type [required] - The record internal ID name. For a list of supported record types and their internal IDs, see SuiteScript Supported Records in the NetSuite Help Center.
 * @param {Number} id [required] - The internalId for the record. If you are unsure how to find a record's internalId, see Showing Record and Field IDs in Your Account.
 * @param {Object} initializeValues [optional] - Contains an array of name/value pairs of defaults to be used during record initialization. For a list of record initialization types and the values they can take, see Record Initialization Defaults in the NetSuite Help Center.
 * @returns {nlobjRecord} An nlobjRecord object of a copied record
 */
function nlapiCopyRecord(type, id, initializeValues) { };

/**
 * Use this function to return a reference to an nlobjAssistant object, which is the basis for building your own custom assistant. This API is supported in Suitelets.
 * @param {String} title [required] - The name of the assistant. This name will appear at the top of all assistant pages.
 * @param {Boolean} hideHeader [optional] - If not set, defaults to false. If set to true, the header (navbar/logo) on the assistant is hidden from view. Note that the header is where the Add to Shortcuts link appears.
 * @returns {nlobjAssistant} nlobjAssistant object
 * @since Version 2009.2
 */
function nlapiCreateAssistant(title, hideHeader) { };

/**
 * Initializes a new record and returns an nlobjCSVImport object. You can then use the methods available on the returned record object to populate the object with the desired information. Next, you can pass this object to nlapiSubmitCSVImport(nlobjCSVImport), which asynchronously imports the data from the returned object into NetSuite.
 * <p>Note that this API cannot be used to import data that is imported by simple (2-step) assistants in the UI, because these import types do not support saved import maps. This limitation applies to budget, single journal entry, single inventory worksheet, project tasks, and Web site redirects imports.
 * @returns {nlobjCSVImport} An nlobjCSVImport object to be passed as a parameter to nlapiSubmitCSVImport(nlobjCSVImport).
 * @since Version 2012.2
 */
function nlapiCreateCSVImport( ) { };

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a <strong>sublist</strong> field on the parent record.
 * <p>Important: This API should only be used in user event scripts on the parent record. Note, however, this API is not supported in beforeLoad user event scripts. This API is also not currently supported in form-level or record-level client SuiteScripts associated with the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiCreateCurrentLineItemSubrecord(sublist, fldname) { };

/**
 * With scriptable email templates, you can create dynamic templates for email marketing campaigns and system email. See Scriptable Templates for additional information.
 * <p>This API is called as the first step in performing a mail merge with an existing scriptable email template. The following record types are supported:
 * <ul>
 *     <li>Contact</li>
 *     <li>Case</li>
 *     <li>Customer</li>
 *     <li>Employee</li>
 *     <li>Partner</li>
 *     <li>Vendor</li>
 *     <li>All transaction types</li>
 *     <li>All custom records</li>
 * </ul>
 * <p>Important: This function only supports scriptable email templates. It does not support CRMSDK templates.
 * @param {String} templateId [required] � Internal ID of the scriptable template you want to use.
 * @returns {nlobjEmailMerger} an nlobjEmailMerger object
 * @throws SSS_MERGER_ERROR_OCCURRED � Thrown if the email merger fails.
 */
function nlapiCreateEmailMerger(templateId) { };

/**
 * Creates an nlobjError (complete with stacktrace) that can be thrown to abort script execution. This API is supported in user event, scheduled, portlet, and Suitelet scripts.
 * @param {String} code [required] - A user-defined error code
 * @param {String} details [required] - The error details
 * @param {Boolean} suppressNotification [optional] - If not set, defaults to false and an email notification with error details is sent after script execution. If set to true, the error email notification is suppressed. Note: The values for this parameter can be true or false, not T or F.
 * @returns {nlobjError} An nlobjError object
 */
function nlapiCreateError(code, details, suppressNotification) { };

/**
 * Instantiates and returns an nlobjFile object. The file object can be used as an email or fax attachement. The file object can also be saved to the file cabinet using nlapiSubmitFile(file).
 * <p>The nlapiCreateFile API can also be used for streaming to clients (via Suitelets). For streaming or attaching binary content, you can call the following. Note that each of these APIs can load or generate binary content, provided that the contents argument is <strong>base-64</strong> encoded.
 * <ul>
 *     <li>nlapiLoadFile(id)</li>
 *     <li>nlapiPrintRecord(type, id, mode, properties)</li>
 *     <li>nlapiMergeRecord(id, baseType, baseId, altType, altId, fields)</li>
 * </ul>
 * <p>This API is supported in user event, scheduled, portlet, mass update, and Suitelet scripts.
 * <p>Important: Be aware that the nlapiCreateFile function does not support the creation of non-text file types such as PDFs, unless the contents argument is base-64 encoded.
 * @param {String} name [required] - The name of the file
 * @param {String} type [required] - The file type. For a list of supported file types, see Supported File Types in the NetSuite Help Center. Note that when specifiying the type for an ad-hoc email or fax attachment, only non-binary types are supported (for example, PLAINTEXT, HTMLDOC, XMLDOC), <strong>unless</strong> the contents argument is base-64 encoded.
 * @param {String} contents [required] - The contents of the file
 * @returns {nlobjFile} An nlobjFile object
 * @since Version 2008.1
 */
function nlapiCreateFile(name, type, contents) { };

/**
 * Creates an nlobjForm object which can be used to generate an entry form page. This API is available to Suitelets only.
 * @param {String} title [required] - The title for the form
 * @param {Boolean} hideNavbar [optional] - Set to true if the navigation bar should be hidden on the Suitelet. Setting to true enables �popup page� use cases in which the popup can be created with the UI Objects API rather than just HTML.
 * When hideNavbar is set to false, the standard NetSuite navigation appears on the form or popup. Note that this navigation bar contains links to pages that require users to be logged in to access.
 * @returns {nlobjForm} An nlobjForm object
 */
function nlapiCreateForm(title, hideNavbar) { };

/**
 * Creates an nlobjList object used to generate an internal standalone list. This API is available to <strong>Suitelets only</strong>.
 * @param {String} title [required] - The title for the list
 * @param {Boolean} hideNavbar [optional] - Set to true if the navigation bar should be hidden on the Suitelet. Setting to true enables �popup page� use cases in which the popup can be created with the UI Objects API rather than just HTML.
 * When hideNavbar is set to false, the standard NetSuite navigation appears on the form or popup. Note that this navigation bar contains links to pages that require users to be logged in to access.
 * @returns {nlobjList} An nlobjList object
 */
function nlapiCreateList(title, hideNavbar) { };

/**
 * Initializes a new record and returns an nlobjRecord object containing all the default field data for that record type. You can then use the methods available on the returned record object to populate the record with the desired information.
 * <p>The nlapiCreateRecord function must be followed by the nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields) function before the record is actually committed to the database.
 * <p>This API is supported in all script types. See API Governance for the unit cost associated with this API.
 * @param {String} type [required] - The record internal ID name. For a list of supported record types and their internal IDs, see SuiteScript Supported Records in the NetSuite Help Center.
 * @param {Object} initializeValues [optional] - Contains an array of name/value pairs of defaults to be used during record initialization. For a list of record initialization types and the values they can take, see Record Initialization Defaults in the NetSuite Help Center.
 * @returns {nlobjRecord} An nlobjRecord object of a new record
 * @throws SSS_INVALID_RECORD_TYPE
 * @throws SSS_TYPE_ARG_REQD
 */
function nlapiCreateRecord(type, initializeValues) { };

/**
 * Creates an instance of a report definition object. The report is built on this object using subsequent methods. The report definition can be used to create a form for rendering the pivot table report in a browser, or the pivot table APIs can be used to extract the values of the individual rows and columns of the pivot table.
 * @returns {nlobjReportDefinition} nlobjReportDefinition
 * @since Version 2012.2
 */
function nlapiCreateReportDefinition() { };

/**
 * Creates an nlobjReportForm object to render the report definition.
 * @param {String} title [required] - The title of the form.
 * @returns {nlobjReportForm} nlobjReportForm
 * @since Version 2012.2
 */
function nlapiCreateReportForm(title) { };

/**
 * Creates a new search. The search can be modified and run as an ad-hoc search, without saving it. Alternatively, calling nlobjSearch.saveSearch(title, scriptId) will save the search to the database, so it can be resused later in the UI or using nlapiLoadSearch(type, id).
 * @param {String} type [required] - The record internal ID of the record type you are searching (for example, customer|lead|prospect|partner|vendor|contact). For a list of internal IDs, in the NetSuite Help Center see SuiteScript Supported Records.
 * @param {nlobjSearchFilter|Array|Array} filters [optional] - A single nlobjSearchFilter object - <strong>or</strong> - an array of nlobjSearchFilter objects - <strong>or</strong> - a search filter expression.
 * @param {nlobjSearchColumn|Array} columns [optional] - A single nlobjSearchColumn object - <strong>or</strong> - an array of nlobjSearchColumn objects. Note that you can further filter the returned nlobjSearch object by passing additional search return column values. You will do this using the nlobjSearch.setColumns(columns) method.
 * @returns {nlobjSearch} nlobjSearch
 * @since Version 2012.1
 */
function nlapiCreateSearch(type, filters, columns) { };

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a <strong>body</strong> field on the parent record.
 * <p>Important: This API should only be used in user event scripts on the parent record. Note, however, this API is not supported in beforeLoad user event scripts. This API is not supported in form-level or record-level client SuiteScripts deployed on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiCreateSubrecord(fldname) { };

/**
 * Use this function to produce HTML and PDF printed forms that utilize advanced PDF/HTML template capabilities. This API returns an nlobjTemplateRenderer object. This object includes methods that pass in a template as string to be interpreted by FreeMarker, and render interpreted content in your choice of two different formats: as HTML output to an nlobjResponse object, or as XML string that can be passed to nlapiXMLToPDF(xmlstring) to produce a PDF.
 * <p>This function is available when the Advanced PDF/HTML Templates feature is enabled. For information about this feature, see Advanced PDF/HTML Templates.
 * @returns {nlobjTemplateRenderer} An nlobjTemplateRenderer object
 * @since Version 2013.1
 */
function nlapiCreateTemplateRenderer() { };

/**
 * Converts a date object to a string, formats the string based on the format argument passed in, and then returns the formatted string.
 * @param {Date} d [required] - Date object being converted into a string
 * @param {String} format [optional] - Use one of the following arguments. If an argument is not passed in, the date format is used by default.
 * <ul>
 *     <li>date � formats the string as a date, based on the Date Format selected in Set Preferences.</li>
 *     <li>timeofday � formats the string as a time (hour and minutes), based on the Time Format selected in Set Preferences.</li>
 *     <li>datetime � formats the string as a concatenation of date and time (hour and minutes), based on the Date Format and Time Format selected in Set Preferences</li>
 *     <li>datetimetz � formats the string as a concatenation of date and time (hour, minutes and seconds), based on the Date Format and Time Format selected in Set Preferences</li>
 * </ul>
 * @returns {String} String format of the date that was passed
 */
function nlapiDateToString(d, format) { };

/**
 * Deletes a file and returns the internal ID of the file that was deleted. Usage metering allowed for this function is 20 units. This API is supported in user event, scheduled, portlet, and Suitelet scripts.
 * @param {Number} id [required] - The internal ID for the file you want to delete
 * @returns {Number} The internal ID for the file that was deleted as an integer
 * @since Version 2009.1
 */
function nlapiDeleteFile(id) { };

/**
 * Use this API to delete an existing record. This API is supported in all script types. See API Governance for the unit cost associated with this API.
 * @param {String} type [required] - The record internal ID name. For a list of supported record types and their internal IDs, see SuiteScript Supported Records in the NetSuite Help Center.
 * @param {Number} id [required] - The internalId for the record
 * @returns {Void}
 * @throws SSS_INVALID_RECORD_TYPE
 * @throws SSS_TYPE_ARG_REQD
 * @throws SSS_INVALID_INTERNAL_ID
 * @throws SSS_ID_ARG_REQD
 */
function nlapiDeleteRecord(type, id) { };

/**
 * Use this API to detach a single record from another record. The following detach relationships are supported:
 * <ul>
 *     <li>Issue detached from Support Case</li>
 *     <li>Contact detached from Customer|Partner|Vendor|Lead|Prospect|Project</li>
 *     <li>File detached from any transaction, item, activity, custom, or entity record</li>
 *     <li>Custom child record detached from supported parent record</li>
 *     <li>Entity detached from a static entity group. Note that if detaching an entity from a static entity group, you must specify <strong>entitygroup</strong> as the internal ID for the type2 argument (see below).</li>
 * </ul>
 * <p>This API is supported in client, user event, scheduled, portlet, and Suitelet scripts. See API Governance for the unit cost associated with this API.
 * @param {String} type [required] - The record internal ID name for the record being detached. For a list of record names, see the column called �Record Internal ID� in SuiteScript Supported Records.
 * @param {Number} id [required] - The record internalId for the record being detached
 * @param {String} type2 [required] - The record internal ID name for the record being detached from. Note that if detaching an entity from a static entity group, the internal ID for the entity group record type is <strong>entitygroup</strong>.
 * @param {Number} id2 [required] - The record internalId for the record being detached from
 * @param {Object} attributes [optional] - Name/value pairs containing attributes for the attachment:
 * <ul>
 *     <li>customrecord*->parent record: field (the custom field used to link child custom record to parent record)</li>
 * </ul>
 * @returns {Void}
 * @since Version 2008.1
 */
function nlapiDetachRecord(type, id, type2, id2, attributes) { };

/**
 * Sets the given field to disabled or enabled based on the value (true or false). This API is supported in client scripts only.
 * @param {String} fldnam [required] - The internal ID name of the field to enable/disable
 * @param {Boolean} val [required] - If set to true the field is disabled. If set to false it is enabled. Important: The values for this parameter can be true or false, not T or F.
 * @returns {Void}
 */
function nlapiDisableField(fldnam, val) { };

/**
 * Sets the given line item field of a sublist to disabled or enabled based on the value (true or false). This function is only supported in client scripts.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the line item field to enable/disable
 * @param {Boolean} val [required] - If set to true the field is disabled. If set to false it is enabled. Important: The values for this parameter can be true or false, not T or F.
 * @returns {Void}
 */
function nlapiDisableLineItemField(type, fldnam, val) { };

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a <strong>sublist</strong> field on the parent record.
 * <p>Important: This API should only be used in user event scripts on the parent record. This API is not currently supported in form-level or record-level client SuiteScripts associated with the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiEditCurrentLineItemSubrecord(sublist, fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a <strong>body</strong> field on the parent record.
 * <p>Important: This API should only be used in user event scripts on the parent record. This API is not currently supported in form-level or record-level client SuiteScripts deployed on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiEditSubrecord(fldname) { };

/**
 * Encrypts a clear text String using a SHA-1 hash function.
 * @param {String} s [required] - String being encrypted
 * @param {String} algorithm [optional] - algorithm to use
 * @param {String} key [optional] - secret key to use
 * @returns {String} String
 */
function nlapiEncrypt(s, algorithm, key) { };

/**
 * Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands)
 * @param {String} text [required] - String being escaped
 * @returns {String} String
 * @returns In this line, nlapiEscapeXML is being used to escape special characters, such as an ampersand (&), that may appear in the names of items that are returned in an Item search. For the complete code sample, see Example 2 in the API documentation for nlapiXMLToPDF.
 */
function nlapiEscapeXML(text) { };

/**
 * Use this API to get the exchange rate between two currencies based on a certain date. The exchange rate values you are getting are those that appear in the Exchange Rate column of the Currency Exchange Rates record (see figure).
 * <p>The usage metering allowed for this API is 10 units. This API is supported in all script types.
 * <p>When using this API, the first currency ( sourceCurrency ) is the one to look up relative to the second ( targetCurrency ). The date ( effectiveDate ) is the rate in effect on that date. If there are multiple rates, it is the latest entry on that date.
 * <p>For example, if you call nlapiExchangeRate('GBP', 'USD', '04/22/2010') and it returns '2', this means that if you were to enter an invoice on 4/22/10 for a GBP customer in your USD subsidiary, the rate would be 2.
 * @param {String|Number} sourceCurrency [required] - The currency internal ID or symbol. For example, you can use either <strong>1</strong> (currency ID) or <strong>USD</strong> (currency symbol). If you have the Multiple Currencies feature enabled in your account, you can see all currency IDs and symbols by going to Lists > Accounting > Currencies.
 * @param {String|Number} targetCurrency [required] - The currency internal ID or symbol.
 * @param {String|Number} effectiveDate [optional] - If not supplied, then effectiveDate defaults to the current date.
 * @returns The exchange rate (as a decimal number) in the same precision that is displayed in the NetSuite UI.
 * @throws SSS_INVALID_CURRENCY_ID (if an invalid currency (from or to) is specified)
 * @since Version 2009.1
 */
function nlapiExchangeRate(sourceCurrency, targetCurrency, effectiveDate) { };

/**
 * This API returns the line number of a particular price in a given column. If the value is present on multiple lines, it will return the line item of the first line that contains the value. This API is supported in client and user event scripts. Use this API on a matrix sublists only.
 * <p>Parameters
 * <ul>
 *     <li>type {string} [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.</li>
 *     <li>fldnam {string} [required] - The internal ID of the matrix field</li>
 *     <li>val {string} [required] - The value of the field</li>
 *     <li>column {int} [required] - The column number for this field. Column numbers start at 1, not 0.</li>
 * </ul>
 * @returns {Number} The line number (as an integer) of a specified matrix field
 * @since Version 2009.2
 */
function nlapiFindLineItemMatrixValue(type, fldnam, val, column) { };

/**
 * Use this API to find the line number of a specific field in a sublist. This API can be used on any sublists that supports SuiteScript. This API is supported in client and user event scripts only.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The field internal ID
 * @param {String} val [required] - The value of the field
 * @returns {Number} The line number (as an integer) of a specific sublist field
 * @since Version 2009.2
 */
function nlapiFindLineItemValue(type, fldnam, val) { };

/**
 * Formats a String into a currency field value
 * @param {String} str [required] - String being formatted into currency
 * @returns {String} String
 */
function nlapiFormatCurrency(str) { };

/**
 * Used to branch scripts depending on the metadata or context of the execution. For example, you may want the script to perform in one way when a form is accessed via the UI and another when the form is accessed via web services.
 * <p>This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns {nlobjContext} nlobjContext object containing information (metadata) about the current user or script context.
 */
function nlapiGetContext() { };

/**
 * This API returns the value of a datetime field on the currently selected line of a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. This field ID must point to a datetime formatted field.
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {String} The string value of a Date/Time field on the currently selected line.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiGetCurrentLineItemDateTimeValue(type, fieldId, timeZone) { };

/**
 * Returns the line number of the currently selected line in a group.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Number} The integer value for the currently selected line number in a sublist
 */
function nlapiGetCurrentLineItemIndex(type) { };

/**
 * Use this API to get the value of the currently selected matrix field. This API should be used on matrix sublists only. This API is supported in client and user event scripts.
 * <p>Important: Currently the Pricing sublist and Demand Plan Detail sublist are the only matrix sublist types that support SuiteScript. For details, see Pricing Sublist and Demand Plan Detail Sublist in the NetSuite Help Center.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field being set.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1, not 0.
 * @returns {String} The string value of a field on the currently selected line in a matrix sublist. Returns null if the field does not exist.
 * @since Version 2009.2
 */
function nlapiGetCurrentLineItemMatrixValue(type, fldnam, column) { };

/**
 * Returns the display name (the UI label) of a select field (based on its current selection) on the <strong>currently</strong> selected line. Typically used in validate line functions.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @returns {String} The string display name of a select field (based on its current selection) on the currently selected line. Returns null if the field does not exist.
 */
function nlapiGetCurrentLineItemText(type, fldnam) { };

/**
 * Returns the value of a sublist field on the currently selected line
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is 1 (not 0). email Yang about taking out the linenum in previous API
 * @returns {String} The string value of a field on the currently selected line. Returns null if field does not exist.
 */
function nlapiGetCurrentLineItemValue(type, fldnam) { };

/**
 * Returns the values of a multiselect sublist field on the currently selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 * <p>This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the multiselect field.
 * @returns {array} An array of string values for the multiselect sublist field (on the currently selected line)
 * @since Version 2012.1
 */
function nlapiGetCurrentLineItemValues(type, fldnam) { };

/**
 * This API returns the value of a datetime field. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} fieldId [required] � The internal field ID. This field ID must point to a datetime formatted field.
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {String} The string value of a datetime field.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiGetDateTimeValue(fieldId, timeZone) { };

/**
 * This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns {Number} The integer value of the current user's department (for example, 3, 9, or 1)
 */
function nlapiGetDepartment() { };

/**
 * Use this function to obtain <strong>body</strong> field metadata. Calling this function instantiates the nlobjField object, which then allows you to use the methods available to nlobjField to get field metadata.
 * <p>This API is supported in client and user event scripts only. <strong>Note</strong>, however, when nlapiGetField is used in <strong>client scripts</strong>, the field object returned is <strong>read-only</strong>. The means that you can use nlobjField getter methods in client scripts (to obtain metadata about the field), but you cannot use nlobjField setter methods to set field properties.
 * @param {String} fldnam [required] - The internal ID of the field.
 * @returns {nlobjField} Returns an nlobjField object representing this field
 * @since Version 2009.1
 */
function nlapiGetField(fldnam) { };

/**
 * Use this API to get the text value (rather than the internal ID value) of a field. This API is available in client and user event scripts only.
 * @param {String} fldnam [required] - The internal ID of the field.
 * @returns {String} The string UI display name for a select field corresponding to the current selection
 */
function nlapiGetFieldText(fldnam) { };

/**
 * Returns the display names for a multiselect field corresponding to the current selection. This API is available in client and user event scripts only.
 * @param {String} fldnam [required] - The internal ID of the field whose display values are returned
 * @returns {Array} The display names for a multiselect field as an Array.
 * @since Version 2009.1
 */
function nlapiGetFieldTexts(fldnam) { };

/**
 * Use this function to get the internal ID of a field. For example, if the customer Abe Simpson appears in a field, this function will return 87, which represents the internal ID value of the Abe Simpson customer record. Note that if you are getting the value of an inline checkbox, the return value will be <strong>F</strong> if the field is unset.
 * <p>This API is available in client and user event scripts only.
 * <p>Also be aware that this API is not supported during delete events. Calling nlapiGetFieldValue on a record you are attempting to delete will return a user error.
 * <p>Also note that if you are trying to return an array of values from a multiselect field, it is recommended that you use the nlapiGetFieldValues(fldnam) API.
 * <p>Finally, NetSuite recommends that you read the topic Getting Field Values in SuiteScript, which addresses the rare instances in which the value returned by this API is inconsistent.
 * @param {String} fldnam [required] - The internal ID of the field.
 * @returns {String} The string value of a field on the <strong>current</strong> record, or returns null if the field does not exist on the record or the field is restricted.
 */
function nlapiGetFieldValue(fldnam) { };

/**
 * Use this function to get an array of internal ID values for a multiselect field.
 * <p>This API is available in client and user event scripts only.
 * @param {String} fldnam [required] - The internal ID of the field. For a list of fields that are supported in SuiteScript and their internal IDs, see the SuiteScript Reference Guide.
 * @returns {Array} The values of a multiselect field as an Array on the current record. Returns null if the field does not exist on the record or the field is restricted.
 * @since Version 2009.1
 */
function nlapiGetFieldValues(fldnam) { };

/**
 * Returns a job manager instance (nlobjJobManager). You then use the methods on nlobjJobManager to create and submit your merge duplicate records request. This API is supported in script types that run on the server. You cannot use this function in a client script.
 * <p>This API costs no governance units.
 * <p><strong>Parameters</strong>
 * <ul>
 *     <li>jobType {string} [required] - Set to DUPLICATERECORDS.</li>
 * </ul>
 * @returns {nlobjJobManager} nlobjJobManager
 * @since Version 2013.1
 */
function nlapiGetJobManager(jobType) { };

/**
 * Use this API to determine the number of line items on a sublist. You can then use APIs such as nlapiInsertLineItem or nlapiRemoveLineItem to add or remove lines before/after existing lines.
 * <p>The nlapiGetLineItemCount API is available in Client and User Event scripts only. If you want to get the line count of a sublist in a Suitelet, see nlobjSubList.getLineItemCount(group).
 * <p>Important: The first line number on a sublist is <strong>1</strong> (not 0).
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Number} The integer value for the number of lines in a sublist for the current record
 */
function nlapiGetLineItemCount(type) { };

/**
 * This API returns the value of a datetime field on a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {Number} lineNum [required] � The line number for this field. Note the first line number on a sublist is 1 (not 0).
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {String} The string value of a datetime field on a sublist.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiGetLineItemDateTimeValue(type, fieldId, lineNum, timeZone) { };

/**
 * Use this function to obtain <strong>sublist</strong> (line item) field metadata. Calling this function instantiates the nlobjField object, which then allows you to use all the methods available to nlobjField to get field metadata.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The internal ID of the sublist field
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {nlobjField} An nlobjField object representing this line item field
 * @since Version 2009.1
 */
function nlapiGetLineItemField(type, fldnamm, linenum) { };

/**
 * Use this API to obtain metadata for a field that appears in a matrix sublist. This API is supported in client and user event scripts.
 * <p>Calling this function instantiates the nlobjField object, which then allows you to use all the methods available to the nlobjField object.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the field (line) whose value you want returned.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1, not 0.
 * @returns {nlobjField} An nlobjField object representing this sublist field. Returns null if the field you have specified does not exist.
 * @since Version 2009.2
 */
function nlapiGetLineItemMatrixField(type, fldnam, linenum, column) { };

/**
 * Use this API to get the value of a matrix field that appears on a specific line in a specific column. This API can be used only in the context of a matrix sublist. This API is supported in client and user event scripts.
 * <p>Important: Currently the Pricing sublist and Demand Plan Detail sublist are the only matrix sublist types that support SuiteScript. For details, see Pricing Sublist and Demand Plan Detail Sublist in the NetSuite Help Center.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field whose value you want returned.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {String} The string value of the matrix field.
 * @since Version 2009.2
 */
function nlapiGetLineItemMatrixValue(type, fldnam, linenum, column) { };

/**
 * Returns the display name of a select field (based on its current selection) in a sublist.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of the display name of a select field (based on its current selection) in a sublist. Returns null if field does not exist on the record or the field is restricted.
 */
function nlapiGetLineItemText(type, fldnam, linenum) { };

/**
 * Available only in client and user event SuiteScripts. Note that you cannot set default line item values when the line is not in edit mode.
 * <p>Also, NetSuite recommends that you read the topic Getting Field Values in SuiteScript, which addresses the rare instances in which the value returned by this API is inconsistent.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The internal ID of the field (line item) whose value is being returned
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of a sublist line item
 */
function nlapiGetLineItemValue(type, fldnam, linenum) { };

/**
 * Returns the values of a multiselect sublist field on a selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 * <p>This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The internal ID of the multiselect field
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {array} An array of string values for the multiselect sublist field
 * @since Version 2012.1
 */
function nlapiGetLineItemValues(type, fldname, linenum) { };

/**
 * Returns the integer value of the current user's location. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns {Number} The integer value of the current user's location (for example, 5, 7, -2). Note that if a location has not been set, the value of <strong>-1</strong> is returned.
 */
function nlapiGetLocation() { };

/**
 * Returns the NetSuite login credentials of currently logged-in user.
 * <p>This API is supported in user event, portlet, Suitelet, RESTlet, and SSP scripts. For information about the unit cost associated with this API, see API Governance.
 * @returns {nlobjLogin} nlobjLogin
 * @since Version 2012.2
 */
function nlapiGetLogin() { };

/**
 * Use this API in a matrix sublist to get the number of columns for a specific matrix field. This API is supported in client and user event scripts.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The field internal ID of the matrix field.
 * @returns {Number} The integer value for the number of columns of a specified matrix field
 * @since Version 2009.2
 */
function nlapiGetMatrixCount(type, fldnam) { };

/**
 * Use this API to get field metadata for a matrix �header� field in a matrix sublist.
 * <p>For example, if the Quantity Pricing feature is enabled in your account, you will see the <strong>Qty</strong> fields at the top of the pricing matrix. The Qty fields are considered to be the header fields in the pricing matrix. For more information on matrix header fields, see Matrix APIs in the NetSuite Help Center.
 * <p>This API is supported in client and user event scripts.
 * <p>(in doc all access...you'll pass 'price1', 'price', 3 and returns in this case all the properties of the header level Qty field object - this API could have been called getMatrixHeaderFields - b/c it is only the Qty fields that are being returned) - note: no real use case, so don't worry about trying to doc.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix header field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {nlobjField} nlobjField object
 * @since Version 2009.2
 */
function nlapiGetMatrixField(type, fldnam, column) { };

/**
 * Use this API to get the value of a matrix �header� field in a matrix sublist.
 * <p>For example, if the Quantity Pricing feature is enabled in your account, you will see the <strong>Qty</strong> fields at the top of the pricing matrix. The Qty fields are considered to be the header fields in the pricing matrix. See Matrix APIs in the NetSuite Help Center for more information on matrix header fields.
 * <p>This API is supported in client and user event scripts.
 * <p>Use this API to get the quantity level values on the Pricing sublist. - (returns the value of a matrix header field...so 10 is returned for the line item fields)
 * <p>also find out, if you have multi-quantity feature turned off, would you still even use this API. what would be returned. The value of 1 - no? - this returns null if you try using this API when multi-quantity is turned off.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix header field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {Number} The integer value of a matrix header field. For example, on the Pricing sublist the value of a specified quantity level (Qty) field is returned.
 * @since Version 2009.2
 */
function nlapiGetMatrixValue(type, fldnam, column) { };

/**
 * Available in beforeLoad, beforeSubmit, and afterSubmit user event scripts. You are not allowed to submit the current or previous record returned by nlapiGetNewRecord.
 * <p>When triggered by an inline edit event (type == xedit), this function only returns the field and sublist line item values that were edited. For all other triggers, nlapiGetNewRecord returns all record object values.
 * @returns {nlobjRecord} An nlobjRecord containing all the values being used for a write operation
 */
function nlapiGetNewRecord() { };

/**
 * Available in beforeLoad, beforeSubmit, and afterSubmit user event scripts. You are not allowed to submit the current or previous record returned by nlapiGetOldRecord.
 * @returns {nlobjRecord} An nlobjRecord containing all the values for the current record prior to the write operation
 */
function nlapiGetOldRecord() { };

/**
 * Use this API to retrieve the internalId of the current record in a user event script. This API is available in client and user event scripts only.
 * @returns {Number} The integer value of the record whose form the user is currently on, or for the record that the current user event script is executing on. Note that the value of <strong>-1</strong> is returned if there is no current record or the current record is a new record.
 */
function nlapiGetRecordId() { };

/**
 * Use this API to retrieve the record type internal ID of the current record in a user event script or a client script. If there is no current record type, the value of null will be returned.
 * @returns {String} The record type internal ID as a string. Example return values are:
 */
function nlapiGetRecordType() { };

/**
 * Returns the internalId for the current user's role. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns {Number} The integer value of the current user's role (for example: 1, 3, or 5). Note that the value of <strong>-31</strong> is returned if a user cannot be properly identified by NetSuite. This occurs when the user has not authenticated to NetSuite, for example when using externally available ( Available without Login ) Suitelets or online forms.
 */
function nlapiGetRole() { };

/**
 * Returns the internalId for the current user's subsidiary. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns {Number} The integer value for the current user's subsidiary (for example 1, 3, or 5). Note that if a subsidiary has not been set (for example, the subsidiaries feature is not turned on in the user's account), the value of 1 is returned if this function is called.
 */
function nlapiGetSubsidiary() { };

/**
 * Returns the internalId of the current NetSuite user. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @returns The following sample shows how to use nlapiGetUser in conjunction with nlapiSendEmail. In this sample, the internal ID of the currently logged in user is passed to the author argument in nlapiSendEmail, which is a required argument in this API.
 */
function nlapiGetUser() { };

/**
 * Use this function to initiate a workflow on-demand. This function is the programmatic equivalent of the Initiate Workflow action in the SuiteFlow Manager. The function returns the workflow instance ID for the workflow-record combination. A user error is thrown if the record in the workflow is invalid or not supported for that workflow.
 * <p>Usage metering allowed is 20 units. This API is supported in user event, scheduled, portlet, Suitelet, mass update, and workflow action scripts.
 * @param {String} recordtype [required] - The record type ID of the workflow base record (for example, 'customer', 'salesorder', 'lead'). In the Workflow Manager this is the record type that is specified in the Record Type field.
 * @param {Number} id [required] - The internal ID of the base record (for example 55 or 124).
 * @param {Number|String} workflowid [required] - The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
 * @returns {Number} The internal ID (int) of the workflow instance used to track the workflow against the record.
 * @since Version 2010.1
 */
function nlapiInitiateWorkflow(recordtype, id, workflowid) { };

/**
 * Use this function to asynchronously initiate a workflow. When you call nlapiInitiateWorkflowAsync, a job is created to initiate an instance of the specified workflow. The job is placed in the scheduling queue, and the workflow instance is initiated once the job reaches the top of the queue.
 * <p>The return value of nlapiInitiateWorkflowAsync is a string representing the workflow status. See Returns for additional information. An error is thrown if the record in the workflow is invalid or not supported for that workflow.
 * <p>Usage metering allowed is 20 units. This API is supported in all server-side scripts.
 * @param {String} recordType [required] � The record type of the workflow base record (for example, 'customer', 'salesorder', 'lead'). In the Workflow Manager, this is the record type that is specified in the Record Type field.
 * @param {Number} id [required] � The internal ID of the base record (for example 55 or 124).
 * @param {Number|String} workflowId [required] � The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
 * @param {Object} initialValues [optional] � Name/value pairs representing defaults used during workflow initialization.
 * @returns {String} A string value that indicates whether the workflow was successfully placed in the scheduling queue:
 * @since Version 2014.2
 */
function nlapiInitiateWorkflowAsync(recordType, id, workflowId, initialValues) { };

/**
 * Inserts a line above the currently selected line in a sublist. Available to client and user event scripts only.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {Number} line [required] - The line number in which to insert new line. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {Void}
 */
function nlapiInsertLineItem(type, line) { };

/**
 * Adds a select option to a select/multiselect field that was added through scripting. This field will appear as a line item on a sublist.
 * <p>Note that this API can only be used on select/multiselect fields that are added via the UI Objects API (for example on Suitelets or beforeLoad user events).
 * <p>For performance reasons, you should disable the drop-down before adding multiple options, then enable the drop-down when finished.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the scripted field
 * @param {String|Number} value [required] - A unique value for the select option. Note that the datatype for this argument will vary depending on the value that is set. For example, you may assign numerical values such as 1, 2, 3 or string values such as option1, option2, option3.
 * @param {String} text [required] - The display name of the select option
 * @param {Boolean} selected [optional] - If not set, this argument defaults to false. If set to true, the selected option will become the default selection. Note: The values for this parameter are true or false, not T or F.
 * @returns {Void}
 */
function nlapiInsertLineItemOption(type, fldnam, value, text, selected) { };

/**
 * Adds a select option to a select/multiselect field added via script. Note that this API can only be used on select/multiselect fields that are added via the UI Objects API (for example, in Suitelets or beforeLoad user events scripts).
 * @param {String} fldnam [required] - The internalId of the scripted field
 * @param {String|Number} value [required] - A unique value for the select option. Note that the datatype for this argument will vary depending on the value that is set. For example, you may assign numerical values such as 1, 2, 3 or string values such as option1, option2, option3.
 * @param {String} text [required] - The display name of the select option
 * @param {Boolean} selected [optional] - If not set, this argument defaults to false. If set to true, the select option becomes the default option. Important: The values for this parameter can be true or false, not T or F.
 * @returns {Void}
 */
function nlapiInsertSelectOption(fldnam, value, text, selected) { };

/**
 * Determines whether any changes have been made to a sublist
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Boolean} Returns true if the currently selected line of the sublist has been edited
 */
function nlapiIsLineItemChanged(type) { };

/**
 * Verifies whether a specified record is locked for duplicate resolution. This API is supported in all script types.
 * @param {String} type [required] � internal ID of the record type to check. This parameter is case-insensitive. Use one of the following types:
 * <ul>
 *     <li>customer</li>
 *     <li>contact</li>
 *     <li>lead</li>
 *     <li>prospect</li>
 *     <li>partner</li>
 *     <li>vendor</li>
 * </ul>
 * @param {String} id [required] � internal ID of the specific record to check.
 * @returns {Boolean} true or false that indicates whether the specified record is locked for duplicate resolution.
 */
function nlapiIsLockedForDupeMerge(type, id) { };

/**
 * Use this API to load a NetSuite configuration page. The following configuration pages support SuiteScript: Company Information, General Preferences, User Preferences, Accounting Preferences, Accounting Periods, Tax Periods.
 * <p>Once a page is loaded, you can set configuration values using nlobjConfiguration.setFieldValue(name, value).
 * <p>Important: In most server-side scripts, addresses are accessed with the subrecord APIs (see Scripting the Address Subrecord for more information). Scripts that access addresses on the Company Information page are an exception to this rule. You must access address fields on the Company Information page the same way you access other fields. See Example 1 for a code sample.
 * <p>The nlapiLoadConfiguration function is available in scheduled scripts, user event scripts, and Suitelets. It consumes 10 usage units per call.
 * @param {String} type - [required] - The internal ID of the configuration page. Available IDs are:
 * <ul>
 *     <li><strong>companyinformation</strong> - The internal ID for the Company Information page (Setup > Company > Company Information).</li>
 *     <li>   </li>
 *     <li><strong>userpreferences</strong> - The internal ID for the Set Preferences page (Home > Set Preferences).</li>
 *     <li><strong>accountingpreferences</strong> - The internal ID for the Accounting Preferences page (Setup > Accounting > Accounting Preferences).</li>
 *     <li><strong>accountingperiods</strong> - The internal ID for the Accounting Periods page (Setup > Accounting > Manage Accounting Periods).</li>
 *     <li><strong>taxperiods</strong> - The internal ID for the Tax Periods page (Setup > Accounting > Manage Tax Periods).</li>
 *     <li><strong>companyfeatures</strong> - The internal ID for looking up which features are enabled in an account.</li>
 * </ul>
 * @returns {nlobjConfiguration} nlobjConfiguration object
 * @since Version 2009.2
 */
function nlapiLoadConfiguration(type) { };

/**
 * Loads a file from the NetSuite file cabinet (using the file's internal ID or path). Returns an nlobjFile object that encapsulates the file's metadata (name and type) and contents in the form of a String (base-64 encoded if the file's type is binary). The script context must have privileges to the file (based on folder permissions), and the file cannot be a hidden (bundled) file.
 * <p>Usage metering allowed for nlapiLoadFile is 10 units. This API is supported in server-side scripts.
 * @param {String|Number} id [required] - The internal id of the file in the file cabinet. Can also be a relative path to the file in the file cabinet (for example: SuiteScript/myfile.js).
 * @returns {nlobjFile} An nlobjFile object
 */
function nlapiLoadFile(id) { };

/**
 * Loads an existing record from the system and returns an nlobjRecord object containing all the field data for that record. You can then extract the desired information from the loaded record using the methods available on the returned record object. This API is a core API. It is available in both client and server contexts.
 * <p>This API is supported in all script types. See API Governance for the unit cost associated with this API.
 * <p>Important: Only records that support SuiteScript can be loaded using this API. In NetSuite Help Center, see SuiteScript Supported Records for a list of records that support SuiteScript. Also be aware that if a particular record instance has been locked by the Lock Record workflow action, you will be unable to load the record using the nlapiLoadRecord API.
 * <p>Note that when using this API, you can:
 * <ul>
 *     <li>set the type parameter to 'inventoryitem' to load the following types of item records: inventoryitem, lotnumberedinventoryitem, serializedinventoryitem.</li>
 *     <li>set the type parameter to 'assemblyitem' to load the following types of item records: assemblyitem, lotnumberedassemblyitem, serializedassemblyitem.</li>
 *     <li>set the type parameter to 'customer' to load the following types of entity records: customer, lead, prospect.</li>
 *     <li>set the type parameter to 'usereventscript', 'suitelet', 'scheduledscript', 'clientscript', 'restlet', 'massupdatescript', 'bundleinstallationscript', 'workflowactionscript', or 'portlet' to load script records.</li>
 *     <li>set the type parameter to 'scriptdeployment' to load script deployment records.</li>
 * </ul>
 * @param {String} type [required] - The record internal ID name. This parameter is case-insensitive. In the NetSuite Help Center, see SuiteScript Supported Records. Use the values listed in the column �Record Internal ID�.
 * @param {Number} id [required] - internalId for the record, for example 555 or 78.
 * @param {Object} initializeValues [optional] - Contains an array of name/value pairs of defaults to be used during record initialization. For a list of record initialization types and the values they can take, see Record Initialization Defaults in the NetSuite Help Center.
 * @returns {nlobjRecord} An nlobjRecord object of an existing NetSuite record. This function returns the record object <strong>exactly</strong> as the record appears in the system. Therefore, in beforeLoad user event scripts, if you attempt to change a field and load the record simultaneously, the change will not take effect.
 * @throws SSS_INVALID_RECORD_TYPE
 * @throws SSS_TYPE_ARG_REQD
 * @throws SSS_INVALID_INTERNAL_ID
 * @throws SSS_ID_ARG_REQD
 */
function nlapiLoadRecord(type, id, initializeValues) { };

/**
 * Loads an existing saved search. The saved search could have been created using the UI, or created using nlapiCreateSearch(type, filters, columns) in conjunction with nlobjSearch.saveSearch(title, scriptId).
 * <p>Executing this API consumes 5 governance units.
 * @param {String} type [optional] - The record internal ID of the record type you are searching (for example, customer|lead|prospect|partner|vendor|contact). This parameter is case-insensitive. For a list of internal IDs, in the NetSuite Help Center see SuiteScript Supported Records.
 * @param {String} id [required] - The internal ID or script ID of the saved search. The script ID of the saved search is required, regardless of whether you specify the search type. If you do not specify the search type, you must set type to <strong>null</strong> and then set the script/search ID. See Example 3 for more details.
 * @returns {nlobjSearch} nlobjSearch
 * @since Version 2012.1
 */
function nlapiLoadSearch(type, id) { };

/**
 * This API is supported in all server-side and record-level (global) client scripts.
 * <p>Use this API to log an entry on the Execution Log subtab. The Execution Log subtab appears on the Script Deployment page for a script. See Using the Script Execution Log to learn more about writing logs to the Execution Log subtab.
 * <p>The log type argument is used in conjunction with the Log Level field on the Script Deployment to determine whether to log an entry on the Execution Log subtab. If a log level is defined on a Script Deployment, then only nlapiLogExecution calls with a log type equal to or greater than this log level will be logged. This is useful during the debugging of a script or for providing useful execution notes for auditing or tracking purposes. See Setting Script Execution Log Levels for more information using the Log Level field.
 * <p>Important: Be aware that NetSuite governs the amount of logging that can be done by a company in any given 60 minute time period. For complete details, see Governance on Script Logging.
 * <p>Also note that if the script's deployment status is set to Released, then the default Log Level is ERROR. If the status is set to Testing, the default Log Level is DEBUG.
 * @param {String} type [required] - One of the following log types:
 * <ul>
 *     <li>DEBUG</li>
 *     <li>AUDIT</li>
 *     <li>ERROR</li>
 *     <li>EMERGENCY</li>
 * </ul>
 * @param {String} title [optional] - A title used to organize log entries (max length: 99 characters). If you set title to null or empty string (''), you will see the word �Untitled� appear in your log entry.
 * @param {String} details [optional] - The details of the log entry (max length: 3999 characters)
 * @throws SSS_MISSING_REQD_ARGUMENT - if no value is specified for title.
 * @returns {Void}
 */
function nlapiLogExecution(type, title, details) { };

/**
 * Performs a search for one or more body fields on a record. This function supports joined-field lookups. Note that the notation for joined fields is: join_id.field_name
 * @param {String} type [required] - The record internal ID name. In the NetSuite Help Center, see SuiteScript Supported Records. Record IDs are listed in the �Record Internal ID� column.
 * @param {Number} id [required] - The internalId for the record, for example 777 or 87.
 * @param {String} [required] - Sets an array of column/field names to look up, or a single column/field name. The fields parameter can also be set to reference joined fields.
 * @param {Boolean} text [optional] - If not set, this argument defaults to false and the internal ID of the drop-down field is returned. If set to true, this argument returns the UI display name for this field or fields (valid only for SELECT|IMAGE|DOCUMENT fields).
 * @returns {String} A single value (or text) or an associative Array of field name -> value (or text) pairs depending on the field's argument.
 */
function nlapiLookupField(type, id, fields, text) { };

/**
 * <strong>THIS API HAS BEEN DEPRECATED</strong>
 * <p>This API is deprecated as of NetSuite Version 2015 Release 1. However, it continues to be supported. This function will not be enhanced in future versions of NetSuite.
 * <p>Important: This API only supports CRMSDK templates. CRMSDK templates are deprecated as of Version 2015 Release 1. You can convert your existing CRMSDK templates to scriptable templates within the UI. See Converting CRMSDK Templates to Scriptable Templates for addition information.Scriptable templates are not supported with nlapiMergeRecord. Once your CRMSDK templates are converted, update all applicable scripts with nlapiCreateEmailMerger(templateId), nlobjEmailMerger, and nlobjMergeResult(). Use nlapiCreateEmailMerger(templateId) as your starting point.
 */
function nlapiMergeRecord(id, baseType, baseId, altType, altId, fields) { };

/**
 * <strong>THIS API HAS BEEN DEPRECATED</strong>
 * <p>This API is deprecated as of NetSuite Version 2008 Release 1. However, it continues to be supported. This function will not be enhanced in future versions of NetSuite.
 * <p>Important: This API only supports CRMSDK templates. CRMSDK templates are deprecated as of Version 2015 Release 1. You can convert your existing CRMSDK templates to scriptable templates within the UI. See Converting CRMSDK Templates to Scriptable Templates for addition information.Scriptable templates are not supported with nlapiMergeRecord. Once your CRMSDK templates are converted, update all applicable scripts with nlapiCreateEmailMerger(templateId), nlobjEmailMerger, and nlobjMergeResult(). Use nlapiCreateEmailMerger(templateId) as your starting point.
 */
function nlapiMergeTemplate(id, baseType, baseId, altType, altId, fields) { };

/**
 * Use this API to generate a new OAuth token for a user. Currently this API can be called from portlet scripts, user event scripts, and Suitelets <strong>only</strong>. This API consumes 20 usage units per call.
 * <p>Note that you must have the SuiteSignOn feature enabled in your account before you can use SuiteSignOn functionality. (To enable these features, go to Setup > Company > Enable Features. On the SuiteCloud tab, select the web services check box and the SuiteSignOn check box, then click Save.)
 * <p>Important: For complete details on NetSuite's SuiteSignOn feature, see the SuiteSignOn Guide in the NetSuite Help Center.
 * @param {String} id [required] - The custom scriptId specified on the SuiteSignOn record (see figure). NetSuite recommends you create a custom scriptId for each SuiteSignOn record to avoid naming conflicts should you decide use SuiteBundler to deploy your scripts into other accounts.
 * If you do not create a custom scriptId, a system-generated ID will be generated for you once the SuiteSignOn record is saved. You can also use the system-generated ID as the id value.
 * To see a list of IDs for all SuiteSignOn records, go to the SuiteSignOn list page (Setup > Integration > SuiteSignOn).
 * @returns {String} URL, OAuth token, and any integration variables as a string
 * @throws SSS_SUITESIGNON_NOT_CONFIGURED
 * @throws SSS_INVALID_SUITESIGNON
 * @since Version 2009.2
 */
function nlapiOutboundSSO(id) { };

/**
 * Returns an nlobjFile object containing the PDF or HTML document. This API is supported in user event, scheduled, and Suitelet scripts.
 * <p>There are two primary use cases for nlapiPrintRecord:
 * <p>Important: nlapiPrintRecord is <strong>not</strong> supported in client scripting. This is a server-side-only API. Also note that this function does not send transactions or statements to a printer to be printed. It also does not launch Adobe Acrobat if the mode specified is PDF. If the Advanced PDF/HTML Templates feature is enabled in your account, this function supports the use of advanced templates. If you associate an advanced template with the custom form saved for a transaction and use this API to print the transaction, the advanced template is used to format the printed transaction. For details about this feature, see Advanced PDF/HTML Templates (Beta).
 * @param {String} type [required] - Print operation type. Can be any of the following:
 * <ul>
 *     <li>TRANSACTION</li>
 *     <li>STATEMENT</li>
 *     <li>PACKINGSLIP</li>
 *     <li>PICKINGTICKET</li>
 *     <li>BILLOFMATERIAL</li>
 * </ul>
 * @param {Number} id [required] - The internal ID of the transaction or statement being printed
 * @param {String} mode [optional] - The output type: PDF|HTML|DEFAULT. DEFAULT uses the user/company preference for print output
 * @param {Object} properties [optional] - Name/value pairs used to configure the print operation.
 * <ul>
 *     <li>TRANSACTION: formnumber</li>
 *     <li>STATEMENT: openonly (T|F), startdate, statementdate, formnumber</li>
 *     <li>PACKINGSLIP: formnumber, itemfulfillment</li>
 *     <li>PICKINGTICKET: formnumber, shipgroup, location</li>
 * </ul>
 * @returns {nlobjFile} nlobjFile object
 * @since Version 2008.1
 */
function nlapiPrintRecord(type, id, mode, properties) { };

/**
 * Makes a server call in order to refresh staticlist (read-only) sublists. For inlineeditor or editor sublists, it simply redraws the sublist. This API does not do anything for sublists of type list.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Void}
 */
function nlapiRefreshLineItems(type) { };

/**
 * Causes a FORM type nlobjPortlet to immediately reload.
 * <p>This API is available within a client SuiteScript associated with a custom FORM portlet, or from JavaScript event handlers attached to portlet elements. This API cannot be called directly from within a FORM portlet script.
 * @returns {Void}
 * @since Version 2011.1
 */
function nlapiRefreshPortlet() { };

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a <strong>sublist</strong> field on the parent record.
 * <p>Important: Client scripts deployed on the timesheet record cannot remove time entry subrecords. This API is supported in client scripts for other subrecords exposed to SuiteScript, but not for time entry.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {Void}
 * @since Version 2011.2
 */
function nlapiRemoveCurrentLineItemSubrecord(sublist, fldname) { };

/**
 * Removes the currently selected line in a sublist. Supported in client scripts, user event scripts, and Suitelets.
 * <p>Important: For user event scripts and Suitelets, you must use the line parameter to select the line item. Do not use the line parameter in client scripts.
 * @returns {Void}
 */
function nlapiRemoveLineItem(type, line) { };

/**
 * Removes a single select option from a select or multiselect line item field added through a script
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the scripted field
 * @param {String} value [required] - The value of the select option to be removed or null to delete all the options (kr - where you;ve put string|int for other CSS values, just change to string)
 * @returns {Void}
 */
function nlapiRemoveLineItemOption(type, fldnam, value) { };

/**
 * Removes a single select option from a select or multiselect field added via script. Note that this API call can only be used on select/multiselect fields that are added via the UI Objects API (for example on Suitelets or beforeLoad user event scripts).
 * @param {String} fldnam - The name of the scripted field
 * @param {String} value - The value of the select option to be removed or null to delete all the options
 * @returns {Void}
 */
function nlapiRemoveSelectOption(fldnam, value) { };

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a <strong>body</strong> field on the parent record.
 * <p>This API is currently used only in the context of the  / Numbered Inventory feature. For information, see Using SuiteScript with  / Numbered Inventory Management. Also see Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {Void}
 * @since Version 2011.2
 */
function nlapiRemoveSubrecord(fldname) { };

/**
 * <p>Important: There are two �versions� of this API: a client-side version and a server-side version. When you execute this API in a server call, there is no <strong>callback</strong> parameter. Therefore, the function signature in a server-side call is nlapiRequestURL(url, postdata, headers, httpMethod). When you execute this API in a client script, the function signature is nlapiRequestURL(url, postdata, headers, callback, httpMethod).
 * <p>Requests an HTTP(s) URL (internal or external). Note a timeout occurs if the initial connection takes > 5 seconds and/or the request takes > 45 to respond.
 * <p>nlapiRequestURL automatically encodes binary content using base64 representation, since JavaScript is a character-based language with no support for binary types. This means you can take the contents returned (i.e. nlobjServerResponse.getBody()) and save them in the NetSuite file cabinet as a file or stream them directly to a response.
 * <p>Also note that if you call nlapiRequestURL, passing in the header with a content type, NetSuite respects the following types:
 * <ul>
 *     <li>all text media types (types starting with �text/�)</li>
 *     <li>"application/json"</li>
 *     <li>"application/vnd.maxmind.com-country+json"</li>
 *     <li>"application/xml"</li>
 *     <li>"application/soap+xml"</li>
 *     <li>"application/xhtml+xml"</li>
 *     <li>"application/atom+xml"</li>
 * </ul>
 * <p>Otherwise, NetSuite will overwrite the content type with our default type as if the type had not been specified. NetSuite default types are:
 * <ul>
 *     <li>"text/xml; charset=UTF-8"</li>
 *     <li>"application/x-www-form-urlencoded; charset=UTF-8"</li>
 * </ul>
 * <p>Additionally, nlapiRequestURL calls from the server do not include the current user's session information. This means you can only use this API to request Suitelets that are set to <strong>available without login</strong> using the external URL.
 * <p>Usage metering allowed is 10 units. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @param {String} url [required] - The HTTP(s) URL being requested - (fully qualified unless NetSuite page)
 * @param {String|Object} postdata [optional] - Body used for a POST request. It can either be an object of form parameters or a string. If set to null, then a GET request is used.
 * @param {Object} headers [optional] - An object of header and header value pairs.
 * @param {function} callback [optional] - A callback function called when the request is completed (<strong>client SuiteScript only</strong> ). 						IMPORTANT: There is NO <strong>callback</strong> parameter when you use nlapiRequestURL in a server-side call. In a server-side call, 						<strong>httpMethod</strong> becomes the fourth parameter for this API, as in: nlapiRequestURL(url, postdata, headers, httpMethod).
 * If you specifiy a callback a client-side SuiteScript, the request is processed asynchronously, and once it is processed, the callback is called/invoked.
 * If you know your request may take a long time and you do not want to impair user experience, it is recommended that you set the callback function within nlapiRequestURL so that the request is processed asynchronously. If a callback function is specified, then the response will be passed, instead to the callback function, upon completion.
 * However, if validation is needed, nlapiRequestURL should run synchronously and the callback function should be omitted from nlapiRequestURL. For example:
 * @param {String} httpMethod [optional] - Specify the appropriate http method to use for your integration. IMPORTANT: When using nlapiRequestURL in a server-side script, <strong>httpMethod</strong> becomes the fourth parameter. In other words, the function signature in a server-side script is nlapiRequestURL(url, postdata, headers, httpMethod).
 * Supported http methods are HEAD, DELETE and PUT. This parameter allows for easier integration with external RESTful services using the standard REST functions. Note that if the httpMethod parameter is empty or not specified, this behavior is followed: the method is POST if postdata is not empty. The method is GET if it is.
 * Be aware that the httpMethod parameter overrides, so you can specify GET and specify postdata, NetSuite will do a GET and ignore the postdata.
 * @returns {nlobjResponse} nlobjResponse object (<strong>or</strong> void if a callback function has been specified)
 * @throws SSS_REQUEST_TIME_EXCEEDED � if the request exceeds the 45 second timeout period
 * @throws SSS_INVALID_URL (with �Invalid URL � Connection Closed� message) � if the connection is closed due to an invalid URL, including those containing white space
 * @throws SSS_CONNECTION_CLOSED (with �Connection Closed� message) � if the connection is closed because the server associated with the URL is unresponsive
 * @throws SSS_CONNECTION_TIME_OUT � if the initial connection exceeds the 5 second timeout period
 */
function nlapiRequestURL(url, postdata, headers, callback, httpMethod) { };

/**
 * Allows you to send credentials outside of NetSuite. This API securely accesses a handle to credentials that users specify in a NetSuite credential field.
 * <p>Note a timeout occurs if the internal connections takes > 5 seconds and/or the request takes> 45 seconds to respond.
 * <p>Also note that if you call nlapiRequestURLWithCredentials, passing in the header with a content type, NetSuite respects only the following two types:
 * <ul>
 *     <li>"application/json"</li>
 *     <li>"application/soap+xml"</li>
 * </ul>
 * <p>Otherwise, NetSuite will overwrite the content type with our default type as if the type had not been specified. NetSuite default types are:
 * <ul>
 *     <li>"text/xml; charset=UTF-8"</li>
 *     <li>"application/x-www-form-urlencoded; charset=UTF-8"</li>
 * </ul>
 * <p>You can Base64 any part of the request by wrapping any text in $base64(<input text>). NetSuite will then Base64 encode the values in <input text>. This can be done in the value of a header, in the post body, or url. See Example 2.
 * <p>If you require additional encryption or encoding on the request string, you can pass an nlobjCredentialBuilder object to nlapiRequestURLWithCredentials in the url, postdata or headers argument. The nlobjCredentialBuilder(string, domainString) constructor takes in a user defined string, that can include an embedded globally unique string (GUID), and your URL's host name. nlobjCredentialBuilder includes six string transformation methods: two encryption methods for SHA-1 and SHA-256 encryption, two encoding methods for Base64 and UTF8 encoding, a character replacement method, and a string appending method. See Example 3.
 * <p>Usage metering allowed for this API is 10 units.
 * @param {String} credentials [required � see Note] - List of credential handles. This API does not know where you have stored the data, it only knows the credentials to use by handle. Therefore, if you have multiple credentials for a single call, you will need a list. The handles are 32 byte, globally unique strings (GUIDs).
 * @param {String|nlobjCredentialBuilderObject} url [required] - The HTTP(s) URL being requested - (fully qualified unless NetSuite page).
 * @param {String|nlobjCredentialBuilderObject|Object} postdata [optional] - Body used for a POST request. It can be a string, an nlobjCredentialBuilder object, an associative array of form parameter pairs, or an associative array of form parameter and nlobjCredentialBuilder object pairs. If set to null, then a GET request is used.
 * @param {nlobjCredentialBuilderObject|Object} headers [optional] - Can be an nlobjCredentialBuilder object, an associative array of header and header value pairs, or an associative array of header and nlobjCredentialBuilder object pairs.
 * @param {String} httpMethod [optional] - Specify the appropriate http method to use for your integration. Supported http methods are HEAD, DELETE and PUT. This parameter allows for easier integration with external RESTful services using the standard REST functions. Note that if the httpMethod parameter is empty or not specified, this behavior is followed: the method is POST if postdata is not empty. The method is GET if it is.
 * Be aware that the httpMethod parameter overrides, so you can specify GET and specify postdata, NetSuite will do a GET and ignore the postdata.
 * @returns {nlobjResponse} nlobjResponse object
 * @since Version 2012.1
 */
function nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod) { };

/**
 * Causes a custom form portlet (nlobjPortlet) to be resized.
 * <p>Custom form portlets are embedded in <iframe> elements (most other portlets are embedded in <div> elements. Browsers do not automatically resize <iframe> elements to fit their contents. If you change your custom form portlet content so that it no longer fits inside the portlet borders (whether the border is too small or too large), use the nlapiResizePortlet API to resize the portlet to fit your content.
 * <p>This API is supported in client SuiteScripts associated with custom form portlets, or in JavaScript event handlers attached to portlet elements. This API cannot be called directly from within a FORM portlet script.
 * @returns {Void}
 * @since Version 2011.1
 */
function nlapiResizePortlet() { };

/**
 * Creates a URL on-the-fly by passing URL parameters from within your SuiteScript. For example, when creating a SuiteScript Portlet script, you may want to create and display the record URLs for each record returned in a search.
 * <p>When creating the URL, you can use either the RECORD reference as retrieved in a search result or a known TASKLINK. Each page in NetSuite has a unique Tasklink Id associated with it for a given record type. Refer to the SuiteScript Reference Guide for a list of available NetSuite tasklinks.
 * <p>This API is supported in client, user event, scheduled, portlet, Suitelet, and RESTlet scripts.
 * @param {String} type [required] - The base type for this resource. These types include:
 * <ul>
 *     <li><strong>RECORD</strong> � Record Type</li>
 *     <li><strong>TASKLINK</strong> � Task Link</li>
 *     <li><strong>SUITELET</strong> � Suitelet</li>
 *     <li><strong>RESTLET</strong> � RESTlet</li>
 * </ul>
 * @param {String} identifier [required] - The primary id for this resource (recordType for RECORD, scriptId for SUITELET)
 * @param {String} id [optional] - The secondary id for this resource (recordId for RECORD, deploymentId for SUITELET). Important: This argument is required if type has been set to <strong>RECORD</strong> and you are trying to resolve to a specific NetSuite record. In the scenario, you must set id to the id of the target record.
 * @param {String|Boolean} displayMode [optional] - If the type argument is set to <strong>RECORD</strong>, set displayMode to either <strong>VIEW</strong> or <strong>EDIT</strong> to return a URL for the record in EDIT mode or VIEW mode. Note that even for RECORD calls, the displayMode argument is optional. The default value is VIEW.
 * @returns {String} Depending on the values specified for the type and displayMode arguments, returns URL string to an internal NetSuite resource <strong>or</strong> an external/internal URL to a Suitelet or RESTlet.
 * @throws SSS_INVALID_URL_CATEGORY
 * @throws SSS_CATEGORY_ARG_REQD
 * @throws SSS_INVALID_TASK_ID
 * @throws SSS_TASK_ID_REQD
 * @throws SSS_INVALID_INTERNAL_ID
 * @throws SSS_INVALID_EDITMODE_ARG
 */
function nlapiResolveURL(type, identifier, id, displayMode) { };

/**
 * A call to this API places a scheduled script into the NetSuite scheduling queue. For this to work, the scheduled script must have a status of <strong>Not Scheduled</strong> on the Script Deployment page. If the script's status is set to <strong>Testing</strong> on the Script Deployment page, the API will not place the script into the scheduling queue.
 * <p>If the deployment status on the Script Deployment page is set to <strong>Scheduled</strong>, the script will be placed into the queue according to the time(s) specified on the Script Deployment page.
 * <p>The nlapiScheduleScript API consumes 20 units per call. This API is supported in user event, portlet, scheduled, and Suitelet scripts.
 * <p>Important: There is <strong>no</strong> unit metering if you are re-queueing the current script (see Example 1 - Rescheduling a Script). Note, however, nlapiScheduleScript is still 20 units per call if you are trying to schedule <strong>other</strong> scripts.
 * <p>One or more calls to nlapiScheduleScript can be made from Suitelet, user event, and portlet scripts. Note that you can <strong>also</strong> call nlapiScheduleScript from within a <strong>scheduled script</strong> to:
 * @param {String|Number} scriptId [required] - The script internalId or custom scriptId
 * @param {String|Number} deployId [optional] - The deployment internal ID or script ID. If empty, the first �free� deployment will be used. Free means that the script's deployment status appears as Not Scheduled or Completed. If there are multiple �free� scripts, the NetSuite scheduler will take the first free script that appears in the scheduling queue.
 * @param {Object} params [optional] - Object of name/values used in this schedule script instance - used to override the script parameters values for this execution.
 * Note that name values are the script parameter internal IDs. If you are not familiar with what a script parameter is in the context of SuiteScript, see Creating Script Parameters Overview in the NetSuite Help Center.
 * @returns {String} A string whose value is QUEUED if the script was successfully queued by this call, or it returns the script's current status. Valid status values are:
 */
function nlapiScheduleScript(scriptId, deployId, params) { };

/**
 * Performs a search for duplicate records based on the account's Duplicate Detection configuration. Note that this API only works for records that support duplicate record detection. These records include customers, leads, prospects, contacts, partners, and vendors.
 * <p>This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @param {String} type [required] - The record internal ID name you are checking duplicates for (for example, customer|lead|prospect|partner|vendor|contact). In the NetSuite Help Center, see SuiteScript Supported Records.
 * @param {Array} fields [optional] - The internal ID names of the fields used to detect duplicate (for example, companyname|email|name|phone|address1|city|state|zipcode). Depending on the use case, fields may or may not be a required argument. If you are searching for duplicates based on the fields that appear on a certain record type, fields would be a <strong>required</strong> argument. If you are searching for the duplicate of a specific record (of a specifed type), you would set id and not set fields.
 * @param {Number} id [optional] - internalId of existing record. Depending on the use case, id may or may not be a required argument. If you are searching for a specific record of a specified type, you must set id. If you are searching for duplicates based on field names, you will not set id ; you will set fields.
 * @returns {nlobjSearchResult[]} - An Array of nlobjSearchResult objects corresponding to the duplicate records. Important: Results are limited to 1000 records. Note that if there are no search results, null is returned.
 */
function nlapiSearchDuplicate(type, fields, id) { };

/**
 * Performs a global search against a single keyword or multiple keywords. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts. Usage metering allowed for nlapiSearchGlobal is 10 units.
 * @param {String} keywords [required] - Global search keywords string or expression
 * @returns {nlobjSearchResult[]} An Array of nlobjSearchResult objects containing the following four columns: name, type (as shown in the UI), info1, and info2.
 */
function nlapiSearchGlobal(keywords) { };

/**
 * Performs a search using a set of criteria (your search filters) and columns (the results). Alternatively, you can use this API to execute an existing saved search. Results are limited to 1000 rows. Also note that in search/lookup operations, long text fields are truncated at 4,000 characters. Usage metering allowed for nlapiSearchRecord is 10 units.
 * <p>This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * <p>You can extract the desired information from the search results using the methods available on the returned nlobjSearchResult object.
 * <p>Note that results returned by nlapiSearchRecord are <strong>not sortable</strong>. However, you can accomplish sorting using either of the following methods:
 * @param {String} type [optional] - The record internal ID of the record type you are searching. For a list of internal IDs, in the NetSuite Help Center see SuiteScript Supported Records.
 * @param {Number|String} id [optional] - The internalId or custom scriptId for the saved search. To obtain the internalId, go to Lists > Search > Saved Searches. The internalId appears in the Internal ID column. If you have created a custom scriptId when building your search, this ID will appear in the ID column.
 * Note the following about how this argument is validated:
 * <ul>
 *     <li>If the internalId or scriptId is valid, the saved search is executed (assuming the search has no user or role restrictions applied to it).</li>
 *     <li>If you do not specify the search type, the id parameter <strong>becomes REQUIRED</strong>. In this case, you must set type to <strong>null</strong> and then specify the scriptId for the saved search. See Example 3 for an example of when and type you might create this type of script.</li>
 *     <li>If there is no internalId or scriptId (null or empty string or left out altogether), an ad-hoc search will be executed and this argument will be ignored.</li>
 *     <li>If the internalId or scriptId is invalid, the following user error is thrown: That search or mass updates does not exist.</li>
 * </ul>
 * @param {nlobjSearchFilter|Array|Array} filters [optional] - A single nlobjSearchFilter object - <strong>or</strong> - an array of nlobjSearchFilter objects - <strong>or</strong> - a search filter expression.
 * @param {nlobjSearchColumn|Array} columns [optional] - A single nlobjSearchColumn object - <strong>or</strong> - an array of nlobjSearchColumn objects. Note that you can further filter the returned saved search by passing additional search return column values.
 * @returns {nlobjSearchResult[]} - An array of nlobjSearchResult objects corresponding to the searched records.
 * @throws SSS_INVALID_RECORD_TYPE
 * @throws SSS_TYPE_ARG_REQD
 * @throws SSS_INVALID_SRCH_ID
 * @throws SSS_INVALID_SRCH_FILTER
 * @throws SSS_INVALID_SRCH_FILTER_JOIN
 * @throws SSS_INVALID_SRCH_OPERATOR
 * @throws SSS_INVALID_SRCH_COL_NAME
 * @throws SSS_INVALID_SRCH_COL_JOIN
 * @throws SSS_INVALID_SRCH_FILTER_EXPR
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_DANGLING_OP
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_OBJ_TYPE
 * @throws SSS_INVALID_SRCH_FILTER_EXPR_PAREN_DEPTH
 * @throws SSS_INVALID_SRCH_FILTER_LIST_PARENS
 * @throws SSS_INVALID_SRCH_FILTER_LIST_TERM
 */
function nlapiSearchRecord(type, id, filters, columns) { };

/**
 * Selects an existing line in a sublist
 * @param {String} type - [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {Number} linenum - [required] - The line number to select. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {Void}
 */
function nlapiSelectLineItem(type, linenum) { };

/**
 * Use this function if you want to set a value on a sublist line that does not currently exist. This API is the UI equivalent of clicking a sublist tab (for example the Items sublist tab) so that you can then add a new line (or item, in this example) to the sublist.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @returns {Void}
 */
function nlapiSelectNewLineItem(type) { };

/**
 * Selects a node from an XML document using an XPath expression
 * @param {Node} node [required] - XML node being queried
 * @param {String} xpath [required] - XPath expression used to query node
 * @returns {Node} Node
 */
function nlapiSelectNode(node, xpath) { };

/**
 * Selects an array of nodes from an XML document using an XPath expression
 * @param {Node} node [required] - XML node being queried
 * @param {String} xpath [required] - XPath expression used to query node
 * @returns {Array} Node[]
 */
function nlapiSelectNodes(node, xpath) { };

/**
 * Selects a value from an XML document using an XPath expression
 * @param {Node} node [required] - XML node being queried
 * @param {String} xpath [required] - XPath expression used to query node
 * @returns {String} String
 */
function nlapiSelectValue(node, xpath) { };

/**
 * Selects an array of values from an XML document using an XPath expression
 * @param {Node} node [required] - XML node being queried
 * @param {String} path [required] - XPath expression used to query node
 * @returns {Array} String[]
 */
function nlapiSelectValues(node, path) { };

/**
 * Use this function to send a single �on-demand� campaign email to a specified recipient and return a campaign response ID to track the email. Note that this function works in conjunction with the Lead Nurturing (campaigndrip) sublist only; it does not work with the E-mail (campaignemail) sublist.
 * <p>Usage metering allowed is 10 units. This API is supported in user event, scheduled, Suitelet, mass update, and workflow action scripts.
 * @param {Number} campaigneventid [required] - The internal ID of the campaign event. The campaign must be of type <strong>campaigndrip</strong>, which is referred to as Lead Nurturing in the UI.
 * @param {Number} recipientid [required] - The internal ID of the recipient. Note that the recipient must have an email.
 * @returns {Number} A campaign response ID (tracking code) as an integer, or -1 if the send fails.
 * @since Version 2010.1
 */
function nlapiSendCampaignEmail(campaigneventid, recipientid) { };

/**
 * nlapiSendEmail sends and records outgoing email to an individual or to a group of individuals. You can use nlapiSendEmail in the following ways:
 * <ul>
 *     <li>To send bulk email.</li>
 *     <li>To send important email, for which you need bounceback notifications when the email is not successfully delivered. To do this, set notifySenderOnBounce to true. Note that when this parameter is used, the maximum number of total recipients (recipient + cc + bcc) allowed is 10. In addition, the governance is increased to 20 usage units..</li>
 *     <li>To attach emails to custom records. To do this, reference the custom record by either its internalId or scriptId. You can send multiple attachments of any media type with this function. Email messages have a 15MB size limit. The total size of the message plus any attachments must be 15MB or less. The size of any individual�attachment may not exceed 5MB.</li>
 *     <li>To send an email message from one address and to receive replies at another address. To do this, use the replyTo parameter.</li>
 * </ul>
 * <p>You can use NetSuite email templates to construct the body of the email using nlapiMergeRecord(id, baseType, baseId, altType, altId, fields), which performs a merge operation using a NetSuite email template and up to two business records. Regardless of whether you pass a string or use nlapiMergeRecord to construct the body, SuiteScript formats the body of the email in either plain text or HTML. If HTML tags are present, the message is formatted as HTML. Otherwise, the message is formatted in plain text.
 * <p>This API is supported in all client and server-side script types. When notifySenderOnBounce is not used, the governance for this function is 10 usage units. When notifySenderOnBounce is set to true, the governance for nlapiSendEmail increases from 10 to 20 usage units.
 * @param {Number} author [required] - The internalId of an employee record (this is the sender). To get the internal ID for an employee, go to Lists > Employees > Employees (you must have admin access to the account in order to access the Employees list page). The employee's ID will appear in the Internal ID column on the list page. Note that you must have the <strong>Show Internal IDs</strong> preference enabled in your account. To enable this preference, go to Home > Set Preferences > General tab > under Defaults > click <strong>Show Internal IDs</strong> > click <strong>Save</strong>.
 * @param {String|Number} recipient [required] - Set one of the following for this parameter:
 * <ul>
 *     <li>A single external email address</li>
 *     <li>A list of external addresses (comma separated)
 *     <br><strong>Important:</strong> If multiple recipients are passed, only the first recipient displays on the Communication tab (under the Recipient column). This is due to the design of the UI. To view all recipients, click <strong>View</strong> to open the Message record. The complete list of recipients displays on the Recipients tab.
 *     <br><strong>Important:</strong> When notifySenderOnBounce is true, the maximum number of total recipients (recipient + cc + bcc) allowed is 10. </li>
 *     <li>The internal ID of a single entity in NetSuite. Note that if the internal ID of the recipient entity record is used, the email message is automatically attached to the entity record.</li>
 * </ul>
 * @param {String} subject [required] - Subject of the outgoing mail. A JavaScript exception is thrown if this argument is left blank, set to null, or set to an empty string.
 * @param {String|Array} body object returned from nlapiMergeRecord} [required] - Body of the outgoing email.  A JavaScript exception is thrown if this argument is left blank, set to null, or set to an empty string.
 * @param {String|Array} cc [optional] - An array of email addresses or a single email address to copy
 * @param {String|Array} bcc [optional] - An array of email addresses or a single email address to blind copy.
 * @param {Object} records [optional] - An associative array of internal records to associate/attach this email with. The following table lists valid keys -> values.
 * <table>
 *     <tr>
 *         <th>Key</th>
 *         <th>Value (examples)</th>
 *     </tr>
 *     <tr>
 *         <td><strong>transaction</strong>
 *         <br>(use for transaction and opportunity record types)</td>
 *         <td>records[' <strong>transaction</strong> '] = ' <strong>1000</strong> ';</td>
 *     </tr>
 *     <tr>
 *         <td><strong>activity</strong>
 *         <br>(use for Case and Campaign record types)</td>
 *         <td>records[' <strong>activity</strong> '] = ' <strong>50</strong> ';</td>
 *     </tr>
 *     <tr>
 *         <td><strong>entity</strong>
 *         <br>(use for all Entity record types, for example, customer, contact, etc.)</td>
 *         <td>records[' <strong>entity</strong> '] = ' <strong>555</strong> ';</td>
 *     </tr>
 *     <tr>
 *         <td><strong>record</strong>
 *         <br>(custom record internalId - for custom records you must also specify both the record ID and the record type ID)</td>
 *         <td>records['record'] = '3';</td>
 *     </tr>
 *     <tr>
 *         <td><strong>recordtype</strong>
 *         <br>(custom recordtype internalId or scriptId)</td>
 *         <td>records[' <strong>recordtype</strong> '] = ' <strong>customrecord11</strong> ';</td>
 *     </tr>
 * </table>
 * @param {nlobjFile|Array} attachments [optional] - A single nlobjFile object - <strong>or</strong> - an array of nlobjFile objects to attach to outgoing email ( <strong>not</strong> supported in Client SuiteScript).
 * @param {Boolean} notifySenderOnBounce [optional] � A value of true causes bounceback notifications to be sent to the original sender for each supplied recipient. Note that bounceback notification support is dependent upon the recipient's email server settings.
 * @param {Boolean} internalOnly [optional] �  A value of true sets a new message record as internal only. When a message record is set to internal only, customers do not see the message from the customer center.
 * @param {String} replyTo [optional]  �  The email address that appears in the reply-to header when an email is sent out.�If the recipient replies to the email, the value passed to replyTo is prepopulated in the To: field of the recipient's response.
 *  Set one of the following for this parameter:
 * <ul>
 *     <li>A single external email address</li>
 *     <li>A generic email address created by the plugin</li>
 * </ul>
 * @returns {Void}
 * @throws SSS_AUTHOR_MUST_BE_EMPLOYEE � Thrown when an invalid internal ID is passed for the author parameter.
 * @throws SSS_AUTHOR_REQD � Thrown when the author argument is left blank, set to null, or set to an empty string.
 * @throws SSS_INVALID_BCC_EMAIL � Thrown when an invalid email address is passed for the bcc parameter.
 * @throws SSS_INVALID_CC_EMAIL � Thrown when an invalid email address is passed for the cc parameter.
 * @throws SSS_INVALID_RECIPIENT_ID � Thrown when an invalid internal ID is passed for the recipient parameter.
 * @throws SSS_INVALID_REPLYTO_EMAIL � Thrown when an invalid email address is passed for the replyTo parameter.
 * @throws SSS_INVALID_TO_EMAIL � Thrown when an invalid email address is passed for the recipient parameter.
 * @throws SSS_MAXIMUM_NUMBER_RECIPIENTS_EXCEEDED � Thrown when notifySenderOnBounce is true and the total number of recipients (recipient + cc + bcc) exceeds 10.
 * @throws SSS_MISSING_REQD_ARG � Thrown when a required argument is left blank, set to null, or set to an empty string.
 * @throws SSS_RECIPIENT_REQD � Thrown when the recipient argument is left blank, set to null, or set to an empty string.
 */
function nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments, notifySenderOnBounce, internalOnly, replyTo) { };

/**
 * Sends and records an outgoing fax using the fax settings already defined in the user's account. This API is supported in client, user event, scheduled, portlet, and Suitelet scripts.
 * @param {Number} author [required] - InternalId of an employee record (this is the sender)
 * @param {String} recipient [required] - InternalId of the recipient entity -or- a free-form fax (if set to an internalId the fax will be saved)
 * @param {String} subject [required] - Subject of the outgoing fax
 * @param {String} body [optional] - Body of the outgoing fax
 * @param {Object} records [optional] - Name/value pairs of internal records to associate this fax with (if set, fax will be saved)
 * <ul>
 *     <li>transaction - transaction/opportunity internalid</li>
 *     <li>activity - case/campaign internalid</li>
 *     <li>entity - entity internalid</li>
 *     <li>record - custom record internalId</li>
 *     <li>recordtype - custom recordType internalId (or script id)</li>
 * </ul>
 * @param {nlobjFile} attachments [optional] - array of nlobjFile objects or a single nlobjFile object to attach to outgoing fax (not supported in Client SuiteScript)
 * @returns {Void}
 * @since Version 2008.1
 */
function nlapiSendFax(author, recipient, subject, body, records, attachments) { };

/**
 * This API sets the value of a datetime field on the currently selected line of a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 *
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiSetCurrentLineItemDateTimeValue(type, fieldId, dateTime, timeZone) { };

/**
 * This API is typically used in validate line functions to set the value of a given matrix sublist field before it has been added to the form. This API is supported in client and user event scripts. Also note that it should be used on matrix sublists only.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @param {String|Number} value [required] - The value the field is being set to.
 * @param {Boolean} firefieldchanged [optional] - If true, then the field change script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 * @since Version 2009.2
 */
function nlapiSetCurrentLineItemMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) { };

/**
 * Sets the value of a select field on the currently selected line using the display name. See also, Using the Fire Field Changed Parameter.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @param {String} text [required] - The display name associated with the value that the field is being set to
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetCurrentLineItemText(type, fldnam, text, firefieldchanged, synchronous) { };

/**
 * Sets the value of the given line-item field before it has been added to the form. Typically used in validate line functions. See also, Using the Fire Field Changed Parameter.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @param {String} value [required] - The value the field is being set to. Note: Check box fields take the values of T or F, not true or false.
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetCurrentLineItemValue(type, fldnam, value, firefieldchanged, synchronous) { };

/**
 * Sets the values for a multi-select sublist field. Note that like any other �set field� APIs, the values you use will be internal ID values. For example, rather than specifying 'Abe Simpson' as a customer value, you will use 232 or 88 or whatever the internal ID is for customer Abe Simpson.
 * <p>However, if you are using this API to set the serialnumber field on the Item sublist, you will set the text string of the actual serial number, for example 'serialnum1', 'serialnum2', and so on.
 * <p>This API is supported in client scripts only.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the multi-select sublist field being set.
 * @param {Array} values [required] - The values for the field.
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 * @since Version 2012.1
 */
function nlapiSetCurrentLineItemValues(type, fldnam, values, firefieldchanged, synchronous) { };

/**
 * This API sets the value of a datetime field. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiSetDateTimeValue(fieldId, dateTime, timeZone) { };

/**
 * @param {String} fldnam [required] � The internal ID of the field being hidden or displayed
 * @param {Boolean} showField [required] � A value of true displays a hidden field. A value of false hides the field.
 * @returns {Void}
 */
function nlapiSetFieldDisplay (fldnam, showField) { };

/**
 * Sets the value of a select field on the current record using the UI display name. This API can be used in user event <strong>beforeLoad</strong> scripts to initialize a field on new records or to initialize a non-stored field. (Non-stored fields are those that have the <strong>Store Value</strong> preference unchecked on the custom field page.)
 * <p>This function is available in client and user event scripts only.
 * @param {String} fldname [required] - The name of the field being set
 * @param {String} txt [required] - The display name associated with the value that the field is being set to
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetFieldText(fldname, txt, firefieldchanged, synchronous) { };

/**
 * Sets the values of a multi-select field on the current record using the UI display names. This function is available in client and user event scripts only.
 * @param {String} fldname [required] - The name of the field being set
 * @param {Array} txts [required] - The display names associated with the values that the field is being set to
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetFieldTexts (fldname, txts, firefieldchanged, synchronous) { };

/**
 * Sets the value of a given body field. This API can be used in user event <strong>beforeLoad</strong> scripts to initialize a field on new records or to initialize a non-stored field. (Non-stored fields are those that have the <strong>Store Value</strong> preference unchecked on the custom field page.)
 * <p>For client-side scripting, this API can be triggered by a <strong>PageInit</strong> client event trigger.
 * <p>This API is available in client and user event scripts only.
 * <p>Currently, you can use this function only to write to description or custom fields. To write to other fields, use the method described in �Example Adding Line Items to a Transaction�
 * @param {String} fldnam [required] - The internal ID name of the field being set
 * @param {String} value [required] - The value the field is being set to. Note: Check box fields take the values of T or F, not true or false.
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetFieldValue(fldnam, value, firefieldchanged, synchronous) { };

/**
 * Sets the value of a multiselect body field on a current record. This API can be used for user event <strong>beforeLoad</strong> scripts to initialize fields on new records or non-stored fields. (Non-stored fields are those that have the <strong>Store Value</strong> preference unchecked on the custom field page.
 * <p>For client-side scripting, this API can be triggered by a <strong>PageInit</strong> client event trigger.
 * <p>This API is available in client and user event scripts only.
 * @param {String} fldnam [required] - The internal ID name of the field being set
 * @param {String} value [required] - The value the field is being set to (Array).
 * @param {Boolean} firefieldchanged [optional] - If true, then the fieldchange script for that field is executed. If no value is provided, this argument defaults to true. ( Important: This parameter is available in client scripts only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 */
function nlapiSetFieldValues (fldnam, value, firefieldchanged, synchronous) { };

/**
 * This API sets the value of a datetime field on a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {Number} lineNum [required] � The line number for this field. Note the first line number on a sublist is 1 (not 0).
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 */
function nlapiSetLineItemDateTimeValue(type, fieldId, lineNum, dateTime, timeZone) { };

/**
 * Sets the value of a sublist field on the current, <strong>new</strong> record. This API can be used in beforeLoad user event scripts to initialize sublist line items, but only on <strong>new</strong> records and only on non-stored sublist fields. If you execute this API on an existing record, nothing will happen.
 * <p>Note that this API is supported in <strong>user event scripts</strong> only.
 * <p>This function can be used in client SuiteScript, but note that <strong>it is supported only on custom fields and the Description field</strong>. If you use this function to set the value of a standard, built-in line item field, the function will not execute.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is 1 (not 0).
 * @param {String} value [required] - The value the field is being set to
 * @returns {Void}
 */
function nlapiSetLineItemValue(type, fldnam, linenum, value) { };

/**
 * This API is used to set a header field in a matrix sublist. This API is supported in client and user event scripts. It is typically used in pageInit (client) and beforeLoad (user event) events. Also note that this API should be used on matrix sublists only.
 * <p>In the case of the Pricing sublist, this API is used to set the quantity levels that appear in the Qty fields (see figure). Note that you should use this API only if you have the Quantity Pricing feature enabled in your account, as these header fields appear only if this feature is enabled.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The name of the field being set. In the case of this API, the internal field ID will alway be price.
 * @param {String} value [required] - The value the field is being set to. Note: Check box fields take the values of T or F, not true or false.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @param {Boolean} firefieldchanged [optional] - If true, then the field change script for that field is executed. If no value is provided, this argument defaults to true. (Available in Client SuiteScript only). See Using the Fire Field Changed Parameter for more information.
 * @param {Boolean} synchronous [optional] - This parameter is relevant for client SuiteScripts only. In server scripts (such as user event scripts), this parameter will always execute as true.
 * In client scripts, if you do not set the value of synchronous, the default value is false, and the API executes asynchronously. If set to true, this API executes synchronously, which ensures a predictable script execution. Setting to true forces your client script to wait on any specified sourcing before continuing with the rest of the script.
 * @returns {Void}
 * @since Version 2009.2
 */
function nlapiSetMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) { };

/**
 * Creates a recovery point saving the state of the script's execution. When NetSuite resumes the execution of the script, it resumes the script at the specified recovery point. Also note that when the script is resumed, its governance units are reset. Be aware, however, all scheduled scripts have a 50 MB memory limit. For complete details on scheduled script memory limits, see Understanding Memory Usage in Scheduled Scripts.
 * <p>A typical implementation for this API might be as follows. Based on the status returned by nlapiSetRecoveryPoint, the script executes different logic.
 * <p>
 * <p>
 * <p>Note you can use nlapiSetRecoveryPoint in conjunction with nlapiYieldScript to effectively pause the script until a later time when it is more appropriate to run the script.
 * <p>Important: This API can only be called from scheduled scripts; calling this API from any other script type will result in an error.
 * <p>Important: Scripts that contain live references to files larger than 5MB must null the references before they call nlapiYieldScript or nlapiSetRecoveryPoint. If these references are not nulled, the script returns an SSS_FILE_OBJECT_NOT_SERIALIZABLE error. See Example � Nulling a reference to a file larger than 5MB for an example.
 * <p>Important: This API is not supported within JavaScript array iteration functions (for example, map, some, filter). JavaScript array iteration functions are designed to be executed as a whole. SuiteScript cannot yield in the middle of these control structures.
 * <p>The nlapiSetRecoveryPoint API consumes 100 units per call.
 * <p>For an overview of possible use cases for setting recovery points in your scheduled scripts, see Setting Recovery Points in Scheduled Scripts.
 * @returns Native Javascript Object
 */
function nlapiSetRecoveryPoint() { };

/**
 * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with <strong>custparam</strong> otherwise an SSS_INVALID_ARG error will be thrown.
 * <p>This API is supported in beforeLoad and synchronous afterSubmit user events; it is also supported in Suitelet scripts. Note that nlapiSetRedirectURL is ignored in beforeSubmit and asynchronous afterSubmit user events.
 * <p>You can use nlapiSetRedirectURL to customize navigation within NetSuite. In a user event script, you can use nlapiSetRedirectURL to send the user to a NetSuite page based on a specific user event. For example, under certain conditions you may choose to redirect the user to another NetSuite page or custom Suitelet to complete a workflow.
 * <p>If you redirect a user to a record, the record must first exist in NetSuite. If you want to redirect a user to a new record, you must first create and submit the record before redirecting them. You must also ensure that any required fields for the new record are populated before submitting the record.
 * @param {String} type [required] - The base type for this resource. The types include:
 * <ul>
 *     <li><strong>RECORD</strong> : Record type - - Note that when you set type to RECORD, and the third param ( id ) to null, the redirection is to the �create new� record page, not an existing record page.</li>
 *     <li><strong>TASKLINK</strong> : Tasklink</li>
 *     <li><strong>SUITELET</strong> : Suitelet</li>
 *     <li><strong>EXTERNAL</strong> : The URL of a Suitelet that is available <strong>externally</strong> (for example, Suitelets that have been set to �Available without Login� on the Script Deployment page)</li>
 * </ul>
 * @param {String} identifier [required] - The primary id for this resource (recordType for RECORD, scriptId for SUITELET, taskId for TASKLINK, url for EXTERNAL)
 * @param {String} id [optional]- The secondary id for this resource (recordId for RECORD, deploymentId for SUITELET). Important: This argument is <strong>required</strong> if type has been set to <strong>RECORD</strong> and you are trying to redirect to a specific NetSuite record. In the scenario, you must set id to the id of the target record.
 * @param {Boolean} editmode [optional] - For RECORD calls, this determines whether to return a URL for the record in edit mode or view mode. If set to true, returns the URL to an existing record in edit mode. Important: The values for this parameter can be true or false, not T or F.
 * @param {Object} parameters [optional] - An associative array of additional URL parameters. Important: All parameters must be prefixed with custparam.
 * @returns {Void}
 * @throws SSS_INVALID_ARG
 * @throws SSS_INVALID_URL_CATEGORY
 * @throws SSS_CATEGORY_ARG_REQD
 * @throws SSS_INVALID_TASK_ID
 * @throws SSS_TASK_ID_REQD
 * @throws SSS_INVALID_INTERNAL_ID
 * @throws SSS_INVALID_EDITMODE_ARG
 */
function nlapiSetRedirectURL(type, identifier, id, editmode, parameters) { };

/**
 * Converts a string to a date object, formats the date object based on the format argument passed in, and then returns the formatted date object. Be aware that leading zeroes in the month and day values are not supported.
 * @param {String} str [required] - String being converted to a date.
 * @param {String} format [optional] - Use one of the following arguments.
 * <ul>
 *     <li>datetime � formats the string as a concatenation of date and time (hour and minutes), based on the Date Format and Time Format selected in Set Preferences. If you use this format type, your input string must not include seconds.</li>
 *     <li>datetimetz � formats the string as a concatenation of date and time (hour, minutes and seconds), based on the Date Format and Time Format selected in Set Preferences. If you use this format type, your input string must include seconds.</li>
 * </ul>
 * @returns {Date} Date object. Returns NaN if date includes a leading zero.
 */
function nlapiStringToDate(str, format) { };

/**
 * Parses a String into a W3C XML document. This API is useful if you want to navigate/query a structured XML document more effectively using either the Document API or NetSuite built-in XPath functions.
 * @param {String} text [required] - String being converted
 * @returns W3C Document object
 */
function nlapiStringToXML(text) { };

/**
 * Submits a CSV import job to asynchronously import record data into NetSuite. This API can be used to:
 * <ul>
 *     <li>Automate standard record data import for SuiteApp installations, demo environments, and testing environments.</li>
 *     <li>Import data on a schedule using a scheduled script.</li>
 *     <li>Build integrated CSV imports with RESTlets.</li>
 * </ul>
 * <p>When the API is executed, the import job is added to the queue. The progress of an import job can be viewed at Setup > Import/Export > View CSV Import Status. For details, see Checking CSV Import Status.
 * <p>Executing this API consumes 100 governance units.
 * <p>Note that this API cannot be used to import data that is imported by simple (2-step) assistants in the UI, because these import types do not support saved import maps. This limitation applies to budget, single journal entry, single inventory worksheet, project tasks, and Web site redirects imports.
 * <p>Also note that this API only has access to the field mappings of a saved import map; it does not have access to advanced import options defined in the Import Assistant, such as multi-threading and multiple queues. Even if you set options to use multiple threads or queues for an import job and then save the import map, these settings are not available to this API. When this API submits a CSV import job based on the saved import map, a single thread and single queue are used.
 * nlobjCSVImport [required] - nlobjCSVImport object with methods to set the following: saved import map, primary file, linked file(s) (optional), import job name (optional).
 * @returns Job ID of the import (which is also the identifier for the CSV response file)
 * @since Version 2012.2
 */
function nlapiSubmitCSVImport(nlobjCSVImport) { };

/**
 * Use this API to submit changes to a configuration page that was loaded into the system using nlapiLoadConfiguration(type). The following configuration pages support SuiteScript: Company Information, General Preferences, Enable Features, Accounting Preferences, Accounting Periods, Tax Periods.
 * <p>The nlapiSubmitConfiguration function is available in scheduled and Suitelet scripts only. It consumes 20 usage units per call.
 * @param {nlobjConfiguration} name - [required] - nlobjConfiguration object containing the data record
 * @returns {Void}
 * @since Version 2009.2
 */
function nlapiSubmitConfiguration(name) { };

/**
 * Updates one or more body fields or custom fields on a record. This function can be used on any record that supports inline editing and on any body field or custom field that supports inline editing. Note that this function cannot be used to update sublist �line item� fields.
 * <p>The nlapiSubmitFieldfunction is a companion function to nlapiLookupField(type, id, fields, text).
 * <p>nlapiSubmitField is available in client, user event, scheduled, portlet, and Suitelet scripts.
 * <p>See API Governance for the unit cost associated with this API. Note that the metering for this API is on a per-call basis, not per updated line. For example you can update five fields with one call to nlapiSubmitField, and the entire operation will cost 10 units (if the API is executing on a standard transaction record).
 * <p>Important: In the NetSuite UI, users cannot set fields that are not inline editable. SuiteScript, however, <strong>does</strong> let you set non inline editable fields using nlapiSubmitField, but this is NOT the intended use for this API. See Consequences of Using nlapiSubmitField on Non Inline Editable Fields to learn about the increased governance cost of using this API on non inline editable fields.
 * @param {String} type [required] - The record internal ID name of the record you are updating.
 * @param {Number} id [required] - The internalId for the record, for example 777 or 87
 * @param {String|Array} fields [required] - An Array of field names being updated -or- a single field name
 * @param {String|Array} values [required] - An Array of field values being updated -or- a single field value
 * @param {Boolean} doSourcing [optional] - If not set, this argument defaults to false and field sourcing does not occur. If set to true, sources in dependent field information for empty fields. Note:doSourcing takes the values of true or false, not T or F.
 * @returns {Void}
 */
function nlapiSubmitField(type, id, fields, values, doSourcing) { };

/**
 * Submits a file and returns the internal ID to the file that was added to (or updated in) the NetSuite file cabinet. Note that if a file with the same name exists in the folder that this file is added to, then that file will be updated.
 * <p>Usage metering allowed for this function is 20 units. This API is supported in user event, scheduled, portlet, and Suitelet scripts.
 * @param {nlobjFile} file [required] - The nlobjFile that will be updated
 * @returns {Number} The integer value of the file ID.
 * @since Version 2009.1
 */
function nlapiSubmitFile(file) { };

/**
 * Submits and commits new records or changes applied to an existing record and returns the internalId for the committed record. The nlapiSumitRecord function can be used in conjunction with nlapiCreateRecord or nlapiLoadRecord in order to create or modify a record related to the current one.
 * <p>This API is supported in all script types. See API Governance for the unit cost associated with this API.
 * <p>Important: When using nlapiSubmitRecord in a user event script, it is possible that the related record modified or created by the script is committed to the database but the actual record initiating the script fails on save. To avoid this scenario, SuiteScripts that cause actions on records other than the current one should be set to run afterSubmit.
 * @param {nlobjRecord} record [required] - nlobjRecord object containing the data record
 * @param {Boolean} doSourcing [optional] - If not set, this argument defaults to false, which means that dependent field values are not sourced. If set to true, sources dependent field information for empty fields. Be aware that doSourcing takes the values of true or false, not T or F. For more information on sourcing, see Understanding Sourcing in SuiteScript in the NetSuite Help Center.
 * @param {Boolean} ignoreMandatoryFields [optional] - Disables mandatory field validation for this submit operation. If set to true, ignores all standard and custom fields that were made mandatory through customization. All fields that were made mandatory through company preferences are also ignored.
 * @returns {Number} An integer value of the committed record's internal ID (for example, 555, 21, or 4).
 * @throws SSS_INVALID_RECORD_OBJ
 * @throws SSS_RECORD_OBJ_REQD
 * @throws SSS_INVALID_SOURCE_ARG
 */
function nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields) { };

/**
 * Initializes a new record using data from an existing record of a different type and returns an nlobjRecord. This function can be useful for automated order processing such as creating item fulfillment transactions and invoices off of orders.
 * <p>This API is supported in client, user event, scheduled, and Suitelet scripts. See API Governance for the unit cost associated with this API.
 * <p>For a list of supported transform types, see Supported Transformation Types.
 * @param {String} type [required] - The record internal ID name. In the NetSuite Help Center, see SuiteScript Supported Records. The internal ID appears in the column called �Record Internal ID�.
 * @param {Number} id [required] - The internalId for the record, for example 555 or 78.
 * @param {String} transformType [required] - The record internal ID name of the record you are transforming the existing record into
 * @param {Object} transformValues [optional] - An array of field name -> value pairs containing field defaults used for transformation. Note that you can also specify whether you want the record transformation to occur in dynamic mode. For details, see Working with Records in Dynamic Mode.
 * If you do not specify a value, the system does not know which items on the order are being fulfilled. If a shipgroup value is not specified, the value <strong>1</strong> (for the first shipping group) is defaulted. This means that only the items belonging to the first shipping group will be fulfilled when the sales order is transformed. For more information, see Multiple Shipping Routes and SuiteScript in the NetSuite Help Center.
 * @returns {nlobjRecord} An nlobjRecord object
 * @throws SSS_INVALID_URL_CATEGORY
 * @throws SSS_CATEGORY_ARG_REQD
 * @throws SSS_INVALID_TASK_ID
 * @throws SSS_TASK_ID_REQD
 * @throws SSS_INVALID_INTERNAL_ID
 * @throws SSS_INVALID_EDITMODE_ARG
 */
function nlapiTransformRecord(type, id, transformType, transformValues) { };

/**
 * Use this API to trigger a workflow on a record. The actions and transitions of the workflow will be evaluated for the record based on the current state that it is in.
 * <p>Usage metering allowed is 20 units. This API is supported in user event, scheduled, portlet, Suitelet, mass update, and workflow action scripts.
 * @param {String} recordtype [required] - The record type ID of the workflow base record (for example, 'customer', 'salesorder', 'lead'). In the Workflow Manager this is the record type that is specified in the Record Type field.
 * @param {Number} id [required] - The internal ID of the base record (for example 55 or 124).
 * @param {Number|String} workflowid [required] - The internal ID (int) or script ID (string) for the workflow definition. This is the ID that appears in the ID field on the Workflow Definition Page.
 * @param {String|Number} actionid [optional] - The internal ID of a button that appears on the record in the workflow. Using this parameter triggers the workflow as if the specified button were pressed.
 * @returns {Number} The internal ID (int) of the workflow instance used to track the workflow against the record.
 * @since Version 2010.1
 */
function nlapiTriggerWorkflow(recordtype, id, workflowid, actionid) { };

/**
 * Validates a supplied XML document against a supplied XML Schema (XSD Document).
 * <p>Important: nlapiValidateXML only validates XML Schema (XSD); validation of other XML schema languages is not supported.
 * <p>The supplied XML Document and XSD Document must be passed in the form of a W3C Document object. Use nlapiStringToXML(text) to convert both documents before calling nlapiValidateXML. The location of your source XML Document and XDS Document does not matter; the validation is performed with the Document objects stored in memory.
 * @param {document} xmlDocument [required] � XML Document being validated.
 * @param {document} schemaDocument [required] � XML Schema (in the form of an XSD Document) being validated against.
 * @param {String} schemaFolderId [optional] � Only required if the passed XML Schema uses <import> or <include> tags that reference child schemas by file path (as opposed to references by URL. To use this parameter, upload the child schema(s) to a folder in the NetSuite file cabinet. Then pass the folder internal ID as the schemaFolderId argument. Note that SuiteScript ignores this argument if it is passed, but not needed.
 * @returns Void
 * @throws SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA � Thrown when the validation fails. See for additional information.
 * @throws SSS_XML_SCHEMA_MISSING_DEPENDECY_FOLDER_ID � Thrown when an invalid schemaFolderId argument is passed; also thrown when schemaFolderId is required but missing.
 * @since Version 2014.1
 */
function nlapiValidateXML(xmlDocument, schemaDocument, schemaFolderId) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>sublist</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in <strong>read-only</strong> mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this API.
 * <p>You can call this API when you want your script to read the nlobjSubrecord object of the current sublist line you are on. After you get the nlobjSubrecord object, you can use regular record API to access its values.
 * <p>This API is currently used only in the context of the  / Numbered Inventory feature. For information, see Using SuiteScript with  / Numbered Inventory Management. Also see Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiViewCurrentLineItemSubrecord(sublist, fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>sublist</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in read-only mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this function.
 * <p>You can call this API when you want to read the value of a line you are <strong>not</strong> currently on (or have not selected). For example, if you are editing line 2 as your current line, you can call nlapiViewLineItemSubrecord on line 1 to get the value of line 1.
 * <p>This API is currently used only in the context of the  / Numbered Inventory feature. For information, see Using SuiteScript with  / Numbered Inventory Management. Also see Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @param {Number} linenum [required] - The line number for the sublist field. Note the first line number on a sublist is 1 (not 0).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiViewLineItemSubrecord(sublist, fldname, linenum) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>body</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in read-only mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this function.
 * <p>This API is currently used only in the context of the  / Numbered Inventory feature. For information, see Using SuiteScript with  / Numbered Inventory Management. Also see Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 */
function nlapiViewSubrecord(fldname) { };

/**
 * When you void a transaction, its total and all its line items are set to zero, but the transaction is not removed from the system. NetSuite supports two types of voids: direct voids and voids by reversing journal. See the help topic Voiding, Deleting, or Closing Transactions for additional information.
 * <p>nlapiVoidTransaction voids a transaction and then returns an id that indicates the type of void performed. If a direct void is performed, nlapiVoidTransaction returns the ID of the record voided. If a void by reversing journal is performed, nlapiVoidTransaction returns the ID of the newly created voiding journal.
 * <p>The type of void performed depends on the targeted account's preference settings:
 * <ul>
 *     <li>If the Using Reversing Journals preference is disabled, nlapiVoidTransaction performs a direct void. See the help topic Supported Transaction Types - Direct Void for a list of transactions that support direct voids.</li>
 *     <li>If the Using Reversing Journals preference is enabled, nlapiVoidTransaction performs a void by reversing journal. See the help topic Supported Transaction Types � Void by Reversing Journal for a list of transactions that support voids by reversing journal.</li>
 * </ul>
 * <p>Important: Once you successfully void a transaction, you can no longer make changes to the transaction that impact the general ledger
 * <p>This API is supported in the following script types:
 * <ul>
 *     <li>Client</li>
 *     <li>User Event</li>
 *     <li>Scheduled</li>
 *     <li>Suitelet</li>
 *     <li>RESTlet</li>
 *     <li>Workflow Action</li>
 * </ul>
 * <p>The Governance on this API is 10.
 * @param {String} transactionType [required] � internal ID of the record type to be voided. See the help topics Supported Transaction Types - Direct Void and Supported Transaction Types � Void by Reversing Journal for a list of valid arguments.</li>
 * @param {Number} recordId [required] � the internal ID of the specific record to be voided. See the help topic How do I find a record's internal ID? for additional information.</li>
 * @returns {Number} An id that indicates the type of void performed
 * <ul>
 *     <li>If a direct void is performed, nlapiVoidTransaction returns the original recordId value passed in.</li>
 *     <li>If a void by reversing journal is performed, nlapiVoidTransaction returns the ID of the newly created voiding journal.</li>
 * </ul>
 * @throws CANT_VOID_TRANS � if you attempt to void a transaction that is linked to other transactions (for example, customer payment)
 * @throws INVALID_RCRD_TYPE � if the transactionType argument passed is not valid
 * @throws RCRD_DSNT_EXIST � if the recordId argument passed is not valid
 * @throws THIS_TRANSACTION_HAS_ALREADY_BEEN_VOIDED � if you attempt to void a transaction that has already been voided
 * @throws VOIDING_REVERSAL_DISALLWD � if you attempt to void a transaction with inventory impact
 */
function nlapiVoidTransaction(transactionType, recordId) { };

/**
 * Use this API in conjunction with the Big Faceless Report Generator built by Big Faceless Organization (BFO). The BFO Report Generator is a third-party library used for converting XML to PDF documents. Using nlapiXMLToPDF in combination with the BFO report library, SuiteScript developers can now generate PDF reports from Suitelets.
 * <p>The nlapiXMLToPDF API passes XML to the BFO tag library (which is stored by NetSuite), and returns a PDF nlobjFile object. Note that there is a <strong>5MB</strong> limitation to the size of the file that can be created.
 * <p>The following list includes just some of the output styles that can be generated using nlapiXMLToPDF and BFO tags:
 * <ul>
 *     <li>Consolidated data from multiple transactions into one (for example, a virtual consolidated invoice)</li>
 *     <li>Highly tailored transaction output with images</li>
 *     <li>Product labels with bar codes</li>
 *     <li>Pallet labels with bar codes (custom records)</li>
 *     <li>Custom-formatted product catalogs with images</li>
 *     <li>Proposals</li>
 * </ul>
 * <p>For details on BFO, available tags, and BFO examples, see the following links:
 * <ul>
 *     <li></li>
 *     <li></li>
 * </ul>
 * @param {String} xmlstring [required] � XML
 * @returns {nlobjFile} PDF nlobjFile object
 * @throws ERROR_PARSING_XML - thrown as a user error when XML is badly formed
 * @since Version 2009.1
 */
function nlapiXMLToPDF(xmlstring) { };

/**
 * Converts (serializes) an XML document into a String. This API is useful if you want to serialize and store a Document in a custom field (for example).
 * @param {W3CDocument} xml [required] - XML document being serialized
 * @returns {String} String
 */
function nlapiXMLToString(xml) { };

/**
 * Creates a recovery point and then reschedules the script. The newly rescheduled script has its governance units reset, and is then placed at the back of the scheduled script queue. To summarize, nlapiYieldScript works as follows:
 * <p>Calling this function consumes no governance units. Note also, calling this API resets the unit counter for the currently executing script. Be aware, however, all scheduled scripts have a 50 MB memory limit. Calling this API will not reset the memory size of the script to 0. It only resets the governance units. For complete details on scheduled script memory limits, see Understanding Memory Usage in Scheduled Scripts.
 * <p>Important: This API can only be called from scheduled scripts. Calling this API from any other script type will result in an error.
 * <p>Important: Scripts that contain live references to files larger than 5MB must null the references before they call nlapiYieldScript or nlapiSetRecoveryPoint. If these references are not nulled, the script returns an SSS_FILE_OBJECT_NOT_SERIALIZABLE error. See Example � Nulling a reference to a file larger than 5MB for an example.
 * <p>Important: This API is not supported within JavaScript array iteration functions (for example, map, some, filter()). JavaScript array iteration functions are designed to be executed as a whole. SuiteScript cannot yield in the middle of these control structures.
 * @returns Native Javascript Object
 */
function nlapiYieldScript() { };

/**
 * Use this method to add a field to an assistant and return the field object.
 * @param {String} name [required] - The internal ID for this field
 * @param {String} type [required] - The field type. Any of the following field types can be specified:
 * <ul>
 *     <li>text</li>
 *     <li>email</li>
 *     <li>radio - See Working with Radio Buttons for details on this field type.</li>
 *     <li>label - This is a field type that has no values. In Working with Radio Buttons, see the first code sample that shows how to set this field type.</li>
 *     <li>phone</li>
 *     <li>date</li>
 *     <li>currency</li>
 *     <li>float</li>
 *     <li>integer</li>
 *     <li>checkbox</li>
 *     <li>select - Note that if you want to add your own (custom) options on a select field, you must set the source parameter to NULL. Then, when a value is specified, the value will populate the options from the source.</li>
 *     <li>url - See Create a Form with a URL Field for an example how to use this type.</li>
 *     <li>timeofday</li>
 *     <li>textarea</li>
 *     <li>multiselect</li>
 *     <li>image</li>
 *     <li>inlinehtml</li>
 *     <li>password</li>
 *     <li>help</li>
 *     <li>percent</li>
 *     <li>longtext</li>
 *     <li>richtext</li>
 * </ul>
 * @param {String} label [optional] - The UI label for this field
 * @param {Number|String} source [optional] - The internalId or scriptId of the source list for this field if it is a select (List/Record) field. In the NetSuite Help Center, see List/Record Type IDs for the internal IDs of all supported list/record types.
 * Note that if you have set the type parameter to select, and you want to add your own (custom) options to the select field, you must set source to NULL. Then, when a value is specified, the value will populate the options from the source.
 * @param {String} group [optional] - If you are adding the field to a field group, specify the internal ID of the field group
 * @returns {nlobjField} nlobjField
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.addField = function(name, type, label, source, group) { };

/**
 * Use this method to add a field group to an assistant page. Note that when a field group is added to an assistant, by default it is collapsible. Also, by default, it will appear as uncollapsed when the page loads. If you want to change these behaviors, you will use the nlobjFieldGroup.setCollapsible(collapsible, hidden) method.
 * @param {String} name [required] - The internal ID for the field group
 * @param {String} label [required] - The UI label for the field group
 * @returns {nlobjFieldGroup} nlobjFieldGroup
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.addFieldGroup = function(name, label) { };

/**
 * Use this method to add a step to an assistant.
 * @param {String} name [required] - The internal ID for this step (for example, 'entercontacts').
 * @param {String} label [required] - The UI label for the step (for example, 'Enter Contacts'). By default, the step will appear vertically in the left panel of the assistant (see figure).
 * @returns {nlobjAssistantStep} nlobjAssistantStep
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.addStep = function(name, label) { };

/**
 * Use this method to add a sublist to an assistant page and return an nlobjSubList object. Note that only inlineeditor sublists can be added to assistant pages.
 * @param {String} name [required] - The internal ID for the sublist
 * @param {String} type [required] - The sublist type. Currently, only a value of <strong>inlineeditor</strong> can be set.
 * @param {String} label [required] - The UI label for the sublist
 * @returns {nlobjSubList} nlobjSubList
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.addSubList = function(name, type, label) { };

/**
 * Use this method to get all field groups on an assistant page. Also note that where you call this method matters. If you call getAllFieldGroups() early in your script, and then add three more field groups at the end of your script, getAllFieldGroups() will return only those field groups that were added prior to the call.
 * @returns {Array} String[] of all field groups in the assistant
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getAllFieldGroups = function() { };

/**
 * Use this method to get all fields in an assistant. Regardless of which page or step the fields have been added to, all fields will be returned. Also note that where you call this method matters. If you call getAllFields() early in your script, and then add ten more fields at the end of your script, getAllFields() will return only those fields that were added prior to the call.
 * @returns {Array} String[] of all fields in a custom assistant
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getAllFields = function() { };

/**
 * Use this method to return an array of all the assistant steps for this assistant.
 * @returns {nlobjAssistantStep[]} nlobjAssistantStep[]
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getAllSteps = function() { };

/**
 * Use this method to get all sublist names that appear on an assistant page. Also note that where you call this method matters. If you call getAllSubLists() early in your script, and then add three more sublists at the end of your script, getAllSubLists() will return only those sublists that were added prior to the call.
 * @returns {Array} String[] of all sublists in an assistant
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getAllSubLists = function() { };

/**
 * Use this method to get the current step that was set via nlobjAssistant.setCurrentStep(step). After getting the current step, you can add fields, field groups, and sublists to the step. (question about getName in John's sample)
 * @returns {nlobjAssistantStep} nlobjAssistantStep
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getCurrentStep = function() { };

/**
 * Use this method to return a field on an assistant page.
 * @param {String} name [required] - The internal ID of the field
 * @returns {nlobjField} nlobjField
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getField = function(name) { };

/**
 * Use this method to return a field group on an assistant page.
 * @param {String} name [required] - The internal ID for the field group
 * @returns {nlobjFieldGroup} nlobjFieldGroup
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getFieldGroup = function(name) { };

/**
 * Use this method to get the last submitted action that was performed by the user. Typically you will use getNextStep() to determine the next step (based on the last action).
 * <p>Possible assistant submit actions that can be specified are:
 * <ul>
 *     <li><strong>next</strong> - means that the user has clicked the Next button in the assistant</li>
 *     <li><strong>back</strong> - means that the user has clicked the Back button</li>
 *     <li><strong>cancel</strong> - means that the user has clicked the Cancel button</li>
 *     <li><strong>finish</strong> - means that the user has clicked the Finish button. By default, inline text then appears on the finish page saying �Congratulations! You have completed the <assistant title>� - where <assistant title> is the title set in nlapiCreateAssistant(title, hideHeader) or nlobjAssistant.setTitle(title).</li>
 *     <li><strong>jump</strong> - if nlobjAssistant.setOrdered(ordered) has been set to false (meaning that steps can be completed in random order), then <strong>jump</strong> is used to get the user's last action in a non-sequential process.</li>
 * </ul>
 * @returns The last submit action (as a string)
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getLastAction = function() { };

/**
 * Use this method to get the step the last submitted action came from.
 * @returns {nlobjAssistantStep} nlobjAssistantStep
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getLastStep = function() { };

/**
 * Use this method to return the next logical step corresponding to the user's last submitted action. You should only call this method after you have successfully captured all the information from the last step and are ready to move on to the next step. You would use the return value to set the current step prior to continuing.
 * @returns {nlobjAssistantStep} Returns the next logical step based on the user's last submit action, assuming there were no errors. Typically you will call setCurrentStep(step) using the returned step if the submit was successful.
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getNextStep = function() { };

/**
 * Use this method to return an nlobjAssistantStep object on an assistant page.
 * @param {String} name [required] - The internal ID of the step
 * @returns {nlobjAssistantStep} nlobjAssistantStep
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getStep = function(name) { };

/**
 * Use this method to get the total number of steps in an assistant.
 * @returns {Number} The total number of steps in an assistant. Value returned as an integer.
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getStepCount = function() { };

/**
 * Use this method to return a sublist on an assistant page (template file just has metadata on a sublist).
 * @param {String} name [required] - The internal ID for the sublist
 * @returns {nlobjSubList} nlobjSubList
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.getSubList = function(name) { };

/**
 * Use this method to determine if an assistant has an error message to display for the current step.
 * @returns {Boolean} Returns true if setError(html) was called
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.hasError = function() { };

/**
 * Use this method to determine when all steps in an assistant are completed.
 * @returns {Boolean} Returns true if all steps in the assistant have been completed or if setFinished(html) has been called.
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.isFinished = function() { };

/**
 * Use this method to manage redirects in an assistant. In most cases, an assistant redirects to itself as in:
 * <p>The sendRedirect(response) method is like a wrapper method that performs this redirect. This method also addresses the case in which one assistant redirects to another assistant. In this scenario, the second assistant must return to the first assistant if the user Cancels or the user Finishes. This method, when used in the second assistant, ensures that the user is redirected back to the first assistant.
 * @param {nlobjResponse} response [required] - The response object
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.sendRedirect = function(response) { };

/**
 * Use this method to mark a step as the current step. In the UI, the step will be highlighted when the user is on that step (see figure).
 * @param {nlobjAssistantStep} step [required] - The name of the step object
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setCurrentStep = function(step) { };

/**
 * Use this method to set an error message for the current step. If you choose, you can use HTML tags to format the message.
 * @param {String} html [required] - Error message text
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setError = function(html) { };

/**
 * Use this method to set values for fields on an assistant page.
 * @param {Object<String,String>} values [required] - An associative array containing name/value pairs that map field names to field values
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setFieldValues = function(values) { };

/**
 * Use this method to mark the last page in an assistant. Set the rich text to display a completion message on the last page.
 * @param {String} html [required] - The text to display once the assistant has finished. For example, �Congratulations! You have successfully set up your account.�
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setFinished = function(html) { };

/**
 * Use this method to display steps without numbers.
 * @param {Boolean} hasStepNumber [optional] - Set to false to turn step numbering off.
 * @returns {Void}
 * @since Version 2010.1
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setNumbered = function(hasStepNumber) { };

/**
 * Use this method to enforce a sequential ordering of assistant steps. If steps are ordered, users must complete the current step before the assistant will allow them to proceed to the next step. From a display perspective, ordered steps will always appear in the left panel of the assistant (see first figure). Note that by default, steps in an assistant are ordered.
 * <p>If steps are unordered, they can be completed in any order. Additionally, unordered steps are always displayed horizontally under the assistant title (see second figure).
 * @param {Boolean} ordered [required] - A value of true means steps must be completed sequentially, and that they will appear vertically in the left panel of the assistant. A value of false means steps do not need to be completed sequentially, and they will appear horizontally, directly below the assistant title.
 * ordered parameter set to <strong>true:</strong>
 * ordered parameter set to false :
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setOrdered = function(ordered) { };

/**
 * Use this method to set the scriptId for a global client script you want to run on an assistant page.
 * @param {String|Number} script [required] - The scriptId of the global client script
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setScript = function(script) { };

/**
 * Use this method to show/hide the <strong>Add to Shortcuts</strong> link that appears in the top-right corner of an assistant page. Note that if you do not call this method in your script, the default is to show the Add to Shortcuts link at the top of all assistant pages. Therefore, it is recommended that you use this method only if you want to hide this link.
 * @param {Boolean} show [required] - A value of false means that the Add to Shortcuts link does not appear on the assistant. A value of true means that it will appear.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setShortcut = function(show) { };

/**
 * Use this method to set the splash screen for an assistant page.
 * @param {String} title [required] - The title of the splash screen
 * @param {String} text1 [required] - Text for the splash screen
 * @param {String} text2 [optional] - If you want splash content to have a two-column appearance, provide content in the text2 parameter.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setSplash = function(title, text1,text2) { };

/**
 * Use this method to set the title for the assistant. If you have already defined the title using nlapiCreateAssistant(title, hideHeader), you do not need to call the setTitle(title) method. Also note that the title you provide using setTitle(title) will override the title specified in the nlapiCreateAssistant() function.
 * @param {String} title [required] - Assistant title
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjAssistant
 */
nlobjAssistant.prototype.setTitle = function(title) { };

/**
 * Use this method to get all fields entered by the user during the step.
 * @returns {Array} String[] of all fields entered by the user during the step
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getAllFields = function() { };

/**
 * Use this method to get all sublist fields entered by the user during this step.
 * @param {String} group [required]- The sublist internal ID
 * @returns {Array} String[] of all sublist fields entered by the user during the step
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getAllLineItemFields = function(group) { };

/**
 * Use this method to get all sublists entered by the user during this step.
 * @returns {Array} String[] of all sublists entered by the user during this step
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getAllLineItems = function() { };

/**
 * Use this method to get the value of a field entered by the user during this step.
 * @param {String} name [required] - The internal ID of the field whose value is being returned
 * @returns {Number} The internal ID (string) value for the field
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getFieldValue = function(name) { };

/**
 * Use this method to get the selected values of a multi-select field as an Array.
 * @param {String} name [required]- The name of the multi-select field
 * @returns {Array} String[] of field IDs. Returns null if field is not on the record. Note the values returned are <strong>read-only</strong>.
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getFieldValues = function(name) { };

/**
 * Use the method to get the number of lines previously entered by the user in this step.
 * <p>Important: The first line number on a sublist is <strong>1</strong> (not 0).
 * @param {String} group [required]- The sublist internal ID
 * @returns {Number} The integer value of the number of line items on a sublist. Note that -1 is returned if the sublist does not exist.
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getLineItemCount = function(group) { };

/**
 * Use this method to get the value of a line item (sublist) field entered by the user during this step.
 * @param {String} group [required] - The sublist internal ID
 * @param {String} name [required]- The name of the sublist field whose value is being returned
 * @param {Number} linenum [required]- The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of the sublist field
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getLineItemValue = function(group, name, line) { };

/**
 * Use this method to get a step number. The number returned represents where this step appears sequentially in the assistant.
 * @returns The index of this step in the assistant page (1-based)
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.getStepNumber = function() { };

/**
 * Use this method to set help text for an assistant step.
 * @param {String} help [required] - The help text for the step
 * @returns {nlobjAssistantSte} nlobjAssistantSte
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.setHelpText = function(help) { };

/**
 * Use this method to set the label for an assistant step. Note that you can also create a label for a step when the step is first added to the assistant. Do this using nlobjAssistant.addStep(name, label).
 * @param {String} label [required] - The UI label for this step
 * @returns {nlobjAssistantStep} nlobjAssistantStep
 * @since Version 2009.2
 * @memberOf nlobjAssistantStep
 */
nlobjAssistantStep.prototype.setLabel = function(label) { };

/**
 * Disables the button. When using this API, the assumption is that you have already defined the button's UI label when you created the button using nlobjForm.addButton(name, label, script). The setDisabled() method simply grays-out the button's appearance in the UI.
 * <p>Important: This method is not currently supported for standard NetSuite buttons. This method can be used with custom buttons only.
 * @param {Boolean} disabled - If set to true, the button will still appear on the form, however, the button label will be grayed-out.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjButton
 */
nlobjButton.prototype.setDisabled = function(disabled) { };

/**
 * Sets the UI label for the button. When using this API, the assumption is that you have already defined the button's UI label when you created the button using nlobjForm.addButton(name, label, script). You can set setLabel() to trigger based on the execution context. For example, based on the user viewing a page, you can use setLabel() to re-label a button's UI label so that the label is meaningful to that particular user.
 * <p>This API is supported on standard NetSuite buttons as well as on custom buttons. For a list of standard buttons that support this API, see Button IDs in the NetSuite Help Center.
 * @param {String} label - The UI label for the custom button
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjButton
 */
nlobjButton.prototype.setLabel = function(label) { };

/**
 * Sets the button as hidden in the UI. This API is supported on custom buttons and on some standard NetSuite buttons. For a list of standard buttons that support this API, see Button IDs in the NetSuite Help Center.
 * @param {Boolean} visible - Defaults to true if not set. If set to false, the button will be hidden in the UI.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2010.2
 * @memberOf nlobjButton
 */
nlobjButton.prototype.setVisible = function(visible) { };

/**
 * The nlobjCredentialBuilder object encapsulates a request string that can be passed to nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod).
 * Six methods are included that perform various string transformations: three hash methods for SHA-1, SHA-256, and MD5 hashing, two encoding methods for Base64 and UTF8 encoding, a character replacement method, and a string appending method.
 * <p>Important: If the nlobjCredentialBuilder object is passed to nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod) as the url argument, it must be passed in its original state (pre-encrytion and pre-encoding). Otherwise, nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod) is unable to validate the URL
 * <p>The nlobjCredentialBuilder object is defined with the new keyword.
 * <pre>var builder = new nlobjCredentialBuilder("rawtext{GUID}Hash:", 'www.netsuite.com');</pre>
 * <p>Supported Script Types
 * <ul>
 *     <li>User Event</li>
 *     <li>Scheduled Script</li>
 *     <li>Portlet</li>
 *     <li>Suitelet</li>
 * </ul>
 * @param {String} string [required] - request string; can include an embedded GUID (globally unique string).
 * @param {String} domainString [required] - URL�s host name. Host name must exactly match the host name in your URL. For example, if your URL is https://payment.ns.com/process.money?passwd={GUID}, the host name passed in must be 'payment.ns.com'.
 * @returns {nlobjCredentialBuilder} nlobjCredentialBuilder
 * @memberOf nlobjCredentialBuilder
 */
var nlobjCredentialBuilder = function(string, domainString) { };

/**
 * Appends a passed in string to an nlobjCredentialBuilder object.
 * @param {String} string [required] - string to be appended.
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.append = function(string) { };

/**
 * Encodes an nlobjCredentialBuilder object per the base64 scheme.
 * <p>Example
 * <pre>//builder contains content that is SHA-1 encrypted and then Base64 encoded
 * builder = builder.sha1().base64();</pre>
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.base64 = function() { };

/**
 * Hashes an nlobjCredentialBuilder object with the MD5 hash function.
 * <p>Example
 * <pre>//builder contains content that is MD5 hashed and then UTF-8 encoded
 * builder = builder.md5().utf8(); </pre>
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2015 Release 1
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.md5 = function() { };

/**
 * Replaces all instances of string1 with string2.
 * <p>Example
 * <pre>//replace all instaces of "#" with "-" within builder
 * builder = builder.replace('#', '-');</pre>
 * @param {String} string1 [required] - string to be replaced
 * @param {String} string2 [required] - string to be replaced with
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.replace = function(string1, string2) { };

/**
 * Hashes an nlobjCredentialBuilder object with the SHA-1 hash function.
 * <p>Example
 * <pre>//builder contains content that is SHA-1 hashed and then Base64 encoded
 * builder = builder.sha1().base64();</pre>
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.sha1 = function() { };

/**
 * Hashes an nlobjCredentialBuilder object with the SHA-256 hash function.
 * <p>Example
 * <pre>//builder contains content that is SHA-256 hashed and then UTF-8 encoded
 * builder = builder.sha256().utf8(); </pre>
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.sha256 = function() { };

/**
 * Encodes an nlobjCredentialBuilder object per the UTF-8 scheme.
 * <p>Example
 * <pre>//builder contains content that is SHA-256 hashed and then UTF-8 encoded
 * builder = builder.sha256().utf8(); </pre>
 * @returns {nlobjCredentialBuilder} An nlobjCredentialBuilder object.
 * @since Version 2013 Release 2
 * @memberOf nlobjCredentialBuilder
 */
nlobjCredentialBuilder.prototype.utf8 = function() { };

/**
 * Sets the data to be imported in a linked file for a multi-file import job, by referencing a file in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
 * <p>If an import job requires multiple linked files, this method can be executed multiple times, once for each linked file.
 * @param {String} sublist [required] � The internal ID of the record sublist for which data is being imported. See Scriptable Sublists for a list of sublist internal IDs.
 * @param {String} file [required] - Can be one of the following:
 * <ul>
 *     <li>An nlobjFile object, encapsulating a CSV file, that contains the data to be imported. The CSV file must be uploaded to the file cabinet before it can be used in this context. The nlobjFile object is loaded with nlapiLoadFile. To load the nlobjFile object, pass the internal ID of the specific CSV file to be loaded, as shown below. The internal ID of the CSV file is listed in the file cabinet, under the Internal ID column.
 *     <br>setLinkedFile(�item�, nlapiLoadFile(74));</li>
 *     <li>Raw string of the data to be imported.</li>
 * </ul>
 * @returns {Void}
 * @throws SSS_INVALID_CSV_CONTENT � Thrown when an invalid value is passed as the file argument.
 * @since Version 2012.2
 * @memberOf nlobjCSVImport
 */
nlobjCSVImport.prototype.setLinkedFile = function(sublist, file) { };

/**
 * Sets the name of the saved import map to be used for an import, by referencing the internal ID or script ID of the import map.
 * @param {String} savedImport [required] - The internal ID or script ID of the saved mapping to use for the import job. The internal ID is system-defined and is displayed in the ID column at Setup > Import/Export > Saved CSV Imports. The script ID can be defined in the Import Assistant and is also displayed on this page.
 * @returns {Void}
 * @since Version 2012.2
 * @memberOf nlobjCSVImport
 */
nlobjCSVImport.prototype.setMapping = function(savedImport) { };

/**
 * Sets the name of the import job to be shown on the status page for CSV imports.
 * @param {String} option [required] - The name of the option, in this case, jobName.
 * @param {String} value [required] - The value for the jobName option, meaning the text to be displayed in the Job Name column at Setup > Import/Export > View CSV Import Status. The default job name format is: <import type> - <csv file name> - <email address of logged-in user>.
 * @returns {Void}
 * @since Version 2012.2
 * @memberOf nlobjCSVImport
 */
nlobjCSVImport.prototype.setOption = function(option, value) { };

/**
 * Sets the data to be imported in the primary file for an import job, by referencing a file in the file cabinet using nlapiLoadFile, or by inputting CSV data as raw string.
 * @param {String} file [required] - Can be one of the following:
 * <ul>
 *     <li>The internal ID, as shown in the file cabinet, of the CSV file containing data to be imported, referenced by nlapiLoadFile. For example:
 *     <br>setPrimaryFile(nlapiLoadFile(73))</li>
 *     <li>Raw string of the data to be imported.</li>
 * </ul>
 * @returns {Void}
 * @throws SSS_INVALID_CSV_CONTENT � Thrown when an invalid value is passed as the file argument.
 * @since Version 2012.2
 * @memberOf nlobjCSVImport
 */
nlobjCSVImport.prototype.setPrimaryFile = function(file) { };

/**
 * Overrides the CSV import queue preference. The stored queue preference is not altered; setQueue must be called each time an override is needed.
 * @param {String} string [required] � The new queue number. Valid values range from '1' to '5', depending upon the SuiteCloud License.
 * @returns {Void}
 * @throws SSS_INVALID_CSV_QUEUE � Thrown for all invalid values passed as the string argument.
 * @since Version 2014.1
 * @memberOf nlobjCSVImport
 */
nlobjCSVImport.prototype.setQueue = function(string) { };

/**
 * Adds a URL parameter (optionally defined per row) to this column's URL. Should only be called after calling setURL(url, dynamic)
 * @param {String} param [required] - The parameter name added to the URL
 * @param {String} value [required] - The parameter value added to the URL - or - a column in the data source that returns the parameter value for each row
 * @param {Boolean} dynamic [optional] - If true, then the parameter value is actually an alias that is calculated per row
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjColumn
 */
nlobjColumn.prototype.addParamToURL = function(param, value, dynamic) { };

/**
 * Sets the UI label for this column
 * @param {String} label [required] - The UI label used for this column
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjColumn
 */
nlobjColumn.prototype.setLabel = function(label) { };

/**
 * Sets the base URL (optionally defined per row) for this column
 * @param {String} url [required] - The base URL or a column in the data source that returns the base URL for each row
 * @param {Boolean} dynamic [optional] - If true, then the URL is actually an alias that is calculated per row
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjColumn
 */
nlobjColumn.prototype.setURL = function(url, dynamic) { };

/**
 * Use this method to return a normal keyed array of all the field names on a configuration page.
 * @returns {Array} String[] of field names
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getAllFields = function() { };

/**
 * Use the method to return field metadata for a field
 * @param {String} fldnam [required] - The internal ID of the field
 * @returns {nlobjField} The nlobjField object
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getField = function(fldnam) { };

/**
 * Use this method to return the UI display value for a select field. This API is supported in select fields only.
 * @param {String} name [required] - The internal ID of the field
 * @returns {String} String - The UI display value corresponding to the current selection for a select field. Returns null if field does not exist on the configuration page or if the field is restricted.
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getFieldText = function(name) { };

/**
 * Use this method to return the UI display values for a multiselect field
 * @param {String} name [required] - The name of the multiselect field whose field display values are being returned
 * @returns {Array} Returns the selected text values of a multiselect field as an Array
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getFieldTexts = function(name) { };

/**
 * Use this method to return the internal ID value of a field
 * @param {String} name [required] - The internal ID of the field
 * @returns {Number} The internal ID (string) value for the field
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getFieldValue = function(name) { };

/**
 * Returns a <strong>read-only</strong> array of multi-select field values. This API is supported on multi-select fields only.
 * @param {String} name [required]- The internal ID of the field
 * @returns {Array} String[] of field IDs. Returns null if field is not on the configuration page.
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getFieldValues = function(name) { };

/**
 * Use this method to return the internal ID of a configuration page, for example, <strong>accountingpreferences</strong> or <strong>taxperiods</strong>.
 * @returns {String} The internal ID of the configuration page as a string
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.getType = function() { };

/**
 * Use this method to set the value of a select field using its corresponding display value. This API is supported on select fields only.
 * @param {String} name [required] - The internal ID of the field being set
 * @param {String} text [required] - The field display name as it appears in the UI
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.setFieldText = function(name, text) { };

/**
 * Use this method to set the values (via the UI display values) of a multi-select field. This API is supported on multi-select fields only.
 * @param {String} name [required] - The internal ID of the field being set
 * @param {Array} texts [required] - Array of field display values
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.setFieldTexts = function(name, text) { };

/**
 * Use this method to set the value of a field
 * @param {String} name [required] - The internal ID of the field being set
 * @param {String} value [required] - The value the field is being set to
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.setFieldValue = function(name, value) { };

/**
 * Use this method to set the value of a multi-select field. This API is supported on multi-select fields only.
 * @param {String} name [required] - The internal ID of the field being set
 * @param {Array} value [required]- The value the field is being set to
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjConfiguration
 */
nlobjConfiguration.prototype.setFieldValues = function(name, value) { };

/**
 * Returns an Object containing name-value pairs of color groups to their corresponding RGB hex color based on the currently logged in user's color theme preferences.
 * <p>Using this method, developers can get a user's color theme and apply the entire color theme map (or just individual attributes) to bundled Suitelets that have been installed into a user's account. Doing so ensures that the look-and-feel of each Suitelet matches all other records/pages running in the account.
 * @returns {Object} Object
 * @since Version 2010.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getColorPreferences = function() { };

/**
 * Returns the currently logged in user's account ID
 * @returns {String} The string value of user's account ID, for example NL555ABC
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getCompany = function() { };

/**
 * Returns the internal ID of the currently logged in user's department
 * @returns {Number} The logged in user's department ID as an integer
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getDepartment = function() { };

/**
 * Returns the deploymentId for the current script deployment (ie., the currently executing script)
 * @returns {String} The deploymentId as a string
 * @since Version 2009.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getDeploymentId = function() { };

/**
 * Returns the currently logged in user's e-mail address. The <strong>email</strong> field on the user's employee record must contain an email address.
 * @returns {String} An email address as a string
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getEmail = function() { };

/**
 * Returns the environment in which the current script is being executed. Valid values are SANDBOX | PRODUCTION | BETA | INTERNAL. (means it is running in an internal NS environment that customer does not have access to)
 * @returns {String} The name of the environment as a string
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getEnvironment = function() { };

/**
 * Returns context information about what triggered the current script. Possible return values are:
 * <ul>
 *     <li>userinterface - Client SuiteScript or user event triggers invoked from the UI</li>
 *     <li>webservices - User event triggers invoked from webservice calls</li>
 *     <li>csvimport - User event triggers invoked during CSV imports</li>
 *     <li>portlet - Portlet script or user event triggers invoked via portlet scripts</li>
 *     <li>scheduled - Scheduled script or user event triggers invoked via scheduled scripts</li>
 *     <li>suitelet - Suitelet or user event triggers invoked via suitelets</li>
 *     <li>custommassupdate - Mass update script triggers invoked via custom Mass Update scripts</li>
 *     <li>workflow - Workflow action script triggers invoked via Workflow Action scripts</li>
 *     <li>webstore - User event triggers invoked from the web store (for example to determine if sales orders or customers were created in the web store).</li>
 *     <li>userevent - This context type represents cases in which records are generated in the backend (as opposed to being generated by the UI). For example, the 'userevent' context distinguishes the case wherein a Bill Payment is submitted as part of a non-record page. Whereas the 'userinterface' context identifies when a single Bill Payment record is submitted from the UI.</li>
 *     <li>paymentgateway � Script triggered by Payment Gateway Core Plug-in</li>
 *     <li>consolrateadjustor �</li>
 *     <li>promotions �</li>
 *     <li>customgllines �</li>
 *     <li>taxcalculation �</li>
 *     <li>shippingpartners �</li>
 *     <li>emailcapture �</li>
 *     <li></li>
 * </ul>
 * @returns {String} The execution context as a string
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getExecutionContext = function() { };

/**
 * Use this method to determine if a particular feature is enabled in a NetSuite account. These are the features that appear on the Enable Features page (Setup > Company > Enable Features).
 * @param {String} name [required] - The internal ID of the feature. For a list of feature IDs, see Feature Names and IDs in the NetSuite Help Center.
 * @returns {Boolean} Returns true if a feature is enabled in the current account
 * @since Version 2009.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getFeature = function(name) { };

/**
 * Returns the internal ID of the currently logged in user's location
 * @returns {Number} The logged in user's location ID as an integer
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getLocation = function() { };

/**
 * Returns the script logging level for the current script execution. This method is not supported on client scripts.
 * @returns {String} The string value of the script log level. Possible values are DEBUG, AUDIT, ERROR, EMERGENCY
 * @since Version 2008.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getLogLevel = function() { };

/**
 * Returns the currently logged in user's name
 * @returns {String} The logged in user's name as a string
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getName = function() { };

/**
 * Return the % complete specified for the current scheduled script execution. The return value will appear in the <strong>%Complete</strong> column in the Scheduled Script Status page. Note that this method can only be called from scheduled scripts.
 * @returns {Number} The integer value of the percent complete field
 * @since Version 2009.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getPercentComplete = function() { };

/**
 * Use this method to get a user's permission level for a given permission. For information on working with NetSuite permissions, see the topic Understanding NetSuite Permissions in the NetSuite Help Center.
 * @param {String} name [required] - The internal ID of a permission. For a list of permission IDs, see Permission Names and IDs in the SuiteScript Reference Guide.
 * @returns {Number} The integer value of user's permission level for a given permission. Values <strong>4</strong> through <strong>0</strong> can be returned:
 * @since Version 2009.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getPermission = function(name) { };

/**
 * Use this method to get the value of a NetSuite preference. Currently only <strong>General Preferences</strong> and <strong>Accounting Preferences</strong> are exposed in SuiteScript. (You can view General Preferences by going to Setup > Company > General Preferences. View Accounting Preferences by going to Setup > Accounting > Accounting Preferences.)
 * <p>If you want to change the value of a General or Accounting preference using SuiteScript, you must load each preference page using nlapiLoadConfiguration(type), where name is either 'companypreferences' (for the General Preferences page) or 'accountingpreferences' (for the Accounting Preferences page). The nlapiLoadConfiguration API returns an nlobjRecord object, which lets you change preference values using the setFieldValuemethod. For additional details, see nlapiLoadConfiguration.
 * @param {String} name [required] - The internal ID of the preference. For a list of preference IDs, see Preference Names and IDs in the NetSuite Help Center.
 * @returns {String} The value of a system or script preference for the current user. The value can be T or F if the preference is a NetSuite checkbox field. The value can also be a string if the preference is a NetSuite dropdown field.
 * @since Version 2009.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getPreference = function(name) { };

/**
 * Returns the number of scheduled script queues in a given account.
 * <p>This method is helpful for SuiteApp developers who want to check for the number of queues in an account. If the consumer of the SuiteApp has purchased a SuiteCloud Plus license, a call to getQueueCount will return 5, meaning that the account has 5 scheduled script queues. A call to getQueueCount in accounts that do not have a SuiteCloud Plus licence will return 1, meaning the account has only 1 scheduled script queue. (Note that in some cases, an account may have two licenses supporting 10 queues, or three licenses supporting 15 queues.)
 * <p>Once you get the number back in script, you can make business logic decisions based on that number. For example, if you know an account has 5 queues, you can have more than 1 script deployment and distribute the processing load to more than 1 queue.
 * @returns The number of queues
 * @since Version 2013.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getQueueCount = function() { };

/**
 * Returns the remaining amount of unit usage for the current script
 * @returns {Number} The integer value of the remaining unit count
 * @since Version 2007.0
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getRemainingUsage = function() { };

/**
 * Returns the internal ID of the currently logged in user's role
 * @returns {String} The logged in user's role ID as a string
 * @since Version 2007.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getRole = function() { };

/**
 * Returns the internal ID of the currently logged in user's center type (role center)
 * @returns {String} The string value of the logged in user's center - for example, SALES, ACCOUNTING, CLASSIC. Note that the string value of a custom center can also be returned.
 * @since Version 2008.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getRoleCenter = function() { };

/**
 * Returns the custom scriptId of the role (as opposed to the internal numerical ID).
 * <p>When bundling a custom role, the internal ID number of the role in the target account can change after the bundle is installed. Therefore, in the target account you can use getRoleId to return the unique/custom scriptId assigned to the role.
 * @returns {String} Custom scriptId of a role as a string.
 * @since Version 2012.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getRoleId = function() { };

/**
 * Returns the scriptId for the currently executing script
 * @returns {String} The scriptId as a string
 * @since Version 2009.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getScriptId = function() { };

/**
 * Use this method to get the value of a user-defined session object for the current user.
 * @param {String} name [required] - The key used to store the session object
 * @returns {String} Returns the string value of a user-defined session object for the current user
 * @since Version 2009.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getSessionObject = function(name) { };

/**
 * Use this API to get a system or script setting. Note that if you want to get session, feature, or permission settings directly, you can also use these nlobjContext methods:
 * <ul>
 *     <li>getSessionObject(name)</li>
 *     <li>getFeature(name)</li>
 *     <li>getPermission(name)</li>
 * </ul>
 * @param {enumeratedString} type required] - The type of script/system setting. Possible values include:
 * <ul>
 *     <li><strong>SESSION</strong> - session variable (volatile setting defined per session). Supported in server scripts only. Important: The SESSION type value is not supported in Client SuiteScript.</li>
 *     <li><strong>FEATURE</strong> - returns T (enabled) or F (disabled) depending on whether a feature is enabled. Supported in client and server SuiteScript.
 *     <br>In the NetSuite Help Center, see Feature Names and IDs for feature names and internal IDs.</li>
 *     <li><strong>PERMISSION</strong> - returns permission level: 0 (none), 1 (view), 2 (create), 3 (edit), 4 (full). Supported in client and server SuiteScript.
 *     <br>In the NetSuite Help Center, see Permission Names and IDs for permission names and internal IDs.</li>
 *     <li><strong>SCRIPT</strong> - script parameter (defined per script). Supported in client and server SuiteScript. If you do not know what script parameters are in NetSuite, see Creating Script Parameters Overview.</li>
 * </ul>
 * @param {String} name [required]- The name of the script/system setting
 * @returns {String|Number} If type is specified as SCRIPT, SESSION, or FEATURE, a string value is returned. If type is specified as PERMISSION, an integer value is returned.
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getSetting = function(type, name) { };

/**
 * Returns the internal ID of the currently logged in user's subsidiary
 * @returns {Number} The logged in user's subsidiary ID as an integer
 * @since Version 2007.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getSubsidiary = function() { };

/**
 * Returns the currently logged in user's internal ID
 * @returns {String} The logged in user's ID as a string
 * @since Version 2007.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getUser = function() { };

/**
 * Returns the version of NetSuite that the method is called in. For example, if getVersion is executed in an account running NetSuite 2010.2, the value returned is <strong>2010.2</strong>. If getVersion is executed in an account running NetSuite 2010.1, the value returned is <strong>2010.1</strong>.
 * <p>This method may be helpful to those installing SuiteBundles in other NetSuite accounts, and wish to know the version number before installing the bundle.
 * @returns The NetSuite account version as a number - for example: 2010.2
 * @since Version 2010.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.getVersion = function() { };

/**
 * Sets the percent complete for the currently executing scheduled script. Note that this method can only be called from scheduled scripts.
 * @param {Number} pct [required] - The percentage of records completed
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjContext
 */
nlobjContext.prototype.setPercentComplete = function(pct) { };

/**
 * Use this method to add or set the value of a user-defined session object for the current user. This value is valid during the current user's login.
 * <p>This call allows the user to temporarily save something to the session before persisting it in a custom record.
 * @param {String} name [required] - The key used to store the session object
 * @param {String} value [required] - The value to associate with this key in the user's session
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjContext
 */
nlobjContext.prototype.setSessionObject = function(name, value) { };

/**
 * Sets the value of a script or user-defined setting. Only available in server scripts.
 * <ul>
 *     <li>type { enum string} [required] - The type of script/system setting</li>
 *     <li>name {string} [required]- The name of the script/system setting</li>
 *     <li>value {string} [required]- The new value for the script/system setting</li>
 * </ul>
 * @returns {Void}
 * @memberOf nlobjContext
 */
nlobjContext.prototype.setSetting = function(type, name, value) { };

/**
 * @param {constant} entityType [required] - Set to a constant value defined on the nlobjDuplicateJobRequest object. When you pass in the constant, your code should look like <nlobjDuplicateJobRequestInstance>.<constant>. The following are the constant values:
 * <ul>
 *     <li>ENTITY_CUSTOMER</li>
 *     <li>ENTITY_CONTACT</li>
 *     <li>ENTITY_LEAD</li>
 *     <li>ENTITY_PROSPECT</li>
 *     <li>ENTITY_PARTNER</li>
 *     <li>ENTITY_VENDOR</li>
 * </ul>
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjDuplicateJobRequest
 */
nlobjDuplicateJobRequest.prototype.setEntityType = function(entityType) { };

/**
 * @param {String} masterID [required] - Required and valid <strong>only</strong> if setMasterSelectionMode(mode) is set to MASTERSELECTIONMODE_SELECT_BY_ID
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjDuplicateJobRequest
 */
nlobjDuplicateJobRequest.prototype.setMasterId = function(masterID) { };

/**
 * @param {String} mode [required] - Set to a constant value defined on the nlobjDuplicateJobRequest object. When you pass in the constant, your code should look like <nlobjDuplicateJobRequestInstance>.<constant>. The following are the constant values:
 * <ul>
 *     <li>MASTERSELECTIONMODE_CREATED_EARLIEST</li>
 *     <li>MASTERSELECTIONMODE_MOST_RECENT_ACTIVITY</li>
 *     <li>MASTERSELECTIONMODE_MOST_POPULATED_FIELDS</li>
 *     <li>MASTERSELECTIONMODE_SELECT_BY_ID</li>
 * </ul>
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjDuplicateJobRequest
 */
nlobjDuplicateJobRequest.prototype.setMasterSelectionMode = function(mode) { };

/**
 * @param {String} operation [required] - Set to a constant value defined on the nlobjDuplicateJobRequest object. When you pass in the constant, your code should look like <nlobjDuplicateJobRequestInstance>.<constant>. The following are the constant values:
 * <ul>
 *     <li>OPERATION_MERGE</li>
 *     <li>OPERATION_DELETE</li>
 *     <li>OPERATION_MAKE_MASTER_PARENT</li>
 *     <li>OPERATION_MARK_AS_NOT_DUPES</li>
 * </ul>
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjDuplicateJobRequest
 */
nlobjDuplicateJobRequest.prototype.setOperation = function(operation) { };

/**
 * @param {Array} dupeRecords [required] - Array of records to be merged
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjDuplicateJobRequest
 */
nlobjDuplicateJobRequest.prototype.setRecords = function(dupeRecords) { };

/**
 * Use this method to perform a mail merge on an nlobjEmailMerger object (a scriptable email template) and the records designated with the nlobjEmailMerger  set methods. This method has a governance of 20 usage units.
 * @returns {nlobjMergeResult} An nlobjMergeResult object.
 * @throws SSS_MERGER_ERROR_OCCURRED � Thrown if the template merger fails.
 * @since Version 2015.1
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.merge = function() { };

/**
 * Use this method to designate a custom record to use in a mail merge.
 * @param {String} recordType [required] � the internal ID of the custom record type. For example, �customrecord_telco_customer�.
 * @param {String} recordId [required] � The internal ID of the custom record to use in the mail merge.
 * @returns Void
 * @throws SSS_INVALID_TYPE_ARG � Thrown if the recordType argument is invalid or missing.
 * @since Version 2015.1
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.setCustomRecord = function(recordType, recordId) { };

/**
 * @param {String} entityType [required] �
 * @param {String} customerId [required] �
 * @throws SSS_INVALID_TYPE_ARG � Thrown if the entityType argument is invalid or missing.
 * @throws SSS_MERGER_ERROR_OCCURRED � Thrown if the entity cannot be set.
 * @since Version 2015.1
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.setEntity = function(entityType, customerId) { };

/**
 * @param {String} recipientType [required] � The record type of the record to use in the mail merge. Use one of the following arguments:
 * <ul>
 *     <li>customer</li>
 *     <li>contact</li>
 *     <li>partner</li>
 *     <li>vendor</li>
 *     <li>employee</li>
 * </ul>
 * @param {String} recipientId [required] � The internal ID of the record to use in the mail merge.
 * @returns {Void}
 * @throws SSS_INVALID_TYPE_ARG � Thrown if the recipientType argument is invalid or missing.
 * @throws SSS_MERGER_ERROR_OCCURRED � Thrown if the recipient cannot be set.
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.setRecipient = function(recipientType, recipientId) { };

/**
 * @param {String} caseId [required] � The internal ID of the Case record to use in the mail merge.
 * @returns {Void}
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.setSupportCase = function(caseId) { };

/**
 * @param {String} transactionId [required] � the internal ID of the Transaction record to use in the mail merge.
 * @returns {Void}
 * @throws SSS_MERGER_ERROR_OCCURRED � Thrown if the transaction cannot be set.
 * @since Version 2015.1
 * @memberOf nlobjEmailMerger
 */
nlobjEmailMerger.prototype.setTransaction = function(transactionId) { };

/**
 * Returns the error code for this system or user-defined error
 * @returns {String} The error code as a string
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getCode = function() { };

/**
 * Returns the error message (user-defined or system) associated with this error
 * @returns {String} The string value of the error message
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getDetails = function() { };

/**
 * Returns an error reference ID. If you have included a catch block in your code, you can use getId() to get the internal reference number for an unexpected error. This method is useful if you want to keep your own log of error numbers or you want to email the value of getId() to someone else.
 * <p>Also note that if you have to call Technical Support to help you resolve a SuiteScript issue, this ID may be helpful to your Support rep in diagnosing the problem.
 * @returns {String} The error ID as a string
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getId = function() { };

/**
 * Returns the internal ID of the submitted record if this error was thrown in an <strong>afterSubmit</strong> script
 * @returns {Number} The the internal ID of the submitted record as an integer
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getInternalId = function() { };

/**
 * Returns the stacktrace containing the location of the error
 * @returns {Array} String[]
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getStackTrace = function() { };

/**
 * Return the name of the user event script (if applicable) that the error was thrown from.
 * @returns {String} The string value of the user event that threw the error - for example, beforeLoad, beforeSubmit, or afterSubmit
 * @since Version 2008.2
 * @memberOf nlobjError
 */
nlobjError.prototype.getUserEvent = function() { };

/**
 * Adds a select option to a SELECT field
 * @param {String} value [required] - The internal ID of this select option
 * @param {String} text [required] - The UI label for this option
 * @param {Boolean} selected [optional] - If true, then this option is selected by default
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.addSelectOption = function(value, text, selected) { };

/**
 * Returns field UI label
 * @returns {String} String value of the field's UI label
 * @since Version 2009.1
 * @memberOf nlobjField
 */
nlobjField.prototype.getLabel = function() { };

/**
 * Returns the field internal ID
 * @returns {String} String value of a field's internal ID
 * @since Version 2009.1
 * @memberOf nlobjField
 */
nlobjField.prototype.getName = function() { };

/**
 * Use this API to obtain a list of available options on a select field. This API can be used on both standard and custom select fields. Only the first 1,000 available options will be returned by this API.
 * <p>This method can only be used in server contexts against a record object. Also note that a call to this method may return different results for the same field for different roles.
 * <p>If you attempt to get select options on a field that is not a select field, or if you reference a field that does not exist on the form, null is returned.
 * @param {String} filter [optional] - A search string to filter the select options that are returned. For example, if there are 50 select options available, and 10 of the options contains 'John', e.g. �John Smith� or �Shauna Johnson�, only those 10 options will be returned.
 * @param {String} filteroperator [optional] - Supported operators are <strong>contains</strong> | <strong>is</strong> | <strong>startswith</strong>. If not specified, defaults to the <strong>contains</strong> operator.
 * @returns {array} An array of nlobjSelectOption objects. These objects represent the key-value pairs representing a select option (for example: <strong>87, Abe Simpson</strong> ).
 * @since Version 2009.2
 * @memberOf nlobjField
 */
nlobjField.prototype.getSelectOptions = function(filter, filteroperator) { };

/**
 * Returns the field type - for example, text, date, currency, select, checkbox, etc.
 * @returns {String} String value of field's SuiteScript type
 * @since Version 2009.1
 * @memberOf nlobjField
 */
nlobjField.prototype.getType = function() { };

/**
 * Sets the alias used to set the value for this field. By default the alias is equal to the field's name. The method is only supported on scripted fields via the UI Object API.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setAlias = function(alias) { };

/**
 * Use this method to set the layout type for a field and optionally the break type. This method is only supported on scripted fields that have been created using the UI Object API.
 * @returns {nlobjField} nlobjField
 * @since Version 2009.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setBreakType = function(breaktype) { };

/**
 * Sets the default value for this field. This method is only supported on scripted fields via the UI object API.
 * @param {String} value [required] - The default value for this field. Note that if you pass an empty string, the field will default to a blank field in the UI.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setDefaultValue = function(value) { };

/**
 * Sets the height and width for the field. Only supported on multi-selects, long text, rich text, and fields that get rendered as INPUT (type=text) fields. This API is not supported on list/record fields. This method is only supported on scripted fields via the UI object API.
 * @param {Number} width [required]- The width of the field (cols for textarea, characters for all others)
 * @param {Number} height [optional]- The height of the field (rows for textarea and multiselect fields)
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setDisplaySize = function(width, height) { };

/**
 * Sets the display type for this field.
 * <p>Be aware that this method cannot be used in <strong>client</strong> scripts. In other words, if you use nlapiGetField(fldnam) in a client script to return a field object that has been added to a form, you cannot use setDisplayType to set the field's display type. The nlobjField object returned from nlapiGetField(fldnam) is <strong>read-only</strong>.
 * @param {enumString} type [required]- The display type for this field
 * <ul>
 *     <li>inline - This makes the field display as inline text</li>
 *     <li>hidden - This hides the field on the form.</li>
 *     <li>readonly - This disables the field but it is still selectable and scrollable (for textarea fields)</li>
 *     <li>entry - This makes the sublist field appear as a data entry input field (for non checkbox, select fields)</li>
 *     <li>disabled - This disables the field from user-changes</li>
 *     <li>normal - (default) This makes the field appear as a normal input field (for non-sublist fields)</li>
 * </ul>
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setDisplayType = function(type) { };

/**
 * Use this method to set help text for this field.
 * @param {String} help [required]- Help text for the field. When the field label is clicked, a field help popup will open to display the help text.
 * @param {Boolean} inline [optional]- If not set, defaults to false. This means that field help will appear <strong>only</strong> in a field help popup box when the field label is clicked. If set to true, field help will display in a field help popup box, as well as inline below the field (see figure).
 * @returns {nlobjField} nlobjField
 * @since Version 2009.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setHelpText = function(help, inline) { };

/**
 * Sets the UI label for this field. The method is available only on scripted fields via the UI object API.
 * @param {String} label [required]- The UI label used for this field
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setLabel = function(label) { };

/**
 * Sets the display type for this field and optionally the break type. This method is only supported on scripted fields via the UI Object API.
 * @param {enumString} type [required] - The layout type for this field. Use any of the following layout types:
 * <ul>
 *     <li>outside - This makes the field appear outside (above or below based on form default) the normal field layout area</li>
 *     <li>outsidebelow - This makes the field appear below the normal field layout area</li>
 *     <li>outsideabove - This makes the field appear above the normal field layout area</li>
 *     <li>startrow - This makes the field appear first in a horizontally aligned field group in normal field layout flow</li>
 *     <li>midrow - This makes the field appear in the middle of a horizonatally aligned field group in normal field layout flow</li>
 *     <li>endrow - This makes the field appear last in a horizonatally aligned field group in normal field layout flow</li>
 *     <li>normal - (default)</li>
 * </ul>
 * @param {String} breaktype [required] - The layout break type. Use any of the following break types.
 * <ul>
 *     <li>startcol - This starts a new column (also disables automatic field balancing if set for any field)</li>
 *     <li>startrow - For outside fields, this places the field on a new row</li>
 *     <li>none - (default)</li>
 * </ul>
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setLayoutType = function(type, breaktype) { };

/**
 * Sets the text that gets displayed in lieu of the field value for URL fields.
 * @param {String} text [required] - The displayed value (in lieu of URL)
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setLinkText = function(text) { };

/**
 * Sets the field to mandatory. The method is only supported on scripted fields via the UI Object API.
 * @param {Boolean} mandatory [required]- If true, then the field will be defined as mandatory
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setMandatory = function(mandatory) { };

/**
 * Sets the max length for this field (only valid for text, rich text, long text, and textarea fields). This method is only supported on scripted fields via the UI Object API.
 * @param {Number} maxlength [required]- The max length for this field
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setMaxLength = function(maxlength) { };

/**
 * Sets the number of empty field spaces before/above this field. This method is only supported on scripted fields via the UI Object API.
 * @param {Number} padding [required] - The number of empty vertical spaces (rows) before this field
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjField
 */
nlobjField.prototype.setPadding = function(padding) { };

/**
 * If <strong>Rich Text Editing</strong> is enabled, you can use this method to set the height of the rich text field only. You can set a separate height for the text area using setDisplaySize(). When setting the height, the minimum value is 100 pixels and the maximum value is 500 pixels.
 * <p>For information on enabling the Rich Text Editor, see Setting Preferences for Appearances.
 * @param {Number} height [optional]- The height of the field (pixels).
 * @returns {nlobjField} nlobjField
 * @since Version 2015.1
 * @memberOf nlobjField
 */
nlobjField.prototype.setRichTextHeight = function(height) { };

/**
 * If <strong>Rich Text Editing</strong> is enabled, you can use this method to set the width of the rich text field only. You can set a separate width of the text area using setDisplaySize(). When setting the width, the minimum value is 250 pixels and the maximum value is 800 pixels.
 * <p>For information on enabling the Rich Text Editor, see Setting Preferences for Appearances
 * @param {Number} width [optional]- The width of the field (pixels).
 * @returns {nlobjField} nlobjField
 * @since Version 2015.1
 * @memberOf nlobjField
 */
nlobjField.prototype.setRichTextWidth = function(width) { };

/**
 * Use this method to define whether a field group can be collapsed. You can also use this method to define if the field group will display as collapsed or expanded when the page first loads.
 * @param {Boolean} collapsible [required] - A value of true means that the field group can be collapsed. A value of false means that the field group cannot be collapsed - the field group displays as a static group that cannot be opened or closed.
 * @param {Boolean} hidden [optional] - If not set, defaults to false. This means that when the page loads, the field group will not appear collapsed. Note: If you set the collapsible parameter to false (meaning the field group is not collapsible), then any value you specify for hidden will be ignored.
 * @returns {nlobjFieldGroup} nlobjFieldGroup
 * @since Version 2009.2
 * @memberOf nlobjFieldGroup
 */
nlobjFieldGroup.prototype.setCollapsible = function(collapsible, hidden) { };

/**
 * Use this method to create a UI label for a field group.
 * @param {String} label [required] - The UI label for the field group
 * @returns {nlobjFieldGroup} nlobjFieldGroup
 * @since Version 2009.2
 * @memberOf nlobjFieldGroup
 */
nlobjFieldGroup.prototype.setLabel = function(label) { };

/**
 * Use this method to conditionally show or hide the border of a field group. A field group border consists of the field group title and the gray line that frames the group by default.
 * @param {Boolean} show [required] - Set to true to show a field group border. Set to false to hide the border.
 * @returns {Void}
 * @since Version 2011.1
 * @memberOf nlobjFieldGroup
 */
nlobjFieldGroup.prototype.setShowBorder = function(show) { };

/**
 * Use this method to determine how your field group is aligned. You can choose to align it into a single column or allow NetSuite to auto-align it.
 * @param {Boolean} column [required] - Set to true to place all fields in the field group into a single column. Set to false to allow NetSuite to auto-align your field group fields into one, two, or three columns, depending on the number of fields and the width of your screen.
 * @returns {Void}
 * @since Version 2011.1
 * @memberOf nlobjFieldGroup
 */
nlobjFieldGroup.prototype.setSingleColumn = function(column) { };

/**
 * @returns {String} The string description of the file. This is the description that appears in the Description field on the folder or file record.
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getDescription = function() { };

/**
 * Returns the character encoding of a file. NetSuite supports the following encoding types:
 * <ul>
 *     <li>Unicode (UTF-8)</li>
 *     <li>Western (Windows 1252)</li>
 *     <li>Western (ISO-8859�1)</li>
 *     <li>Chinese Simplified (GB 18030)</li>
 *     <li>Japanese (Shift-JIS)</li>
 *     <li>Western (Mac Roman)</li>
 *     <li>Chinese Simplified (GB 2312)</li>
 *     <li>Chinese Traditional (Big5)</li>
 * </ul>
 * @returns One of the following values:
 * <ul>
 *     <li>UTF-8</li>
 *     <li>windows-1252</li>
 *     <li>ISO-8859-1</li>
 *     <li>GB18030</li>
 *     <li>SHIFT_JIS</li>
 *     <li>MacRoman</li>
 *     <li>GB2312</li>
 *     <li>Big5</li>
 * </ul>
 * @since Version 2010.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getEncoding = function() { };

/**
 * @returns {Number} Integer: The internal ID of the file's folder within the NetSuite file cabinet, for example <strong>10, 2</strong>, etc.
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getFolder = function() { };

/**
 * Returns the internal ID of the file (if the file is stored in the NetSuite file cabinet)
 * @returns {Number} The integer value of file ID, for example <strong>8, 108</strong>, <strong>11</strong>, etc. This is the ID that appears in the <strong>Internal ID</strong> column next to the file in the file cabinet.
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getId = function() { };

/**
 * Returns the name of the file
 * @returns {String} The string value of the file name
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getName = function() { };

/**
 * Returns the size of the file in bytes
 * @returns {Number} The integer value of the file size
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getSize = function() { };

/**
 * Returns the type of the file
 * @returns {String} The string value of the file type - for example, PDF, CSV, PLAINTEXT. (For a list of supported file type IDs, see Supported File Types . )
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getType = function() { };

/**
 * Returns the URL to the file if it is stored in the NetSuite file cabinet
 * @returns {String} The URL as a string
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getURL = function() { };

/**
 * Returns the contents of the file (base 64 encoded for binary files).
 * <p>Important: This method is only supported on files up to 5MB in size.
 * @returns {String} The string value of the file contents
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.getValue = function() { };

/**
 * @returns {Boolean} Boolean: The file's inactive status as either true or false. Returns true if the file is inactive.
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.isInactive = function() { };

/**
 * @returns {Boolean} Boolean: The file's online status as either true or false. Returns true if the file is �Available without Login.�
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.isOnline = function() { };

/**
 * Sets the description of the file
 * @param {String} description [required] - A description of the file. This description will appear in the Description field on the folder or file record.
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setDescription = function(description) { };

/**
 * Sets the character encoding of a file. The following types are supported when setting the encoding for new and existing files:
 * <ul>
 *     <li>Unicode (UTF-8)</li>
 *     <li>Western (Windows 1252)</li>
 *     <li>Western (ISO-8859�1)</li>
 *     <li>Chinese Simplified (GB 18030)</li>
 *     <li>Japanese (Shift-JIS)</li>
 *     <li>Western (Mac Roman)</li>
 * </ul>
 * <p>The following types are supported when setting the encoding for existing files:
 * <ul>
 *     <li>Chinese Simplified (GB 2312)</li>
 *     <li>Chinese Traditional (Big5)</li>
 * </ul>
 * @param {String} encodingType [required] - The type of encoding for the file. Use one of the following case sensitive values:
 * <ul>
 *     <li>UTF-8</li>
 *     <li>windows-1252</li>
 *     <li>ISO-8859-1</li>
 *     <li>GB18030</li>
 *     <li>SHIFT_JIS</li>
 *     <li>MacRoman</li>
 *     <li>GB2312</li>
 *     <li>Big5</li>
 * </ul>
 * @returns {Void}
 * @since Version 2010.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setEncoding = function(encodingType) { };

/**
 * Sets the internal ID of the folder that the file is in
 * @param {Number} id [required] - The internal ID of the file's folder, for example <strong>10, -4</strong>, <strong>20</strong>, etc.
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setFolder = function(id) { };

/**
 * Sets the file's inactive status. When you inactive a file or folder, it no longer appears on lists unless (in the UI) you have selected the <strong>Show Inactives</strong> check box.
 * @param {Boolean} inactive [required] - The file's inactive status. Set to true to inactive the file. Set to false to make the file active.
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setIsInactive = function(inactive) { };

/**
 * Sets the file's online (�Available without Login�) status. When a file is online, other users can download the file without a login session. This means you can upload images, MP3, or any other file type to the file cabinet and give other users the file URL without giving them access to the account.
 * @param {Boolean} online [required] - The file's updated online status. Set to true to make the file available online. Set to false if you do not want the file available online.
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setIsOnline = function(online) { };

/**
 * Sets the name of the file
 * @param {String} name [required]- The name of the file
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjFile
 */
nlobjFile.prototype.setName = function(name) { };

/**
 * Adds a button to a form
 * @param {String} name [required] - The internal ID name of the button. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the button to an existing page. For example, if you add a button that appears as <strong>Update Order</strong>, the button internal ID should be something similar to <strong>custpage</strong>_updateorder.
 * @param {String} label [required] - The UI label used for this button
 * @param {String} script [optional]- The onclick script used for this button
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addButton = function(name, label, script) { };

/**
 * Adds a field that lets you store credentials in NetSuite to be used when invoking services provided by third parties. For example, merchants need to store credentials in NetSuite used to communicate with Payment Gateway providers when executing credit card transactions.
 * <p>This method is supported in client and server scripts.
 * <p>Additional things to note about this method:
 * <ul>
 *     <li>Credentials associated with this field are stored in encrypted form.</li>
 *     <li>No piece of SuiteScript holds a credential in clear text mode.</li>
 *     <li>NetSuite reports or forms will never provide to the end user the clear text form of a credential.</li>
 *     <li>Any exchange of the clear text version of a credential with a third party must occur over SSL.</li>
 *     <li>For no reason will NetSuite ever log the clear text value of a credential (for example, errors, debug message, alerts, system notes, and so on).</li>
 * </ul>
 * @param {String} id [required] - The internal ID of the credential field.
 * @param {String} label [required] - The UI label for the credential field.
 * @param {String} website [optional] - The domain the credentials can be sent to. For example, 'www.mysite.com'.
 * @param {String} scriptId [optional] - The scriptId of the script that is allowed to use this credential field. For example, 'customscript_my_script'.
 * @param {String} value [optional] - If you choose, you can set an initial value for this field. This value is the handle to the credentials.
 * @param {Boolean} entityMatch [optional] - Controls whether use of nlapiRequestUrlWithCredentials with this credential is restricted to the same entity that originally entered the credential. An example where you would not want this (you would set to false ) is with a credit card processor, where the credential represents the company an employee is working for and multiple entities will be expected to make secure calls out to the processor (clerks, for example). An example where you might want to set entityMatch to true is when each user of the remote call has his or her own credentials.
 * @param {String} tab [optional] - The tab parameter can be used to specify either a tab or a field group (if you have added nlobjFieldGroup objects to your form). If tab is empty, then the field is added to the �main� section of the form.
 * @returns {nlobjField} nlobjField object
 * @since Version 2012.1
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addCredentialField = function(id, label, website, scriptId, value, entityMatch, tab) { };

/**
 * Adds an nlobjField object to a form and returns a reference to it
 * @param {String} name [required] - The internal ID name of the field. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the field to an existing page. For example, if you add a field that appears as Purchase Details, the field internal ID should be something similar to custpage_purchasedetails or custpage_purchase_details.
 * @param {enumString} type [required] - The field type for this field. Use any of the following enumerated field types:
 * <ul>
 *     <li>text</li>
 *     <li>radio - See Working with Radio Buttons for details on adding this field type.</li>
 *     <li>label - This is a field type that has no values. It is used for placing a label next to another field. In Working with Radio Buttons, see the first code sample that shows how to set this field type and how it will render in the UI.</li>
 *     <li>email</li>
 *     <li>phone</li>
 *     <li>date</li>
 *     <li>datetimetz - This field type lets you combine date and time values in one field. For example, you may want a single field to contain date and time �timestamp� data. After a user enters a date/time value, the data is rendered in the user's preferred date and time format, as well as the user's time zone. Also note that time values are stored in NetSuite down to the second.</li>
 *     <li>currency</li>
 *     <li>float</li>
 *     <li>integer</li>
 *     <li>checkbox</li>
 *     <li>select</li>
 *     <li>url - See Create a Form with a URL Field for an example how to use this type.</li>
 *     <li>timeofday</li>
 *     <li>textarea</li>
 *     <li>multiselect</li>
 *     <li>image - This field type is available <strong>only</strong> for fields appearing on list/staticlist sublists. You cannot specify an image field on a form.</li>
 *     <li>inlinehtml</li>
 *     <li>password</li>
 *     <li>help</li>
 *     <li>percent</li>
 *     <li>longtext</li>
 *     <li>richtext</li>
 *     <li>file - This field type is available only for Suitelets and will appear on the main tab of the Suitelet page. Setting the field type to <strong>file</strong> adds a file upload widget to the page and changes the form encoding type for the form to multipart/form-data. See Uploading Files to the File Cabinet Using SuiteScript for an example of creating a <strong>file</strong> field type, and then later retrieving this file using the nlobjRequest.getFile(id) method.</li>
 * </ul>
 * @param {String} label [optional] - The UI label for this field (this is the value displayed for help fields)
 * @param {Number|String} source [optional] - The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field. See List/Record Type IDs for the internal IDs of all supported list/record types.
 * @param {String} tab [optional]- The tab parameter can be used to specify either a tab or a field group (if you have added nlobjFieldGroup objects to your form). If tab is empty, then the field is added to the �main� section of the form.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addField = function(name, type, label, sourceOrRadio, tab) { };

/**
 * Adds a field group to the form.
 * @param {String} name [required] - Provide an internal ID for the field group.
 * @param {String} label [required] - The UI label for the field group
 * @param {String} tab [optional] - Specify the tab you the field group to appear on. If no tab is specified, the field group is placed on the �main� area of the form.
 * @returns {nlobjFieldGroup} nlobjFieldGroup
 * @since Version 2011.1
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addFieldGroup = function(name, label, tab) { };

/**
 * Adds a navigation cross-link to the form
 * @param {enumString} type [required] - The type of navbar link to add. Possible values include:
 * <ul>
 *     <li>breadcrumb - appears on top left corner after system bread crumbs</li>
 *     <li>crosslink - appears on top right corner</li>
 * </ul>
 * @param {String} title [required] - The text displayed in the link
 * @param {String} url [required] - The URL used for this link
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addPageLink = function(type, title, url) { };

/**
 * Adds a reset button to a form
 * @param {String} label [optional]- The UI label used for this button. If no label is provided, the label defaults to <strong>Reset</strong>.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addResetButton = function(label) { };

/**
 * Adds an nlobjSubList object to a form and returns a reference to it. Note that sorting (in the UI) is not supported on static sublists created using the addSubList() method if the row count exceeds 25.
 * @param {String} name [required] - The internal ID name of the sublist. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the sublist to an existing page. For example, if you add a sublist that appears on the UI as Purchase Details, the sublist internal ID should be something equivalent to custpage_purchasedetails or custpage_purchase_details.
 * @param {enumString} type [required] - The sublist type. Use any of the following types:
 * <ul>
 *     <li>editor - An edit sublist with non-inline form fields (similar to the Address sublist)</li>
 *     <li>inlineeditor - An edit sublist with inline fields (similar to the Item sublist)</li>
 *     <li>list - A list sublist with editable fields (similar to the Billable Items sublist)</li>
 *     <li>staticlist - A read-only segmentable list sublist (similar to the search results sublist)</li>
 * </ul>
 * @param {String} label [required] - The UI label for this sublist
 * @param {String} tab [optional] - The tab under which to display this sublist. If empty, the sublist is added to the main tab.
 * @returns {nlobjSubList} nlobjSubList
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addSubList = function(name, type, label, tab) { };

/**
 * Adds a subtab to a form and returns an nlobjTab object reference to it.
 * <p>Important: If you add only one subtab, the UI label you define for the subtab will not appear in the UI. You must define two subtabs for subtab UI labels to appear.
 * @param {String} name [required] - The internal ID name of the subtab. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the subtab to an existing page. For example, if you add a subtab that appears on the UI as <strong>Purchase Details</strong>, the subtab internal ID should be something similar to custpage_purchasedetails or custpage_purchase_details.
 * @param {String} label [required] - The UI label of the subtab
 * @param {String} tab [optional] - The tab under which to display this subtab. If empty, it is added to the main tab.
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addSubTab = function(name, label, tab) { };

/**
 * Adds a submit button to a form
 * @param {String} label [optional] - The UI label for this button. If no label is provided, the label defaults to <strong>Save</strong>.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addSubmitButton = function(label) { };

/**
 * Adds a tab to a form and returns an nlobjTab object reference to the tab
 * @param {String} name [required] - The internal ID name of the tab. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the tab to an existing page. For example, if you add a tab that appears on the UI as <strong>Purchase Details</strong>, the tab internal ID should be something equivalent to custpage_purchasedetails or custpage_purchase_details.
 * @param {String} label [required] - The UI label of the tab
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.addTab = function(name, label) { };

/**
 * Returns an nlobjButton object by name
 * @param {String} name [required] - The internal ID of the button. Internal IDs must be in lowercase and contain no spaces.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getButton = function(name) { };

/**
 * Returns an nlobjField object by name
 * @param {String} name [required] - The internal ID name of the field. Internal ID names must be in lowercase and contain no spaces.
 * @param {String} radio - If this is a radio field, specify which radio field to return based on the radio value.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getField = function(name, radio) { };

/**
 * Returns an nlobjSubList object by name
 * @param {String} name [required] - The internal ID name of the sublist. Internal ID names must be in lowercase and contain no spaces.
 * @returns {nlobjSubList} nlobjSubList
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getSubList = function(name) { };

/**
 * Returns an nlobjTab object by name
 * @param {String} name [required] - The internal ID name of the subtab. Internal ID names must be in lowercase and contain no spaces.
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getSubTab = function(name) { };

/**
 * Returns an nlobjTab object by name
 * @param {String} name [required] - The internal ID name of the tab. Internal ID names must be in lowercase and contain no spaces.
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getTab = function(name) { };

/**
 * Returns an array of nlobjTab objects containing all the tabs in a form.
 * @returns {nlobjTab[]} nlobjTab[]
 * @since Version 2012.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.getTabs = function() { };

/**
 * Inserts a field (nlobjField) in front of another field and returns a reference to it
 * @param {nlobjField} field [required] - nlobjField object to insert
 * @param {String} nextfield [required] - The name of the field you are inserting in front of
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.insertField = function(field, nextfld) { };

/**
 * Inserts a sublist (nlobjSubList) in front of another sublist/subtab and returns a reference to it
 * @param {nlobjSubList} sublist [required]- nlobjSubList object to insert
 * @param {String} nextsub [required] - The internal ID name of the sublist/subtab you are inserting in front of
 * @returns {nlobjSubList} nlobjSubList
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.insertSubList = function(sublist, nextsub) { };

/**
 * Inserts a subtab (nlobjTab) in front of another sublist/subtab and returns a reference to it
 * @param {String} name [required] - The internal ID name of the subtab. Internal ID names must be in lowercase and contain no spaces. (Yang to verify)
 * @param {String} nextsub [required] - The name of the sublist/subtab you are inserting in front of
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.insertSubTab = function(subtab, nextsub) { };

/**
 * Inserts a tab (nlobjTab) in front of another tab and returns a reference to it
 * @param {nlobjTab} tab [required] - nlobjTab object to insert
 * @param {String} nexttab [required] - The tab name for the tab you are inserting in front of
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.insertTab = function(tab, nexttab) { };

/**
 * Removes an nlobjButton object. This method can be used on custom buttons and certain built-in NetSuite buttons. For a list of built-in buttons that support this method, see the list of buttons in the section Button IDs in the NetSuite Help Center.
 * @param {String} name [required] - The internal ID of the button to be removed. Internal IDs must be in lowercase and contain no spaces.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.removeButton = function(name) { };

/**
 * Sets the values of multiple fields on the current form. This API can be used in beforeLoad scripts to initialize field scripts on new records or non-stored fields. (See User Event beforeLoad Operations in the NetSuite Help Center for information on beforeLoad user event triggers.)
 * @param {Object<String,String>} values [required] - An associative array containing name/value pairs, which maps field names to field values
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.setFieldValues = function(values) { };

/**
 * Sets the Client SuiteScript file used for this form
 * @param {String|Number} script [required] - The scriptId or internal ID for the global client script used to enable Client SuiteScript on this form
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.setScript = function(script) { };

/**
 * Sets the title for this form
 * @param {String} title [required] - The title used for this form
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjForm
 */
nlobjForm.prototype.setTitle = function(title) { };

/**
 * @returns {Boolean} - for merge duplicate records, will always returns false
 * @since Version 2013.1
 * @memberOf nlobjFuture
 */
nlobjFuture.prototype.isCancelled = function() { };

/**
 * @returns {Boolean} - true if job has finished
 * @since Version 2013.1
 * @memberOf nlobjFuture
 */
nlobjFuture.prototype.isDone = function() { };

/**
 * @returns {nlobjDuplicateJobRequest} nlobjDuplicateJobRequest
 * @since Version 2013.1
 * @memberOf nlobjJobManager
 */
nlobjJobManager.prototype.createJobRequest = function() { };

/**
 * Use to return a nlobjFuture object. Then use the methods on the nlobFuture object to check the status of the job. Note that a call to getFuture costs 5 governance units.
 * @returns {nlobjFuture} nlobjFuture
 * @since Version 2013.1
 * @memberOf nlobjJobManager
 */
nlobjJobManager.prototype.getFuture = function() { };

/**
 * Use to submit your job request. When submitting a �merge duplicates� job, the maximum size of your job can be 200 record.
 * <p>Be aware that submitting a job places the job into the NetSuite work queue for processing. Submitting a job does not mean that the job is executed right away.
 * @param {Object} nlobjDuplicateJobRequest [required] - The job you want to submit
 * @returns The jobID is returned if the job is successfully submitted
 * @since Version 2013.1
 * @memberOf nlobjJobManager
 */
nlobjJobManager.prototype.submit = function(nlobjDuplicateJobRequest) { };

/**
 * Adds an nlobjButton object to the footer of the page
 * @param {String} name [required] - The internal ID name of the button. Internal ID names must be in lowercase and contain no spaces. For example, if you add a button that appears on the UI as Update Order, the internal ID should be something equivalent to updateorder.
 * @param {String} type [required] - The UI label used for this button
 * @param {String} script [optional] - The onclick button script function name
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.addButton = function(name, label, script) { };

/**
 * Adds an nlobjColumn object to a list and returns a reference to this column
 * @param {String} name [required] - The internal ID name of this column. Note that internal ID names must be in lowercase and contain no spaces.
 * @param {String} type [required]- The field type for this column
 * @param {String} label [required] - The UI label for this column
 * @param {String} align [optional] - The layout justification for this column. Possible values include:
 * <ul>
 *     <li>center</li>
 *     <li>right</li>
 *     <li>left (default)</li>
 * </ul>
 * @returns {nlobjColumn} nlobjColumn
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.addColumn = function(name, type, label, align) { };

/**
 * Adds an Edit or Edit/View column to Portlets (created with the nlobjPortlet object) and Suitelet and Portlet lists (created with the nlobjList object). Note that the Edit or Edit/View column will be added to the left of a previously existing column.
 * <p>This figure shows Edit | View links added to a Portlet. These links appear to the left of the Due Date column.
 * @param {nlobjColumn} column [required] - An nlobjColumn object to the left of which the Edit/View column will be added
 * @param {Boolean} showView [optional] - If true then an Edit/View column will be added. Otherwise only an Edit column will be added.
 * @param {Boolean} showHrefCol [optional] - If set, this value must be included in row data provided for the list and will be used to determine whether the URL for this link is clickable (specify T for clickable, F for non-clickable)
 * @returns {nlobjColumn} nlobjColumn
 * @since Version 2008.1
 * @memberOf nlobjList
 */
nlobjList.prototype.addEditColumn = function(column, showView, showHrefCol) { };

/**
 * Adds a navigation cross-link to the list page
 * @param {enumString} type [required] - The type of navbar link to add. Use any of the following types:
 * <ul>
 *     <li>breadcrumb - appears on top-left corner after system bread crumbs</li>
 *     <li>crosslink - appears on top-right corner</li>
 * </ul>
 * @param {String} title [required] - The UI text displayed in the link
 * @param {String} url [required] - The URL used for this link
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.addPageLink = function(type, title, url) { };

/**
 * Adds a row (Array of name/value pairs or nlobjSearchResult) to this portlet.
 * @param {Object<String,String>|nlobjSearchResult} row [required] - An Array of rows containing name/value pairs containing the values for corresponding nlobjColumn objects in this list -or- an nlobjSearchResult. Note that several special fields: recordtype, id, and fieldname_display (UI display value for select fields) are automatically added for each search result.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.addRow = function(row) { };

/**
 * Adds multiple rows (Array of nlobjSearchResult objects or name/value pair Arrays) to a portlet.
 * @param {Array|Array} rows [required] - An Array of Arrays containing name/value pairs containing column values for multiple rows -or- an Array of nlobjSearchResult objects containing the results of a search with columns matching the columns on the list.
 * Note: For search result data sources, the id and recordType fields are automatically populated for non-summary searches. In addition, search fields are automatically mapped to columns using the following naming convention: name(_join)?(_summary)?(_display)? where join is the join ID, summary is the summary type, and display is used to denote the display value for SELECT return fields.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.addRows = function(rows) { };

/**
 * Sets the Client SuiteScript used for this page.
 * @param {String,Number} script [required] - scriptId or internal ID for global client script used to enable Client SuiteScript on page
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.setScript = function(script) { };

/**
 * Sets the display style for this list
 * @param {enumString} style [required] - The display style value. Use any of the following styles:
 * <ul>
 *     <li>grid</li>
 *     <li>report</li>
 *     <li>plain</li>
 *     <li>normal</li>
 * </ul>
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.setStyle = function(style) { };

/**
 * Sets the title for this list
 * @param {String} title [required] - The title for a list
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjList
 */
nlobjList.prototype.setTitle = function(title) { };

/**
 * Sets the logged-in user's email address to a new one.
 * @param {String} currentPassword [required] - The current password of the logged-in user. If a valid value is not specified, an error will be thrown.
 * @param {String} newEmail [required] - The new email address for the logged-in user. If a valid value is not specified, an error will be thrown.
 * @param {Boolean} justThisAccount [optional] - If not set, this argument defaults to true. If set to true, the email address change is applied only to roles within the current account. If set to false, the email address change is applied to all accounts and roles.
 * @since Version 2012.2
 * @memberOf nlobjLogin
 */
nlobjLogin.prototype.changeEmail = function(currentPassword, newEmail, justThisAccount) { };

/**
 * Sets the logged-in user's password to a new one.
 * @param {String} currentPassword [required] - The current password of the logged-in user. If a valid value is not specified, an error will be thrown.
 * @param {String} newPassword [required] - The new password for the logged-in user. If a valid value is not specified, an error will be thrown.
 * @since Version 2012.2
 * @memberOf nlobjLogin
 */
nlobjLogin.prototype.changePassword = function(currentPassword, newPassword) { };

/**
 * Use this method to get the body of the email distribution in string format.
 * @returns {String} A string
 * @memberOf nlobjMergeResult
 */
nlobjMergeResult.prototype.getBody = function() { };

/**
 * Use this method to get the subject of the email distribution in string format.
 * @returns {String} A string
 * @memberOf nlobjMergeResult
 */
nlobjMergeResult.prototype.getSubject = function() { };

/**
 * Get the column alias.
 * @returns {String} The column alias.
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getAlias = function() { };

/**
 * Get the column dependency.
 * @returns object - Assistant properties
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getDependency = function(alias) { };

/**
 * Get the column label.
 * @returns {String} Column label
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getLabel = function() { };

/**
 * Get the parent column.
 * @returns {nlobjPivotColumn} nlobjPivotColumn - Null if it does not exist
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getParent = function() { };

/**
 * Get the summary line.
 * @returns {nlobjPivotColumn} nlobjPivotColumn - Summary line if it exists, otherwise null
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getSummaryLine = function() { };

/**
 * Get the value of the column.
 * @returns object - The value of this column
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getValue = function() { };

/**
 * Get any defined children columns.
 * @returns {nlobjPivotColumn[]} nlobjPivotColumn[] - Null if no children columns exist
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.getVisibleChildren = function() { };

/**
 * Checks if the column is hidden.
 * @returns {Boolean} True if the column is hidden
 * @since Version 2012.2
 * @memberOf nlobjPivotColumn
 */
nlobjPivotColumn.prototype.isHidden = function() { };

/**
 * Get the row alias.
 * @returns {String} The row alias.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getAlias = function() { };

/**
 * Get the children rows if there are any.
 * @returns {nlobjPivotRow[]} nlobjPivotRow[] - Null if the row is a detail line or if there are no children.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getChildren = function() { };

/**
 * Get the dependant row of the given column alias.
 * string - Alias of the column
 * @returns object - Null if the row is a detail line
 * nlobjPivotColumn
 * @param {String} alias - Alias of the column
 * @returns {Object} Null if the row is not a detail line
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getDependency = function(alias) { };

/**
 * Get the row label.
 * @returns {String} The row label.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getLabel = function() { };

/**
 * Get the opening line from the report.
 * @returns {nlobjPivotRow} nlobjPivotRow - Null if isDetailLine is true.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getOpeningLine = function() { };

/**
 * Get the summary line from the report.
 * @returns {nlobjPivotRow} nlobjPivotRow - Null if the row does not exist.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getParent = function() { };

/**
 * Get the parent row if it exists.
 * @returns {nlobjPivotRow} nlobjPivotRow - Null if the row is a detail line.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getSummaryLine = function() { };

/**
 * Get the value of the row/column combination.
 * @param {nlobjPivotColumn} pivotColumn [required] - The pivot column.
 * @returns {Object} The value of the row/column combination, or null if <strong>isDetailLine</strong> returns false.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.getValue = function(pivotColumn) { };

/**
 * Check if the row is a detail line.
 * @returns {Boolean} True if the row is a detail line.
 * @since Version 2012.2
 * @memberOf nlobjPivotRow
 */
nlobjPivotRow.prototype.isDetailLine = function() { };

/**
 * Get the column hierarchy.
 * @returns {nlobjPivotColumn} nlobjPivotColumn
 * @since Version 2012.2
 * @memberOf nlobjPivotTable
 */
nlobjPivotTable.prototype.getColumnHierarchy = function() { };

/**
 * Get the row hierarchy.
 * @returns {nlobjPivotRow} nlobjPivotRow
 * @since Version 2012.2
 * @memberOf nlobjPivotTable
 */
nlobjPivotTable.prototype.getRowHierarchy = function() { };

/**
 * Get the pivot table object from the report definition.
 * @returns {nlobjPivotTable} nlobjPivotTable
 * @since Version 2012.2
 * @memberOf nlobjPivotTableHandle
 */
nlobjPivotTableHandle.prototype.getPivotTable = function() { };

/**
 * Get if the execution of the report definition finished. Returns the completion status flag of the report definition execution.
 * @returns {Boolean} True if the execution has finished.
 * @since Version 2012.2
 * @memberOf nlobjPivotTableHandle
 */
nlobjPivotTableHandle.prototype.isReady = function() { };

/**
 * Adds an nlobjColumn object to a list and returns a reference to this column. Note that this API is only available if the portlet type is a <strong>LIST</strong> type. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {String} name [required] - The internal ID name of this column. Internal ID names must be in lowercase and contain no spaces.
 * @param {String} type [required] - The field type for this column
 * @param {String} label [required] - The UI label for this column
 * @param {String} just [optional] - The layout justification for this column. Use any of the following layout types:
 * <ul>
 *     <li>center</li>
 *     <li>right</li>
 *     <li>left - (default)</li>
 * </ul>
 * @returns {nlobjColumn} nlobjColumn
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addColumn = function(name, type, label, just) { };

/**
 * Adds an Edit or Edit|View column to <strong>LIST</strong> portlets (see figure). This method can also be used with nlobjList when creating Suitelet lists and portlet lists. Note that the Edit or Edit|View column will be added to the left of a previously existing column.
 * <p>The following figure shows Edit|View links added to a portlet. These links appear to the left of the Due Date column.
 * @param {nlobjColumn} column [required] - An nlobjColumn object to the left of which the Edit|View column will be added
 * @param {Boolean} showView [optional] - If true then an Edit|View column will be added. Otherwise only an Edit column will be added.
 * @param {String} showHrefCol [optional] - If set, this value must be included in row data provided for the list and will be used to determine whether the URL for this link is clickable (specify T for clickable, F for non-clickable)
 * @returns {nlobjColumn} nlobjColumn
 * @since Version 2008.1
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addEditColumn = function(column, showView, showHrefCol) { };

/**
 * Adds an nlobjField object to a portlet and returns a reference to it.
 * <p>This API is only available if the portlet type is <strong>FORM</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {String} name [required] - The internal ID name of this field. Internal ID names must be in lowercase and contain no spaces.
 * @param {enumString} type [required] - The field type for this field. Use any of the following fields types:
 * <ul>
 *     <li>text</li>
 *     <li>email</li>
 *     <li>phone</li>
 *     <li>date</li>
 *     <li>currency</li>
 *     <li>float</li>
 *     <li>integer</li>
 *     <li>checkbox</li>
 *     <li>select</li>
 *     <li>url</li>
 *     <li>timeofday</li>
 *     <li>textarea</li>
 *     <li>percent</li>
 *     <li>inlinehtml</li>
 * </ul>
 * @param {String} label [required] - The UI label for this field
 * @param {Number|String} source [optional] - The internalId or scriptId of the source list for this field if it's a select (List/Record) field, or radio value for radio fields. In the NetSuite Help Center, see List/Record Type IDs for the internal IDs of all supported list/record types.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addField = function(name, type, label, source) { };

/**
 * Adds a line (containing text or simple HTML) with optional indenting and URL to a <strong>LINKS</strong> portlet.
 * <p>This API is only available if the portlet type is <strong>LINKS</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {String} text [required] - Content written to this line (can contain simple HTML formatting)
 * @param {String} url [optional] - URL if this line should be clickable (if NULL then line will not be clickable)
 * @param {Number} indent [optional] - Indent level used for this line. Valid values are 0 to 5.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addLine = function(text, url, indent) { };

/**
 * Adds a row (nlobjSearchResult) or Array of name/value pairs) to a LIST portlet.
 * <p>This API is only available if the portlet type is <strong>LIST</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {Object<String,String>|nlobjSearchResult} row [required] - An Array of rows containing name/value pairs containing the values for corresponding nlobjColumn objects in this list -or- an nlobjSearchResult. Note that several special fields: recordtype, id, and fieldname_display (display value for select fields) are automatically added for each search result.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addRow = function(row) { };

/**
 * Adds multiple rows (Array of nlobjSearchResult objects or name/value pair Arrays) to a <strong>LIST</strong> portlet.
 * <p>This API is only available if the portlet type is <strong>LIST</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {Array|Array} rows [required] - An Array of Arrays containing name/value pairs containing column values for multiple rows -or- an Array of nlobjSearchResult objects containing the results of a search with columns matching the columns on the list.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.addRows = function(rows) { };

/**
 * Sets the entire content of an HTML portlet (content will be placed inside <TD>...</TD> tags).
 * <p>This API is only available if the portlet type is <strong>HTML</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {String} html [required] - Raw HTML containing the contents of an HTML portlet. The content must start and end with a TD tag.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.setHtml = function(html) { };

/**
 * Sets the regular interval when a FORM portlet automatically refreshes itself.
 * <p>This API is only available if the portlet type is <strong>FORM</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {Number} n [required] - Number of seconds. In production mode, this value must be at least 60 seconds. An error is raised if this value is less than zero, and in production if it is less than 60.
 * @returns {Void}
 * @since Version 2011.1
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.setRefreshInterval = function(n) { };

/**
 * Sets the client-side script for a FORM portlet. For example, you can use this method to call a script to implement client-side validation, dynamically calculate field totals, and change data based on the value of another field. Note that you can only set one script. Setting another script implicitly removes the previous script.
 * <p>This API is only available if the portlet type is <strong>FORM</strong>. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {Number|String} scriptid [required] - The script internalId or custom scriptId of a record-level client script. Scripts of this type are deployed globally and run against an entire record type. For more information, see Form-level and Record-level Client Scripts.
 * @returns {Void}
 * @since Version 2011.1
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.setScript = function(scriptid) { };

/**
 * Adds a SUBMIT button with an optional custom label to this FORM portlet.
 * <p>This API is only available if the portlet type is a <strong>FORM</strong> type. (In the NetSuite Help Center, see Portlet Scripts for portlet type definitions. This section also shows how to define your portlet type on the portlet Script record page in the NetSuite UI.)
 * @param {String} url [required] - The URL that the FORM will be POST-ed to when the user clicks this submit button
 * @param {String} label [optional] - The UI label used for displaying this button. If a value is not specified, the default value is <strong>Save</strong>.
 * @param {String} target [optional] - The target attribute of the portlet's FORM element, if it is different from the portlet's own embedded iframe. Supported values include standard HTML target attributes such as '_top', '_parent', and '_blank', frame names, and the special NetSuite-specific identifier '_hidden'.
 * Setting the target to '_hidden' allows submission to a backend that returns results to a hidden child iframe within the portlet's embedded iframe, so that these results do not replace portlet content. For example, a custom form portlet could submit to a backend suitelet, and if the suitelet returns an error, it is displayed in the hidden child iframe and does not change other portlet contents.
 * The following code provides an example:
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.setSubmitButton = function(url, label, target) { };

/**
 * Sets the portlet title
 * @param {String} title [required] - The title used for this portlet
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjPortlet
 */
nlobjPortlet.prototype.setTitle = function(title) { };

/**
 * Use this method to commit the current line in a sublist.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {Boolean} ignoreRecalc [optional] � If set to true, the total is not recalculated upon execution. Use this parameter if you are editing multiple line items on the same sublist and you need to improve performance. Do not use this option on the last commit of the sublist; the last commitLineItem call must recalculate the total. An error is thrown upon record submit if you do not recalculate the total on the last commitLineItem of the sublist. This parameter is only supported with server-side scripts.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.commitLineItem = function(group, ignoreRecalc) { };

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a <strong>sublist field</strong> on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.createCurrentLineItemSubrecord = function(sublist, fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to create a subrecord from a <strong>body field</strong> on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.createSubrecord = function(fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a <strong>sublist</strong> field on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.editCurrentLineItemSubrecord = function(sublist, fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to edit a subrecord from a <strong>body</strong> field on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.editSubrecord = function(fldname) { };

/**
 * Use this method to return the line number of a particular price in a given column. If the value is present on multiple lines, it will return the line item of the <strong>first</strong> line that contains the value.
 * <p>Use this API on a matrix sublists only.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1, not 0.
 * @param {String} val [required] - The value of the field
 * @returns {Number} The line number (as an integer) of a specified matrix field
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.findLineItemMatrixValue = function(group, fldnam, column, val) { };

/**
 * Use this API to return the line number for the first occurrence of a field value in a sublist column. This API can be used on any sublist type that supports SuiteScript (editor, inline editor, and list sublists).
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} fldnam [required] - The field internal ID
 * @param {String} value [required] - The value of the field
 * @returns {Number} The line number (as an integer) of a specific sublist field
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.findLineItemValue = function(group, fldnam, value) { };

/**
 * Returns a normal keyed array of all the fields on a record. Note that the number of fields returned will differ when you call getAllFields() on the edit of a record vs. on the xedit of a record. For details, see these topics (issue 117539) :
 * <ul>
 *     <li>Inline Editing and nlapiGetNewRecord()</li>
 *     <li>Inline Editing and nlapiGetOldRecord()</li>
 *     <li>What's the Difference Between xedit and edit User Event Types?</li>
 * </ul>
 * @returns {Array} String[] of all field names on the record
 * @since Version 2008.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getAllFields = function() { };

/**
 * Returns an array of all the field names of a sublist on this record
 * @param {String} group [required]- The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @returns {Array} String[] of sublist field names
 * @since Version 2008.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getAllLineItemFields = function(group) { };

/**
 * Returns the value of a datetime field on the currently selected line of a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. This field ID must point to a datetime formatted field.
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table. If this argument is not supplied, the time zone will default to the time zone set in user preferences.
 * @returns {String} The string value of a datetime field on the currently selected line.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getCurrentLineItemDateTimeValue = function(type, fieldId, timeZone) { };

/**
 * Use this API to get the value of the currently selected matrix field. This API should be used on matrix sublists only.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field being set.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1, not 0.
 * @returns {String} The string value of a field on the currently selected line in a matrix sublist. Returns null if the field does not exist.
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getCurrentLineItemMatrixValue = function(group, fldnam, column) { };

/**
 * Returns the value of a sublist field on the currently selected line
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the field being set
 * @returns {String} The string value of a field on the currently selected line. Returns null if field does not exist.
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getCurrentLineItemValue = function(type, fldnam) { };

/**
 * Returns the values of a multiselect sublist field on the currently selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 * <p>This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The name of the multiselect field
 * @returns {array} An array of string values for the multiselect sublist field
 * @since Version 2012.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getCurrentLineItemValues = function(type, fldnam) { };

/**
 * Returns the value of a datetime field. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} fieldId [required] � The internal field ID. This field ID must point to a datetime formatted field.
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {String} The string value of a datetime field.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getDateTimeValue = function(fieldId, timeZone) { };

/**
 * Returns field metadata for a field. This method is only supported with server-side scripts.
 * @param {String} fldnam [required] - The internal ID of the field
 * @returns {nlobjField} The nlobjField object
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getField = function(fldnam) { };

/**
 * Returns the UI display value for a select field. This method is only supported with server-side scripts. This method is supported on select fields only.
 * @param {String} name [required] - The internal ID of the field
 * @returns {String} String UI display value corresponding to the current selection for a select field. Returns null if field does not exist on the record or if the field is restricted.
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getFieldText = function(name) { };

/**
 * Returns the UI display values for a multi-select field. This method is only supported with server-side scripts. This method is supported on multi-select fields only.
 * @param {String} name [required] - The internal ID of the multiselect field
 * @returns {Array} String[] - Returns the selected text values of a multi-select field
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getFieldTexts = function(name) { };

/**
 * Returns the value (internal ID) of a field.
 * <p>Note that NetSuite recommends you read the topic Getting Field Values in SuiteScript, which addresses the rare instances in which the value returned by this API is inconsistent.
 * @param {String} name [required] - The internal ID of the field whose value is being returned.
 * @returns {Number} The internal ID (string) value for the field
 * @returns In this sample, the script returns the internal ID of the value in the Partner (partner) field. In this particular sales order, the Partner field has been set to ABC Inc., which has an internal ID value of 219. The value 219 will be returned in this script.
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getFieldValue = function(name) { };

/**
 * Returns the value (field ID) or values (array of field IDs) of a multi-select field.
 * @param {String} name [required]- The name of the field whose value is being returned
 * @returns {String} If there is only one value selected in the multi-select field, this method returns the field ID as a string.
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getFieldValues = function(name) { };

/**
 * Use this method to get the internal ID of a record or NULL for new records.
 * @returns {Number} value of the record ID
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getId = function() { };

/**
 * Returns the number of lines on a sublist
 * <p>Important: The first line number on a sublist is <strong>1</strong> (not 0).
 * @param {String} group [required]- The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @returns {Number} The integer value of the number of line items on a sublist
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemCount = function(group) { };

/**
 * Returns the value of a datetime field on a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then returned. If timeZone is not passed in, the datetime value is returned in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {Number} lineNum [required] � The line number for this field. Note the first line number on a sublist is 1 (not 0).
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {String} The string value of a datetime field on a sublist.
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemDateTimeValue = function(type, fieldId, lineNum, timeZone) { };

/**
 * Returns field metadata for a line item (sublist) field. This method is only supported with server-side scripts.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} fldnam [required] - The internal ID of the line item field
 * @param {Number} linenum [required] - The line number this field is on. Note the first line number on a sublist is <strong>1</strong> (not 0). Only settable for sublists of type <strong>list</strong>.
 * @returns {nlobjField} An nlobjField object
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemField = function(group, fldnam, linenum) { };

/**
 * Use this API to obtain metadata for a field that appears in a matrix sublist.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the field (line) whose value you want returned.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1, not 0.
 * @returns {nlobjField} An nlobjField object representing this sublist field. Returns null if the field you have specified does not exist.
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemMatrixField = function(group, fldnam, linenum, column) { };

/**
 * Use this API to get the value of a matrix field that appears on a specific line in a specific column. This API can be used only in the context of a matrix sublist.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field whose value you want returned.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {String} The string value of the matrix field
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemMatrixValue = function(group, fldnam, lineum, column) { };

/**
 * Returns the display name of a select field (based on its current selection) in a sublist. This method is only supported with server-side scripts.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} fldnam [required] - The name of the field/line item being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} String - The string UI display value corresponding to the current selection for a line item select field. Returns null if field does not exist on the record or the field is restricted.
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemText = function(group, fldnam, linenum) { };

/**
 * Returns the value of a sublist line item field.
 * <p>Note that NetSuite recommends you read the topic Getting Field Values in SuiteScript, which addresses the rare instances in which the value returned by this API is inconsistent.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} name [required]- The name of the sublist field whose value is being returned
 * @param {Number} linenum [required]- The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of the sublist field name
 * @since Version 2008.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemValue = function(group, name, linenum) { };

/**
 * Returns the values of a multiselect sublist field on a selected line. One example of a multiselect sublist field is the Serial Numbers field on the Items sublist.
 * <p>This function is not supported in client SuiteScript. It is meant to be used in user event scripts.
 * @param {String} type [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The internal ID of the multiselect field
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {array} An array of string values for the multiselect sublist field
 * @since Version 2012.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getLineItemValues = function(type, fldnam, linenum) { };

/**
 * Use this API in a matrix sublist to get the number of columns for a specific matrix field.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The field internal ID of the matrix field.
 * @returns {Number} The integer value for the number of columns of a specified matrix field
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getMatrixCount = function(group, fldnam) { };

/**
 * Use this API to get field metadata for a matrix �header� field in a matrix sublist. This method is only supported with server-side scripts.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * <p>For example, if the Quantity Pricing feature is enabled in your account, you will see the <strong>Qty</strong> fields at the top of the pricing matrix. The Qty fields are considered to be the header fields in the pricing matrix. For more information on matrix header fields, see Matrix APIs in the NetSuite Help Center.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix header field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {nlobjField} nlobjField object
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getMatrixField = function(group, fldname, column) { };

/**
 * Use this API to get the value of a matrix �header� field in a matrix sublist.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * <p>For example, if the Quantity Pricing feature is enabled in your account, you will see the <strong>Qty</strong> fields at the top of the pricing matrix. The Qty fields are considered to be the header fields in the pricing matrix. See Matrix APIs in the NetSuite Help Center for more information on matrix header fields.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix header field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @returns {String} The string value of a matrix header field
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getMatrixValue = function(group, fldnam, column) { };

/**
 * Returns the record type (for example assembly unbuild would be returned for the Assembly Unbuild record type; salesorder would be returned for the Sales Order record type).
 * @returns {String} The string value of the record name internal ID
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.getRecordType = function() { };

/**
 * Inserts a new line into a sublist. This function is only supported for edit sublists (inlineeditor, editor). Note, however, this API will work on list sublists that have been added via the UI object nlobjSubList
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {Number} linenum [required] - Line index at which to insert the line. Note that in sublists, the first line number is <strong>1</strong> (not 0). If the number is greater than the number of lines on the sublist, an error is returned.
 * @param {Boolean} ignoreRecalc [optional] � If set to true, the total is not recalculated upon execution. Use this parameter if you are inserting multiple line items on the same sublist and you need to improve performance. Do not use this option on the last line item insert of the sublist; the last  insertLineItem  call must recalculate the total. An error is thrown upon record submit if you do not recalculate the total on the last insertLineItem of the sublist. This parameter is only supported with server-side scripts.
 * @returns {Void}
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.insertLineItem = function(group, linenum, ignoreRecalc) { };

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a <strong>sublist</strong> field on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {Void}
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.removeCurrentLineItemSubrecord = function(sublist, fldname) { };

/**
 * Use this method to remove an existing line from a sublist.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {Boolean} ignoreRecalc [optional] � If set to true, the total is not recalculated upon execution. Use this parameter if you are removing multiple line items on the same sublist and you need to improve performance. Do not use this option on the last line item removal of the sublist; the last removeLineItem call must recalculate the total. An error is thrown upon record submit if you do not recalculate the total on the last removeLineItem of the sublist. This parameter is only supported with server-side scripts.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.removeLineItem = function(group, linenum, ignoreRecalc) { };

/**
 * Returns a nlobjSubrecord object. Use this API to remove a subrecord from a <strong>body</strong> field on the parent record.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {Void}
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.removeSubrecord = function(fldname) { };

/**
 * Use this method to select an existing line in a sublist.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.selectLineItem = function(group, linenum) { };

/**
 * Use this method to insert and select a new line in a sublist.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.selectNewLineItem = function(group) { };

/**
 * Sets the value of a datetime field on the currently selected line of a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setCurrentLineItemDateTimeValue = function(type, fieldId, dateTime, timeZone) { };

/**
 * Use this API to set the value of a given matrix sublist field. Also note that it should be used on matrix sublists only.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * @param {String} group [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The internal ID of the matrix field.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @param {String|Number} value [required] - The value the field is being set to.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setCurrentLineItemMatrixValue = function(group, fldnam, column, value) { };

/**
 * Use this method to set the value of a sublist line item field.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} name [required] - The name of the field being set
 * @param {String} value [required] - The value the field is being set to. Note: Check box fields take the values of T or F, not true or false.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setCurrentLineItemValue = function(group, name, value) { };

/**
 * Sets the value of a datetime field. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setDateTimeValue = function(fieldId, dateTime, timeZone) { };

/**
 * Sets the value of a select field using its corresponding display value. This method is only supported with server-side scripts.
 * @param {String} name [required] - The internal ID of the field being set
 * @param {String} text [required] - The display value corresponding to the value the field is being set to
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setFieldText = function(name, text) { };

/**
 * Sets the values for a multiselect field from their display values. This method is only supported with server-side scripts.
 * @param {String} name [required] - The internal ID of the field being set
 * @param {Array} texts [required] - The display values corresponding to the values the field is being set to
 * @returns {Void}
 * @since Version 2009.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setFieldTexts = function(name, text) { };

/**
 * Sets the value of a field
 * @param {String} name [required] - The name of the field being set
 * @param {String} value [required] - The value the field is being set to
 * @returns {Void}
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setFieldValue = function(name, value) { };

/**
 * Sets the value of a multi-select field
 * @param {String} name [required] - The name of the field being set
 * @param {Array} value [required]- String array containing field values
 * @returns {Void}
 * @returns Standard Objects | UI Objects | SuiteScript Functions
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setFieldValues = function(name, value) { };

/**
 * Sets the value of a datetime field on a sublist. If timeZone is passed in, the datetime value is converted to that time zone and then set. If timeZone is not passed in, the datetime value is set in the default time zone.
 * @param {String} type [required] � The internal sublist ID
 * @param {String} fieldId [required] � The internal field ID. The field ID passed in must point to a datetime formatted field.
 * @param {Number} lineNum [required] � The line number for this field. Note the first line number on a sublist is 1 (not 0).
 * @param {String} dateTime [required] � The date and time in format mm/dd/yyyy hh:mm:ss am|pm (for example, '09/25/2013 06:00:01 am').
 * @param {String|Number} timeZone [optional] � If a string is passed in, it must match one of the Olson Values listed in the Olson Values table (values are case-insensitive). If an integer is passed in, it must match one of the Key values listed in the Olson Values table.
 * @returns {Void}
 * @throws SSS_INVALID_ARG_TYPE
 * @since Version 2013.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setLineItemDateTimeValue = function(type, fieldId, lineNum, dateTime, timeZone) { };

/**
 * Sets the value of a sublist line item.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} name [required] - The name of the field being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line in a sublist is <strong>1</strong> (not 0).
 * @param {String} value [required] - The value the field is being set to. If a valid value is not specified an error will be thrown.
 * @returns {Void}
 * @since Version 2008.1
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setLineItemValue = function(group, name, linenum, value) { };

/**
 * This API is used to set a header field in a matrix sublist. Also note that this API should be used on matrix sublists only.
 * <p>Important: Currently the Pricing sublist is the only matrix sublist type that supports SuiteScript. For details on working with the Pricing sublist, see Pricing Sublist in the NetSuite Help Center.
 * <p>In the case of the Pricing sublist, this API is used to set the quantity levels that appear in the Qty fields. Note that you should use this API only if you have the Quanity Pricing feature enabled in your account, as these header fields appear only if this feature is enabled.
 * @param {String} type [required] - The sublist internal ID. In the NetSuite Help Center, see Pricing Sublist Internal IDs to determine the correct internal ID of your pricing list.
 * @param {String} fldnam [required] - The name of the field being set. In the case of this API, the internal field ID will alway be price.
 * @param {Number} column [required] - The column number for this field. Column numbers start at 1 (not 0).
 * @param {String} value [required] - The value the field is being set to. Note: Check box fields take the values of T or F, not true or false.
 * @returns {Void}
 * @since Version 2009.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.setMatrixValue = function(group, fldnam, column, value) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>sublist</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in <strong>read-only</strong> mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this API.
 * <p>You can call this API when you want your script to read the nlobjSubrecord object of the current sublist line you are on.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.viewCurrentLineItemSubrecord = function(sublist, fldname) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>sublist</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in read-only mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this function.
 * <p>You can call this API when you want to read the value of a line you are <strong>not</strong> currently on. For example, if you are editing line 2, you can call this API on line 1 to get the value of line 1.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} sublist [required] - The sublist internal ID on the parent record (for example, use item as the ID for the Items sublist).
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the sublist of the parent record (for example, inventorydetail as the ID for the Inventory Details sublist field).
 * @param {Number} linenum [required] - The line number for the sublist field. Note the first line number on a sublist is 1 (not 0).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.viewLineItemSubrecord = function(sublist, fldname, linenum) { };

/**
 * Returns a nlobjSubrecord object. Use this API to view a subrecord from a <strong>body</strong> field on the parent record. Calling this API analogous to doing a �get� on a subrecord, however, the nlobjSubrecord object returned is in read-only mode. Therefore, an error is thrown if you attempt to edit a subrecord returned by this function.
 * <p>See Working with Subrecords in SuiteScript for general information on working with subrecords in NetSuite.
 * @param {String} fldname [required] - The internal ID of the �subrecord field� on the body of the parent record (for example, inventorydetail as the ID for the Inventory Details body field).
 * @returns {nlobjSubrecord} nlobjSubrecord
 * @since Version 2011.2
 * @memberOf nlobjRecord
 */
nlobjRecord.prototype.viewSubrecord = function(fldname) { };

/**
 * Get the formula for this column
 * @returns string - Formula or null if it does not exist.
 * @memberOf nlobjReportColumn
 */
nlobjReportColumn.prototype.getFormula = function() { };

/**
 * Get the parent reference of this column.
 * @returns The parent reference to the nlobjReportColumnHierarchy object. - reference to parent
 * @memberOf nlobjReportColumn
 */
nlobjReportColumn.prototype.getParent = function() { };

/**
 * Returns the measure flag
 * @returns boolean - True if the column is flagged as a measure.
 * @since Version 2012.2
 * @memberOf nlobjReportColumn
 */
nlobjReportColumn.prototype.isMeasure = function() { };

/**
 * Get the children reference of this column hierarchy.
 * @returns The child reference to the nlobjReportColumnHierarchy object. � the child reference
 * @since Version 2012.2
 * @memberOf nlobjReportColumnHierarchy
 */
nlobjReportColumnHierarchy.prototype.getChildren = function() { };

/**
 * Get the parent reference of this column hierarchy.
 * @returns Either the parent reference to the nlobjReportColumnHierarchy object � reference to parent or null.
 * @since Version 2012.2
 * @memberOf nlobjReportColumnHierarchy
 */
nlobjReportColumnHierarchy.prototype.getParent = function() { };

/**
 * Add a column to the report definition.
 * @param {String} alias [required] - The column alias.
 * @param {Boolean} isMeasure [required] - A value of true means that the column is flagged as a measure.
 * @param {String} label [required] - The column label that will be displayed on the report.
 * @param {nlobjReportColumnHierarchy} parent [optional] - The reference to the parent column in the hierarchy. If null, then this column will not be associated with a parent column.
 * @param {String} format [required] - The data type that this column represents.
 * @param {String} formula [optional] - A string which describes a mathematical formula in the format of �F(x,y,z) = mathematical function�, where x,y,z are previously defined aliases from addRowHierarchy, addColumnHierarchy, or addColumn calls.
 * @returns The reference to the nlobjReportColumn object.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addColumn = function(alias, isMeasure, label, parent, format, formula) { };

/**
 * Add a column hierarchy to the report definition.
 * @param {String} alias [required] - The column alias.
 * @param {String} label [required] - The column label that will be displayed on the report.
 * @param {nlobjReportColumnHierarchy} parent [optional] - The reference of the parent column in the hierarchy. If null, then this column will be the root (top level) column.
 * @param {String} format [required] - The data type that this column represents.
 * @returns The reference to the nlobjReportColumnHierarchy object.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addColumnHierarchy = function(alias, label, parent, format) { };

/**
 * Adds the contents of a file as a data source to the report definition.
 * @param {String} media_id [required] - internal ID of the file in the file cabinet
 * @param {} metaDataFunction []
 * @param {} rowFunction []
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addFileDataSource = function(media_id, metaDataFunction, rowFunction) { };

/**
 * Adds a JSON data source to the report definition.
 * @param {String} jsondata [required] - JSON data
 * @param {String} map [required] - Mapping of rows/columns of the from the source JSON data to the report
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addJSONDataSource = function(jsondata, map) { };

/**
 * Add a row hierarchy to the report definition.
 * @param {String} alias [required] - The row alias.
 * @param {String} label [required] - The row label that will be displayed on the report.
 * @param {String} format [required] - The data type that this row represents.
 * @returns The reference to the nlobjReportRowHierarchy object.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addRowHierarchy = function(alias, label, format) { };

/**
 * Attaches a search as a data source to the report definition.
 * @param {String} searchType [required] - The type of records to search.
 * @param {String} id [optional] - The internal id (as a string) if you are using a saved search as a data source.
 * @param {Array} filters [required] - The array of search filters.
 * @param {Array} columns [required] - The array of search columns.
 * @param {String} map [required] - The mapping of rows/columns of the search to the report.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addSearchDatasource = function(searchType, id, filters, columns, map) { };

/**
 * Adds a data source from an external URL.
 * @param {String} url [required] - URL of the target data
 * @param {} metadataFunction []
 * @param {} rowFunction []
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addURLDataSource = function(url, metadataFunction, rowFunction) { };

/**
 * Adds an XML feed as a data source to the report definition, either from a file in the file cabinet, or from an external URL.
 * @param {String} media_id [optional] - internal ID of the file in the file cabinet
 * @param {String} url [optional] - URL of the target XML data
 * @param {} metadata_key []
 * @param {} metaDataFunction []
 * @param {} rowdata_key []
 * @param {} rowFunction []
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.addXMLDataSource = function(media_id, url, metadata_key, metadataFunction, rowdata_key, rowFunction) { };

/**
 * Creates the form for rendering from the report definition.
 * @param {nlobjReportForm} form [optional] - The form object created with nlapiCreateReportForm.
 * If not specified the call waits until the execution is finished (synchronous) and an nlobjPivotTable will be available from the handle. If the parameter is set, the call returns immediately and the returned value references the nlobjReportForm - a pivot table handle will not be available in this case.
 * @returns {nlobjPivotTableHandle} nlobjPivotTableHandle - The identifier of the pivot table handle, or nlobjReportForm.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.executeReport = function(form) { };

/**
 * Sets the title of the report definition.
 * @param {String} title [optional] - The name of the report definition.
 * @since Version 2012.2
 * @memberOf nlobjReportDefinition
 */
nlobjReportDefinition.prototype.setTitle = function(title) { };

/**
 * Get the child reference of this row hierarchy.
 * @returns The child reference to the nlobjReportRowHierarchy object. - the child reference
 * @since Version 2012.2
 * @memberOf nlobjReportRowHierarchy
 */
nlobjReportRowHierarchy.prototype.getChild = function() { };

/**
 * Get the parent reference of this row hierarchy.
 * @returns Either the parent reference to the nlobjReportRowHierarchy object � reference to parent or null.
 * @since Version 2012.2
 * @memberOf nlobjReportRowHierarchy
 */
nlobjReportRowHierarchy.prototype.getParent = function() { };

/**
 * Returns an Object containing all the request headers and their values.
 * @returns {Array} String[] of header names
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getAllHeaders = function() { };

/**
 * Returns an Object containing all the request parameters and their values
 * @returns {Array} String[] of parameter field names
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getAllParameters = function() { };

/**
 * Returns the body of the POST request
 * @returns {String} The string value of the request body
 * @since Version 2008.1
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getBody = function() { };

/**
 * Returns a file reference (nlobjFile object) added to a Suitelet page with the nlobjForm.addField(name, type, label, sourceOrRadio, tab) method (where 'file' is passed in as the type argument). The getFile method can return a reference to a file up to, but not including, 10MB in size.
 * @returns {nlobjFile} nlobjFile
 * @since Version 2010.1
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getFile = function(id) { };

/**
 * Returns the value of a header in the request
 * @param {String} name [required]- The name of the header
 * @returns {String} The request header as a string
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getHeader = function(name) { };

/**
 * Returns the number of lines in a sublist
 * <p>Important: The first line number on a sublist is <strong>1</strong> (not 0).
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @returns {Number} The integer value of the number of line items in a sublist
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getLineItemCount = function(group) { };

/**
 * Returns the value of a sublist line item.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, as well as all internal IDs associated with each sublist.
 * @param {String} name [required] - The name of the field whose value is returned
 * @param {Number} line [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of the line item
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getLineItemValue = function(group, name, line) { };

/**
 * Returns the METHOD of the request.
 * @returns {String} The string value of the request type. Request types include GET or POST.
 * @since Version 2008.1
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getMethod = function() { };

/**
 * Returns the value of the request parameter
 * @param {String} name [required]- The name of the request parameter whose value is returned
 * @returns {String} The string value of the request parameter
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getParameter = function(name) { };

/**
 * Returns the values of a request parameter as an Array
 * @param {String} name [required] - The name of the request parameter whose value is returned
 * @returns {Array} String[] of parameter values
 * @since Version 2008.2
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getParameterValues = function(name) { };

/**
 * Returns the full URL of the request
 * @returns {String} The string value of the request URL
 * @since Version 2008.1
 * @memberOf nlobjRequest
 */
nlobjRequest.prototype.getURL = function() { };

/**
 * Adds a header to the response. If this header has already been set, this will add a new header to the response. Note that all user-defined headers must be prefixed with <strong>Custom-Header</strong> otherwise an SSS_INVALID_ARG error will be thrown ()
 * @param {String} name [required] - The name of the header
 * @param {String} value [required] - The value used to set header
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.addHeader = function(name, value) { };

/**
 * Returns an Array containing all the headers returned in the response. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
 * @returns {Array} String[] of headers
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getAllHeaders = function() { };

/**
 * Returns the body returned by the server. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
 * @returns {String} The string value of the body
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getBody = function() { };

/**
 * Returns the response code returned by the server. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
 * @returns {String} The string value of the response code
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getCode = function() { };

/**
 * Returns the nlobjError thrown during request. Only available in the return value of call to nlapiRequestURL in Client SuiteScript.
 * @returns {nlobjError} nlobjError
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getError = function() { };

/**
 * Returns the value for a header returned in the response. Only available in the return value of a call to nlapiRequestURL(url, postdata, headers, callback, httpMethod).
 * @param {String} name [required] - The header name
 * @returns {String} The string value of the header
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getHeader = function(name) { };

/**
 * Returns an Array containing all the values for a header returned in the response. This is only available in the return value of a call to nlapiRequestURL.
 * @param {String} name - The header name
 * @returns {Array} String[] of header values
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.getHeaders = function(name) { };

/**
 * Generates, and renders, a PDF directly to a response. Use renderPDF to generate PDFs without first importing a file to the file cabinet. This method is useful if your script does not have NetSuite file cabinet permissions.
 * <p>The renderPDF method uses the Big Faceless Report Generator built by Big Faceless Organization (BFO). The BFO Report Generator is a third-party library used for converting XML to PDF documents. The renderPDF method passes XML to the BFO tag library (which is stored by NetSuite), and renders a PDF directly to a response. Note that the xmlString argument is the same input string as that passed to BFO by nlapiXMLToPDF.
 * <p>For details on BFO, available tags, and BFO examples, see the following links:
 * <ul>
 *     <li></li>
 *     <li></li>
 * </ul>
 * <p>The renderPDF method is supported in server-side scripts. It has a governance of 10 usage units.
 * @param {String} xmlString [required] � Content of your PDF, passed to renderPDF as a string.
 * @returns {Void}
 * @since Version 2014.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.renderPDF = function(xmlString) { };

/**
 * Sets the redirect URL by resolving to a NetSuite resource. Note that all parameters must be prefixed with <strong>custparam</strong> otherwise an SSS_INVALID_ARG error will be thrown.
 * <p>Also note that all URLs must be internal unless the Suitelet is being executed in an �Available without Login� context. If this is the case, then within the �Available without Login� (externally available) Suitelet, you can set the type parameter to <strong>EXTERNAL</strong> and the identifier parameter to the external URL.
 * @param {String} type [required] - The base type for this resource
 * <ul>
 *     <li><strong>RECORD</strong> - Record Type</li>
 *     <li><strong>TASKLINK</strong> - Task Link</li>
 *     <li><strong>SUITELET</strong> - Suitelet</li>
 *     <li><strong>EXTERNAL</strong> - Custom URL (external) and only available for external Suitelets (i.e. available without login)</li>
 * </ul>
 * @param {String} identifier [required] - The primary id for this resource (record type ID for RECORD, scriptId for SUITELET, taskId for tasklink, url for EXTERNAL)
 * @param {String} id [optional] - The secondary id for this resource (record type ID for RECORD, deploymentId for SUITELET)
 * @param {Boolean} editmode [optional] - For RECORD calls, this determines whether to return a URL for the record in edit mode or view mode. If set to true, returns the URL to an existing record in edit mode, otherwise the record is returned in view mode. Important: The values for this parameter can be true or false, not T or F.
 * @param {Object} parameters [optional] - An associative array of additional URL parameters as name/value pairs
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.sendRedirect = function(type, identifier, id, editmode, parameters) { };

/**
 * Sets CDN caching for a shorter period of time or a longer period of time. There is no ability to invalidate individual assets, so SSP Application can set its TTL (Time To Live) in CDN and fall  into one of four categories:
 * <ul>
 *     <li>Unique � This asset is not cached.</li>
 *     <li>Short � This asset may change frequently, so cache it for five minutes.</li>
 *     <li>Medium � This asset may or may not change frequently, so cache it for two hours.</li>
 *     <li>Long � This asset is not expected to change frequently, so cache it for seven days.</li>
 * </ul>
 * <p>Important: This method is not accessible through a Suitelet. It must be accessed in the context of a shopping SSP.
 * @param {constant} type [required]- Constant value to represent the caching duration:
 * <ul>
 *     <li>CACHE_DURATION_UNIQUE</li>
 *     <li>CACHE_DURATION_SHORT</li>
 *     <li>CACHE_DURATION_MEDIUM</li>
 *     <li>CACHE_DURATION_LONG</li>
 * </ul>
 * Note that when setting constant values, you do not use quotation marks. The syntax will be something similar to:
 * setCDNCacheable( response.CACHE_DURATION_SHORT);
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.setCDNCacheable = function(type) { };

/**
 * Sets the content type for the custom responses (and an optional file name for binary output). This API is available in Suitelet scripts only.
 * @param {enumeratedString} type [required]- The content/file type. For a list of supported file types, see Supported File Types in the NetSuite Help Center.
 * @param {String} name [optional]- Set the name of the file being downloaded (for example 'foobar.pdf')
 * @param {String} disposition [optional] - Content disposition to use for file downloads. Available values are <strong>inline</strong> or <strong>attachment</strong>. If a value is not specified, the parameter will default to <strong>attachment</strong>. What this means is that instead of a new browser (or Acrobat) launching and rendering the content, you will instead be asked if you want to download and Save the file.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.setContentType = function(type, name, disposition) { };

/**
 * Allows developers to set character encoding on nlobjResponse content. The default encoding type is UTF-8. Available encoding types are:
 * @param {String} encodingType [required]- The type of encoding for the response. Available types are:
 * <ul>
 *     <li>UTF-8</li>
 *     <li>windows-1252</li>
 *     <li>ISO-8859-1</li>
 *     <li>GB18030</li>
 *     <li>GB2312</li>
 *     <li>SHIFT_JIS</li>
 *     <li>MacRoman</li>
 * </ul>
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.setEncoding = function(encodingType) { };

/**
 * Sets the value of a response header. Note that all user-defined headers must be prefixed with <strong>Custom-Header</strong> otherwise an SSS_INVALID_ARG or SSS_INVALID_HEADER error will be thrown.
 * <p>Important: This method is available only in Suitelets.
 * @param {String} name [required] - The name of the header
 * @param {String} value [required] - The value used to set header
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.setHeader = function(name, value) { };

/**
 * Write information (text/xml/html) to the response
 * @param {String|nlobjFileObject} output [required] - String or file being written
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.write = function(output) { };

/**
 * Write line information (text/xml/html) to the response
 * @param {String} output [required] - String being written
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.writeLine = function(output) { };

/**
 * Generates a page using a page element object (nlobjForm or nlobjList)
 * @param {nlobjForm|nlobjList} pageobject [required] - Standalone page object: nlobjForm or nlobjList
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjResponse
 */
nlobjResponse.prototype.writePage = function(pageobject) { };

/**
 * Adds a single return column to the search. Note that existing columns on the search are not changed.
 * @param {nlobjSearchColumn} column [required] - The nlobjSearchColumn you want added to the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.addColumn = function(column) { };

/**
 * Adds multiple return columns to the search. Note that existing columns on the search are not changed.
 * @param {Array} columns [required] - The nlobjSearchColumn[] you want added to the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.addColumns = function(columns) { };

/**
 * Adds a single search filter. Note that existing filters on the search are not changed.
 * @param {nlobjSearchFilter} filter [required] - The nlobjSearchFilter you want added to the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.addFilter = function(filter) { };

/**
 * Adds a search filter list. Note that existing filters on the search are not changed.
 * @param {Array} filters [required] - The list (array) of zero or more nlobjSearchFilter you want added to the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.addFilters = function(filters) { };

/**
 * Deletes a given saved search that was created through scripting or through the UI.
 * <p>If you have created a saved search through the UI, you can load the search using nlapiLoadSearch(type, id) and then call deleteSearch to delete it.
 * <p>In scripting if you have created a search using nlapiCreateSearch(type, filters, columns) and saved the search using the nlobjSearch.saveSearch(title, scriptId), you can then load the search and call deleteSearch to delete it.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.deleteSearch = function() { };

/**
 * Gets the search return columns for the search.
 * @returns {nlobjSearchColumn[]} nlobjSearchColumn[]
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getColumns = function() { };

/**
 * Gets the filter expression for the search.
 * @returns Object[]
 * @since Version 2012.2
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getFilterExpression = function() { };

/**
 * Gets the filters for the search.
 * @returns {nlobjSearchFilter[]} nlobjSearchFilter[]
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getFilters = function() { };

/**
 * Gets the internal ID of the search. The internal ID is available only when the search is either loaded using nlapiLoadSearch(type, id) or has been saved using nlobjSearch.saveSearch(title, scriptId).
 * <p>If this is an ad-hoc search (created with nlapiCreateSearch(type, filters, columns)), this method will return null.
 * @returns {String} The search ID as a string. Typical return values will be something like 55 or 234 or 87. You will not receive a value such as customsearch_mysearch. Any ID prefixed with customsearch is considered a script ID, not the search's internal system ID.
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getId = function() { };

/**
 * Gets whether the nlobjSearch has been set as public search.
 * @returns {Boolean} Returns true if the search is public. Returns false if it is not.
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getIsPublic = function() { };

/**
 * Gets the script ID of the search. The script ID is available only when the search is either loaded using nlapiLoadSearch(type, id) or has been saved using nlobjSearch.saveSearch(title, scriptId).
 * <p>If this is an ad-hoc search (created with nlapiCreateSearch(type, filters, columns)), this method will return null.
 * @returns {String} The script ID of the search as a string. Typical return values will be something like customsearch_mysearch or customsearchnewinvoices. You will not receive values such as 55 or 234 or 87. These are considered internal system IDs assigned by NetSuite when you first save the search.
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getScriptId = function() { };

/**
 * Returns the record type that the search was based on. This method is helpful when you have the internal ID of the search, but do not know the record type the search was based on.
 * @returns {String} The internal ID name of the record type as a string. For example, if the search was on a Customer record, customer will be returned; if the search was on the Sales Order record type, salesorder will be returned.
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.getSearchType = function() { };

/**
 * Runs an ad-hoc search, returning the results. Be aware that calling this method does NOT save the search. Using this method in conjunction with nlapiCreateSearch(type, filters, columns) allows you to create and run ad-hoc searches that are never saved to the database, much like nlapiSearchRecord.
 * <p>Note that this method returns the nlobjSearchResultSet object, which provides you with more flexibility when working with or iterating through your search results. Therefore, you may also want to use runSearchin conjunction with nlapiLoadSearch. By doing so you can load an existing saved search, call runSearch, and then (if you choose):
 * <ul>
 *     <li>retrieve a slice of the search results from anywhere in the result list</li>
 *     <li>paginate through the search results.</li>
 * </ul>
 * @returns {nlobjSearchResultSet} nlobjSearchResultSet
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.runSearch = function() { };

/**
 * Saves the search created by nlapiCreateSearch(type, filters, columns).
 * <p>Executing this API consumes 5 governance units.
 * <p>Important: Loading a search and saving it with a different title and/or script ID does not create a new search. It only modifies the title and/or script ID for the existing search. To create a new saved search based on an existing search, see Example 2 for nlapiCreateSearch(type, filters, columns).
 * @param {String} title [optional] - The title you want to give the saved search. Note that title is required when saving a new search, but optional when saving a search that was loaded using nlapiLoadSearch(type, id) or has already been saved by calling  saveSearch(title, scriptId) before.
 * @param {String} scriptId [optional] - The script ID you want to assign to the saved search. All saved search script IDs must be prefixed with <strong>customsearch</strong>, for example:
 * <ul>
 *     <li>'customsearch_my_new_search'</li>
 *     <li>'customsearchmynewsearch'</li>
 * </ul>
 * Underscores are not required in your script ID, however, they do improve readability of the script ID.
 * Also, if you do not provide a script ID for the saved search, the system will generate one for you when the script runs, if the search is being saved for the first time.
 * @returns {Number} The internal ID of the search as a number.
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.saveSearch = function(title, scriptId) { };

/**
 * Sets the return columns for this search, overwriting any prior columns. If null is passed in it is treated as if it were an empty array and removes any existing columns on the search.
 * @param {Array} columns [required] - The nlobjSearchColumn[] you want to set in the search. Passing in null or [] removes all columns from the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setColumns = function(columns) { };

/**
 * Sets the search filter expression, overwriting any prior filters. If null is passed in, it is treated as if it was an empty array and removes any existing filters on this search.
 * @param {Array} filterExpression [required] - The filter expression you want to set in the search. Passing in null or [] removes all filters from the search.
 * A search filter expression is a JavaScript string array of zero or more elements. Each element is one of the following:
 * <ul>
 *     <li>Operator - either 'NOT', 'AND', or 'OR'</li>
 *     <li>Filter term</li>
 *     <li>Nested search filter expression</li>
 * </ul>
 * For more information about search filter expression, see Search Filter Expression Overview.
 * @returns {Void}
 * @since Version 2012.2
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setFilterExpression = function(filterExpression) { };

/**
 * Sets the filters for this search, overwriting any prior filters. If null is passed in it is treated as if it were an empty array and removes any existing filters on this search.
 * @param {Array} filters [required] - The nlobjSearchFilter[] you want to set in the search. Passing in null or [] removes all filters from the search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setFilters = function(filters) { };

/**
 * Sets whether the search is public or private. By default, all searches created through nlapiCreateSearch(type, filters, columns) are private.
 * @param {Boolean} type [required] - Set to true to designate the search as a public search. Set to false to designate the search as a private search.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setIsPublic = function(type) { };

/**
 * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a populated search definition page. You can use this method with any kind of search that is held in the nlobjSearch object. This could be:
 * <ul>
 *     <li>an existing saved search,</li>
 *     <li>an ad-hoc search that you are building in SuiteScript, or</li>
 *     <li>a search you have loaded and then modified (using addFilter, setFilters, addFilters, addColumn, addColumns, or setColumns) but do not save.</li>
 * </ul>
 * <p>Note that this method does not return a URL. It works by loading a search into the session, and then redirecting to a URL that loads the search definition page.
 * <p>This method is supported in afterSubmit user event scripts and in client scripts.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setRedirectURLToSearch = function() { };

/**
 * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a search results page. You can use this method with any kind of search that is held in the nlobjSearch object. This could be:
 * <ul>
 *     <li>an existing saved search,</li>
 *     <li>an ad-hoc search that you are building in SuiteScript, or</li>
 *     <li>a search you have loaded and then modified (using addFilter, setFilters, addFilters, addColumn, addColumns, or setColumns) but do not save.</li>
 * </ul>
 * <p>Note that this method does not return a URL. It works by loading a search into the session, and then redirecting to a URL that loads the search results.
 * <p>This method is supported in afterSubmit user event scripts and in client scripts.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearch
 */
nlobjSearch.prototype.setRedirectURLToSearchResults = function() { };

/**
 * Primary object used to encapsulate search return columns. For information on executing NetSuite searches using SuiteScript, see Searching Overview in the NetSuite Help Center.
 * <p>Note: The columns argument in nlapiSearchRecord(type, id, filters, columns) returns a reference to the nlobjSearchColumn object. With the object reference returned, you can then use any of the nlobjSearchColumn methods against your search column results.
 * <p>The nlobjSearchColumn object is instantiated with the �new� keyword.
 * <pre>var col = new nlobjSearchColumn('email', 'customer');</pre>
 * <p>Important: If you have multiple search return columns and you apply grouping, all columns must include a summary argument.
 * <p>In the following example, the first search return column groups the results by tranid. The second search return column returns the count of custbody256 per tranid.
 * <pre>filter = new nlobjSearchFilter('type', null, 'is', 'SalesOrd');
 *
 * var col = new Array();
 * col[0] = new nlobjSearchColumn('tranid', null, 'group');
 * col[1] = new nlobjSearchColumn('custbody256', null, 'count';
 *
 * var result = nlapiSearchRecord('transaction', null, filter, col);</pre>
 * @param {String} name [required] - The search return column name
 * @param {String} join [optional] - The join id for this search return column
 * @param {String} summary [optional] - The summary type for this column;
 * <ul>
 *     <li>group</li>
 *     <li>sum</li>
 *     <li>count</li>
 *     <li>avg</li>
 *     <li>min</li>
 *     <li>max</li>
 * </ul>
 * @returns {nlobjSearchColumn}
 * @memberOf nlobjSearchColumn
 */
var nlobjSearchColumn = function(name, join, summary) { };

/**
 * @returns {String} Returns the formula used for this column as a string
 * @since Version 2009.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getFormula = function() { };

/**
 * @returns {String} The function used in this search column as a string
 * @since Version 2009.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getFunction = function() { };

/**
 * Returns join id for this search column
 * @returns {String} The join id as a string
 * @since Version 2008.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getJoin = function() { };

/**
 * Returns the label used for the search column. Note that ONLY custom labels can be returned using this method.
 * @returns {String} The custom label used for this column as a string
 * @since Version 2009.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getLabel = function() { };

/**
 * @returns {String} The name of the search column as a string
 * @since Version 2008.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getName = function() { };

/**
 * Returns the sort direction for this column
 * @returns {String}
 * @since Version 2011.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getSort = function() { };

/**
 * Returns the summary type (avg, group, sum, count) for this search column. In the NetSuite Help Center, see Search Summary Types for a list of summary types.
 * @returns {String} The summary type as a string
 * @since Version 2008.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.getSummary = function() { };

/**
 * Set the formula used for this column. Name of the column can either be formulatext, formulanumeric, formuladatetime, formulapercent, or formulacurrency.
 * @param {String} formula [required] - The formula used for this column
 * @returns {nlobjSearchColumn}
 * @since Version 2011.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.setFormula = function(formula) { };

/**
 * Sets the special function used for this column.
 * @param {String} functionid [required] - Special function used for this column. The following is a list of supported functions and their internal IDs:
 * <table>
 *    <tr>
 *        <th>ID</th>
 *        <th>Name</th>
 *        <th>Date Function</th>
 *        <th>Output</th>
 *    </tr>
 *    <tr>
 *        <td>percentOfTotal</td>
 *        <td>% of Total</td>
 *        <td>No</td>
 *        <td>percent</td>
 *    </tr>
 *    <tr>
 *        <td>absoluteValue</td>
 *        <td>Absolute Value</td>
 *        <td>No</td>
 *        <td></td>
 *    </tr>
 *    <tr>
 *        <td>ageInDays</td>
 *        <td>Age in Days</td>
 *        <td>Yes</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>ageInHours</td>
 *        <td>Age in Hours</td>
 *        <td>Yes</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>ageInMonths</td>
 *        <td>Age in Months</td>
 *        <td>Yes</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>ageInWeeks</td>
 *        <td>Age in Weeks</td>
 *        <td>Yes</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>ageInYears</td>
 *        <td>Age in Years</td>
 *        <td>Yes</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>calendarWeek</td>
 *        <td>Calendar Week</td>
 *        <td>Yes</td>
 *        <td>date</td>
 *    </tr>
 *    <tr>
 *        <td>day</td>
 *        <td>Day</td>
 *        <td>Yes</td>
 *        <td>date</td>
 *    </tr>
 *    <tr>
 *        <td>month</td>
 *        <td>Month</td>
 *        <td>Yes</td>
 *        <td>text</td>
 *    </tr>
 *    <tr>
 *        <td>negate</td>
 *        <td>Negate</td>
 *        <td>No</td>
 *        <td></td>
 *    </tr>
 *    <tr>
 *        <td>numberAsTime</td>
 *        <td>Number as Time</td>
 *        <td>No</td>
 *        <td>text</td>
 *    </tr>
 *    <tr>
 *        <td>quarter</td>
 *        <td>Quarter</td>
 *        <td>Yes</td>
 *        <td>text</td>
 *    </tr>
 *    <tr>
 *        <td>rank</td>
 *        <td>Rank</td>
 *        <td>No</td>
 *        <td>integer</td>
 *    </tr>
 *    <tr>
 *        <td>round</td>
 *        <td>Round</td>
 *        <td>No</td>
 *        <td></td>
 *    </tr>
 *    <tr>
 *        <td>roundToHundredths</td>
 *        <td>Round to Hundredths</td>
 *        <td>No</td>
 *        <td></td>
 *    </tr>
 *    <tr>
 *        <td>roundToTenths</td>
 *        <td>Round to Tenths</td>
 *        <td>No</td>
 *        <td></td>
 *    </tr>
 *    <tr>
 *        <td>weekOfYear</td>
 *        <td>Week of Year</td>
 *        <td>Yes</td>
 *        <td>text</td>
 *    </tr>
 *    <tr>
 *        <td>year</td>
 *        <td>Year</td>
 *        <td>Yes</td>
 *        <td>text</td>
 *    </tr>
 * </table>
 * @returns {nlobjSearchColumn}
 * @since Version 2011.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.setFunction = function(functionid) { };

/**
 * Set the label used for this column.
 * @param {String} label [required] - The label used for this column
 * @returns {nlobjSearchColumn}
 * @since Version 2011.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.setLabel = function(label) { };

/**
 * Returns nlobjSearchColumn sorted in either ascending or descending order.
 * @param {Boolean} order [optional] - If not set, defaults to false, which returns column data in ascending order. If set to true, data is returned in descending order.
 * @returns {nlobjSearchColumn}
 * @since Version 2010.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.setSort = function(order) { };

/**
 * Returns the search column for which the minimal or maximal value should be found when returning the nlobjSearchColumn value.
 * <p>For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a record, and then the nlobjSearchColumn value for that record is returned.
 * <p>Can only be used when min or max is passed as the summary parameter in the nlobjSearchColumn constructor.
 * @param {String} name - The name of the search column for which the minimal or maximal value should be found
 * @param {String} join - The join id for this search column
 * @returns {nlobjSearchColumn}
 * @since Version 2012.1
 * @memberOf nlobjSearchColumn
 */
nlobjSearchColumn.prototype.setWhenOrderedBy = function(name, join) { };

/**
 * Constructor for a search filter object
 * @param {String} name - The internal ID of the search field. For example, if one of your filtering criterion is Quantity Available, you will set the value of name to quantityavailable, which is the search field ID for Quantity Available.
 * @param {String} join - If you are executing a joined search, the join id used for the search field specified in the name parameter. The join id is the internal ID of the record type the search field appears on.
 * @param {String} operator - The search operator used for this search field. See the list of possible operator values:
 * <table>
 *     <tr>
 *         <td>after
 *         <br>anyof
 *         <br>before
 *         <br>between
 *         <br>contains
 *         <br>doesnotcontain
 *         <br>doesnotstartwith
 *         <br>equalto
 *         <br>greaterthan
 *         <br>greaterthanorequalto
 *         <br>haskeywords
 *         <br>is</td>
 *         <td>isempty
 *         <br>isnot
 *         <br>isnotempty
 *         <br>lessthan
 *         <br>lessthanorequalto
 *         <br>noneof
 *         <br>notafter
 *         <br>notbefore
 *         <br>notbetween
 *         <br>notequalto
 *         <br>notgreaterthan
 *         <br>notgreaterthanorequalto</td>
 *         <td>notlessthan
 *         <br>notlessthanorequalto
 *         <br>noton
 *         <br>notonorafter
 *         <br>notonorbefore
 *         <br>notwithin
 *         <br>on
 *         <br>onorafter
 *         <br>onorbefore
 *         <br>startswith
 *         <br>within
 *         <br></td>
 *     </tr>
 * </table>
 * @param {String|Date|Array|Number} value1 - A filter value -or- A special date field value -or- Array of values for select/multiselect fields -or- An integer value
 * @param {String|Date} value2 - A secondary filter value -or- special date field value for between/within style operators * lastbusinessweek. Values are not case sensitive. See the table below for valid arguments.
 * <table>
 *     <tr>
 *         <td>fiscalHalfBeforeLast
 *         <br>fiscalHalfBeforeLastToDate
 *         <br>fiscalQuarterBeforeLast
 *         <br>fiscalQuarterBeforeLastToDate
 *         <br>fiscalYearBeforeLast
 *         <br>fiscalYearBeforeLastToDate
 *         <br>fiveDaysAgo
 *         <br>fiveDaysFromNow
 *         <br>fourDaysAgo
 *         <br>fourDaysFromNow
 *         <br>fourWeeksStartingThisWeek
 *         <br>lastBusinessWeek
 *         <br>lastFiscalHalf
 *         <br>lastFiscalHalfOneFiscalYearAgo
 *         <br>lastFiscalHalfToDate
 *         <br>lastFiscalQuarter
 *         <br>lastFiscalQuarterOneFiscalYearAgo
 *         <br>lastFiscalQuarterToDate
 *         <br>lastFiscalQuarterTwoFiscalYearsAgo
 *         <br>lastFiscalYear
 *         <br>lastFiscalYearToDate
 *         <br>lastMonth
 *         <br>lastMonthOneFiscalQuarterAgo
 *         <br>lastMonthToDate
 *         <br>lastMonthTwoFiscalQuartersAgo
 *         <br>lastMonthTwoFiscalYearsAgo
 *         <br>lastRollingHalf
 *         <br>lastRollingQuarter
 *         <br>lastRollingYear
 *         <br>lastWeek
 *         <br>lastWeekToDate
 *         <br>monthAfterNext
 *         <br>monthAfterNextToDate
 *         <br>monthBeforeLast
 *         <br>monthBeforeLastToDate</td>
 *         <td>nextBusinessWeek
 *         <br>nextFiscalHalf
 *         <br>nextFiscalQuarter
 *         <br>nextFiscalYear
 *         <br>nextFourWeeks
 *         <br>nextMonth
 *         <br>nextOneHalf
 *         <br>nextOneMonth
 *         <br>nextOneQuarter
 *         <br>nextOneWeek
 *         <br>nextOneYear
 *         <br>nextWeek
 *         <br>ninetyDaysAgo
 *         <br>ninetyDaysFromNow
 *         <br>oneYearBeforeLast
 *         <br>previousFiscalQuartersLastFiscalYear
 *         <br>previousFiscalQuartersThisFiscalYear
 *         <br>previousMonthsLastFiscalHalf
 *         <br>previousMonthsLastFiscalQuarter
 *         <br>previousMonthsLastFiscalYear
 *         <br>previousMonthsSameFiscalHalfLastFiscalYear
 *         <br>previousMonthsSameFiscalQuarterLastFiscalYear
 *         <br>previousMonthsThisFiscalHalf
 *         <br>previousMonthsThisFiscalQuarter
 *         <br>previousMonthsThisFiscalYear
 *         <br>previousOneDay
 *         <br>previousOneHalf
 *         <br>previousOneMonth
 *         <br>previousOneQuarter
 *         <br>previousOneWeek
 *         <br>previousOneYear
 *         <br>previousRollingHalf
 *         <br>previousRollingQuarter
 *         <br>previousRollingYear
 *         <br>sameDayFiscalQuarterBeforeLast
 *         <br>sameDayFiscalYearBeforeLast
 *         <br>sameDayLastFiscalQuarter
 *         <br>sameDayLastFiscalYear
 *         <br>sameDayLastMonth
 *         <br>sameDayLastWeek
 *         <br>sameDayMonthBeforeLast
 *         <br>sameDayWeekBeforeLast</td>
 *         <td>sameFiscalHalfLastFiscalYear
 *         <br>sameFiscalHalfLastFiscalYearToDate
 *         <br>sameFiscalQuarterFiscalYearBeforeLast
 *         <br>sameFiscalQuarterLastFiscalYear
 *         <br>sameFiscalQuarterLastFiscalYearToDate
 *         <br>sameMonthFiscalQuarterBeforeLast
 *         <br>sameMonthFiscalYearBeforeLast
 *         <br>sameMonthLastFiscalQuarterToDate
 *         <br>sameMonthLastFiscalYear
 *         <br>sameMonthLastFiscalYearToDate
 *         <br>sameWeekFiscalYearBeforeLast
 *         <br>sameWeekLastFiscalYear
 *         <br>sixtyDaysAgo
 *         <br>sixtyDaysFromNow
 *         <br>startOfFiscalHalfBeforeLast
 *         <br>startOfFiscalQuarterBeforeLast
 *         <br>startOfFiscalYearBeforeLast
 *         <br>startOfLastBusinessWeek
 *         <br>startOfLastFiscalHalf
 *         <br>startOfLastFiscalHalfOneFiscalYearAgo
 *         <br>startOfLastFiscalQuarter
 *         <br>startOfLastFiscalQuarterOneFiscalYearAgo
 *         <br>startOfLastFiscalYear
 *         <br>startOfLastMonth
 *         <br>startOfLastMonthOneFiscalQuarterAgo
 *         <br>startOfLastMonthOneFiscalYearAgo
 *         <br>startOfLastRollingHalf
 *         <br>startOfLastRollingQuarter
 *         <br>startOfLastRollingYear
 *         <br>startOfLastWeek
 *         <br>startOfMonthBeforeLast
 *         <br>startOfNextBusinessWeek
 *         <br>startOfNextFiscalHalf
 *         <br>startOfNextFiscalQuarter
 *         <br>startOfNextFiscalYear
 *         <br>startOfNextMonth
 *         <br>startOfNextWeek
 *         <br>startOfPreviousRollingHalf
 *         <br>startOfPreviousRollingQuarter
 *         <br>startOfPreviousRollingYear
 *         <br>startOfSameFiscalHalfLastFiscalYear
 *         <br>startOfSameFiscalQuarterLastFiscalYear
 *         <br>startOfSameMonthLastFiscalQuarter
 *         <br>startOfSameMonthLastFiscalYear</td>
 *         <td>startOfThisBusinessWeek
 *         <br>startOfThisFiscalHalf
 *         <br>startOfThisFiscalQuarter
 *         <br>startOfThisFiscalYear
 *         <br>startOfThisMonth
 *         <br>startOfThisWeek
 *         <br>startOfThisYear
 *         <br>startOfWeekBeforeLast
 *         <br>tenDaysAgo
 *         <br>tenDaysFromNow
 *         <br>thirtyDaysAgo
 *         <br>thirtyDaysFromNow
 *         <br>thisBusinessWeek
 *         <br>thisFiscalHalf
 *         <br>thisFiscalHalfToDate
 *         <br>thisFiscalQuarter
 *         <br>thisFiscalQuarterToDate
 *         <br>thisFiscalYear
 *         <br>thisFiscalYearToDate
 *         <br>thisMonth
 *         <br>thisMonthToDate
 *         <br>thisRollingHalf
 *         <br>thisRollingQuarter
 *         <br>thisRollingYear
 *         <br>thisWeek
 *         <br>thisWeekToDate
 *         <br>thisYear
 *         <br>threeDaysAgo
 *         <br>threeDaysFromNow
 *         <br>threeFiscalQuartersAgo
 *         <br>threeFiscalQuartersAgoToDate
 *         <br>threeFiscalYearsAgo
 *         <br>threeFiscalYearsAgoToDate
 *         <br>threeMonthsAgo
 *         <br>threeMonthsAgoToDate
 *         <br>today
 *         <br>tomorrow
 *         <br>twoDaysAgo
 *         <br>twoDaysFromNow
 *         <br>weekAfterNext
 *         <br>weekAfterNextToDate
 *         <br>weekBeforeLast
 *         <br>weekBeforeLastToDate
 *         <br>yesterday</td>
 *     </tr>
 * </table>
 * Deprecated value2 arguments:
 * <table>
 *     <tr>
 *         <td>lastFiscalHalfOneYearAgo
 *         <br>lastFiscalQuarterOneYearAgo
 *         <br>lastMonthOneQuarterAgo
 *         <br>lastMonthOneYearAgo
 *         <br>lastMonthTwoQuartersAgo
 *         <br>lastMonthTwoYearsAgo
 *         <br>lastQuarterTwoYearsAgo
 *         <br>previousMonthsSameFiscalHalfLastYear
 *         <br>previousMonthsSameFiscalQuartherLastFiscalYear
 *         <br>previousQuartersLastFiscalYear
 *         <br>previousQuartersThisFiscalYear
 *         <br>sameHalfLastFiscalYear
 *         <br>sameHalfLastFiscalYearToDate
 *         <br>sameQuarterLastFiscalYear
 *         <br>sameQuarterLastFiscalYearToDate
 *         <br>startOfLastHalfOneYearAgo
 *         <br>startOfLastMonthOneQuarterAgo
 *         <br>startOfLastMonthOneYearAgo
 *         <br>startOfLastQuarterOneYearAgo
 *         <br>startOfNextYear</td>
 *         <td>startOfSameHalfLastFiscalYear
 *         <br>startOfSameQuarterLastFiscalYear
 *         <br>startOfTheHalfBeforeLast
 *         <br>startOfTheMonthBeforeLast
 *         <br>startOfTheQuarterBeforeLast
 *         <br>startOfTheWeekBeforeLast
 *         <br>startOfTheYearBeforeLast
 *         <br>threeQuartersAgo
 *         <br>threeQuartersAgoToDate
 *         <br>threeYearsAgo
 *         <br>threeYearsAgoToDate
 *         <br>daysagoxx
 *         <br>weeksagoxx
 *         <br>monthsagoxx
 *         <br>quartersagoxx
 *         <br>yearsagoxx
 *         <br>daysfromnowxx
 *         <br>weeksfromnowxx
 *         <br>monthsfromnowxx
 *         <br>quartersfromnowxx
 *         <br>yearsfromnowxx</td>
 *     </tr>
 * </table>
 * @returns {nlobjSearchFilter} nlobjSearchFilter
 * @since Version 2007.0
 * @memberOf nlobjSearchFilter
 */
var nlobjSearchFilter = function(name, join, operator, value1, value2) { };

/**
 * Returns the formula used for this filter
 * @returns The formula used for this filter
 * @since Version 2011.1
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.getFormula = function() { };

/**
 * Returns the join id for this search filter
 * @returns {String} The string value of the search join
 * @since Version 2008.1
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.getJoin = function() { };

/**
 * Returns the name for this search filter
 * @returns {String} The string value of the search filter
 * @since Version 2007.0
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.getName = function() { };

/**
 * Returns the filter operator that was used
 * @returns {String} The string value of the search operator
 * @since Version 2008.2
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.getOperator = function() { };

/**
 * Returns the summary type used for this filter
 * @returns The summary type used for this filter
 * @since Version 2011.1
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.getSummaryType = function() { };

/**
 * Sets the formula used for this filter. Name of the filter can either be formulatext, formulanumeric, formuladatetime, formulapercent, or formulacurrency.
 * @param {String} formula [required] - The formula used for this filter
 * @returns {nlobjSearchFilter} nlobjSearchFilter
 * @since Version 2011.1
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setFormula = function(formula) { };

/**
 * Adds one or more left parentheses to the start of the filter. Enables the use of logical expressions between search filters.
 * @param {Numbereger} count [optional] - the number of parentheses to add, if count is not specified then one parenthesis is added
 * @since Version 2011.2
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setLeftParens = function(count) { };

/**
 * Sets the filter to exclude this criteria from the results.
 * @param {Boolean} value [required] - If set to true, the criteria are excluded from the search
 * @since Version 2011.2
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setNot = function(value) { };

/**
 * Connects this filter to the following filter with OR logic. The default relationship between filters otherwise is logical AND.
 * @param {Boolean} value [required] - If set to true the filter has a logical OR connected to the next defined filter
 * @since Version 2011.2
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setOr = function(value) { };

/**
 * Adds one or more right parentheses to the end of the filter. Enables the use of logical expressions between search filters.
 * @param {Numbereger} count [optional] - the number of parentheses to add, if count is not specified then one parenthesis is added
 * @since Version 2011.2
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setRightParens = function(count) { };

/**
 * Sets the summary type used for this filter. Filter name must correspond to a search column if it is to be used as a summary filter.
 * @param {String} type [required] - The summary type used for this filter. In your script, use one of the following summary type IDs:
 * @returns {nlobjSearchFilter} nlobjSearchFilter
 * @since Version 2011.1
 * @memberOf nlobjSearchFilter
 */
nlobjSearchFilter.prototype.setSummaryType = function(type) { };

/**
 * Returns an array of nlobjSearchColumn objects containing all the columns returned in a specified search
 * @returns {nlobjSearchColumn[]} nlobjSearchColumn[]
 * @since Version 2009.2
 * @memberOf nlobjSearchResult
 */
nlobjSearchResult.prototype.getAllColumns = function() { };

/**
 * Returns the internal ID for the returned record
 * @returns {Number} The record internal ID as an integer
 * @memberOf nlobjSearchResult
 */
nlobjSearchResult.prototype.getId = function() { };

/**
 * Returns the record type for the returned record
 * @returns {String} The name of the record type as a string - for example, customer, assemblyitem, contact, or projecttask
 * @memberOf nlobjSearchResult
 */
nlobjSearchResult.prototype.getRecordType = function() { };

/**
 * Returns the UI display name (ie,. the text value) for this nlobjSearchColumn. Note that this method is supported on <strong>non-stored</strong> select, image, document fields only.
 * @param {String} name [required] - The name of the search column
 * @param {String} join [optional] - The join internalId for this search column
 * @param {String} summary [optional] - The summary type used for this search column. Use any of the following types:
 * <ul>
 *     <li>group</li>
 *     <li>sum</li>
 *     <li>count</li>
 *     <li>avg</li>
 *     <li>min</li>
 *     <li>max</li>
 * </ul>
 * @returns {String} The UI display name for this nlobjSearchColumn as a string
 * @since Version 2008.1
 * @memberOf nlobjSearchResult
 */
nlobjSearchResult.prototype.getText = function(name, join, summary) { };

/**
 * Can be used on formula fields and non-formula (standard) fields to get the value of a specified search return column
 * @param {nlobjSearchColumn(name,join,summary)} column [required] - Search return column object whose value you want to return
 * @returns {String} String value of the search return column
 * @since Version 2009.1
 * @memberOf nlobjSearchResult
 */
nlobjSearchResult.prototype.getValue = function(column) { };

/**
 * Calls the developer-defined callback function for every result in this set. There is a limit of 4000 rows in the result set returned in forEachResult().
 * <p>Your callback function must have the following signature:
 * <p>boolean callback(nlobjSearchResult result);
 * <p>Note that the work done in the context of the callback function counts towards the governance of the script that called it. For example, if the callback function is running in the context of a scheduled script, which has a 10,000 unit governance limit, you must be sure the amount of processing within the callback function does not put the entire script at risk of exceeding scheduled script governance limits.
 * <p>Also be aware that the execution of the forEachResult(callback) method consumes 10 governance units.
 * callback [required] - A JavaScript function. This may be defined as a separate named function, or it may be an anonymous inline function.
 * @returns {Void}
 * @since Version 2012.1
 * @memberOf nlobjSearchResultSet
 */
nlobjSearchResultSet.prototype.forEachResult = function(callback) { };

/**
 * Returns a list of nlobjSearchColumn objects for this result set. This list contains one nlobjSearchColumn object for each result column in the nlobjSearchResult objects returned by this search.
 * @returns {nlobjSearchColumn[]} nlobjSearchColumn[]
 * @since Version 2012.1
 * @memberOf nlobjSearchResultSet
 */
nlobjSearchResultSet.prototype.getColumns = function() { };

/**
 * Retrieve a slice of the search result. The start parameter is the inclusive index of the first result to return. The end parameter is the exclusive index of the last result to return. For example, getResults(0, 10) retrieves 10 search results, at index 0 through index 9. Unlimited rows in the result are supported, however you can only return 1,000 at at time based on the index values.
 * <p>If there are fewer results available than requested, then the array will contain fewer than end - start entries. For example, if there are only 25 search results, then getResults(20, 30) will return an array of 5 nlobjSearchResult objects.
 * <p>Also be aware that the execution of the getResults(start, end) method consumes 10 governance units.
 * @param {Numbereger} start [required] - The index number of the first result to return, inclusive.
 * @param {Numbereger} end [required] - The index number of the last result to return, exclusive.
 * @returns {nlobjSearchResult[]} nlobjSearchResult[]
 * @throws SSS_INVALID_SEARCH_RESULT_INDEX if start is negative.
 * @throws SSS_SEARCH_RESULT_LIMIT_EXCEEDED if more than 1000 rows are requested.
 * @since Version 2012.1
 * @memberOf nlobjSearchResultSet
 */
nlobjSearchResultSet.prototype.getResults = function(start, end) { };

/**
 * Use this method to get the internal ID of a select option. For example, on a select field called <strong>Colors</strong>, a call to this method might return 1, 2, 3 (to represent the internal IDs for options that appear in a drop-down field as Red, White, Blue).
 * @returns {Number} The integer value of a select option, for example, 1, 2, 3.
 * @since Version 2009.2
 * @memberOf nlobjSelectOption
 */
nlobjSelectOption.prototype.getId = function() { };

/**
 * Use this method to get the UI display label of a select option. For example, on a select field called <strong>Colors</strong>, a call to this method might return Red, White, Blue.
 * @returns The UI display label of a select option
 * @since Version 2009.2
 * @memberOf nlobjSelectOption
 */
nlobjSelectOption.prototype.getText = function() { };

/**
 * Adds a button to a sublist
 * @param {String} name [required] - The internal ID name of the button. Internal ID names must be in lowercase and contain no spaces.
 * @param {String} type [required] - The UI label for the button
 * @param {String} script [optional] - The onclick script function name
 * @returns {nlobjButton} nlobjButton
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.addButton = function(name, label, script) { };

/**
 * Adds a field (column) to a sublist
 * @param {String} name [required] - The internal ID name of the field. Internal ID names must be in lowercase and contain no spaces.
 * @param {String} type [required] - The field type for this field. Use any of the following types:
 * <ul>
 *     <li>text</li>
 *     <li>email</li>
 *     <li>phone</li>
 *     <li>date</li>
 *     <li>datetimetz - This field type lets you combine date and time values in one field. For example, you may want a single field to contain date and time �timestamp� data. After a user enters a date/time value, the data is rendered in the user's preferred date and time format, as well as the user's time zone. Also note that time values are stored in NetSuite down to the second.</li>
 *     <li>currency</li>
 *     <li>float</li>
 *     <li>integer</li>
 *     <li>checkbox</li>
 *     <li>select</li>
 *     <li>url</li>
 *     <li>image - Important: This field type is available <strong>only</strong> for fields appearing on list/staticlist sublists. You cannot specify an <strong>image</strong> field on a form.</li>
 *     <li>timeofday</li>
 *     <li>textarea</li>
 *     <li>percent</li>
 *     <li>radio - only supported for sublists of type list</li>
 * </ul>
 * @param {String} label [required] - The UI label for this field
 * @param {Number|String} source - [optional] - The internalId or scriptId of the source list for this field if it's a select (List/Record) field. In the NetSuite Help Center, see List/Record Type IDs for the internal IDs of all supported list/record types.
 * @returns {nlobjField} nlobjField
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.addField = function(name, type, label, source) { };

/**
 * Adds a "Mark All" and an "Unmark All" button to a sublist. Only valid on scriptable sublists of type <strong>LIST</strong>. Requires a check box column to exist on the form, which will be automatically checked/unchecked depending on what the end user does.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.addMarkAllButtons = function() { };

/**
 * Adds a Refresh button to sublists of type list or staticlist to auto-refresh the sublist if its contents are dynamic. In this case, the sublist is refreshed without having to reload the contents of the entire page.
 * @returns {nlobjButton} nlobjButton
 * @since Version 2009.1
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.addRefreshButton = function() { };

/**
 * Returns the number of lines on a sublist
 * <p>Important: The first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {Number} The integer value of the number of line items on a sublist
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.getLineItemCount = function() { };

/**
 * Returns string value of a sublist field. Note that you cannot set default line item values when the line is not in edit mode.
 * @param {String} group [required] - The sublist internal ID (for example, use addressbook as the ID for the Address sublist). In the NetSuite Help Center, see Scriptable Sublists for a list of sublists that support SuiteScript, sublist internal IDs, and sublist field IDs.
 * @param {String} fldnam [required] - The internal ID of the field (line item) whose value is being returned
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @returns {String} The string value of a sublist line item field
 * @since Version 2010.1
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.getLineItemValue = function(group, fldnam, linenum) { };

/**
 * Designates a particular column as the totalling column, which is used to calculate and display a running total for the sublist
 * @param {String} field [required] - The internal ID name of the field on this sublist used to calculate running total
 * @returns {Void}
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setAmountField = function(field) { };

/**
 * Sets the display style for this sublist. This method is only supported on scripted or staticlist sublists via the UI Object API.
 * @param {String} type [required] - The display type for this sublist. Use either of the following two values:
 * <ul>
 *     <li>hidden</li>
 *     <li>normal - (default)</li>
 * </ul>
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setDisplayType = function(type) { };

/**
 * Adds inline help text to this sublist. This method is only supported on sublists via the UI Object API.
 * @param {String} help [required] - Inline help text used for this sublist
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setHelpText = function(help) { };

/**
 * Sets the label for this sublist. This method is only supported on sublists via the UI Object API.
 * @param {String} label [required] - The UI label for this sublist
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setLabel = function(label) { };

/**
 * Sets the value of a cell in a sublist field.
 * @param {String} name [required] - The internal ID name of the line item field being set
 * @param {Number} linenum [required] - The line number for this field. Note the first line number on a sublist is <strong>1</strong> (not 0).
 * @param {String} value [required] - The value the field is being set to
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setLineItemValue = function(name, linenum,value) { };

/**
 * Sets values for multiple lines (Array of nlobjSearchResult objects or name/value pair Arrays) in a sublist.
 * @param {Array|Array} values [required] - An Array of Arrays containing name/value pairs containing column values for multiple rows -or- an Array of nlobjSearchResult objects containing the results of a search with columns matching the fields on the sublist. Note that several special fields: recordtype, id, and fieldname_display (UI display value for select fields) are automatically added for each search result.
 * Note: For search result data sources, the id and recordType fields are automatically populated for non-summary searches. In addition, search fields are automatically mapped to columns using the following naming convention: name(_join)?(_summary)?(_display)? where join is the join ID, summary is the summary type, and display is used to denote the display value for SELECT return fields.
 * @returns {Void}
 * @since Version 2008.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setLineItemValues = function(values) { };

/**
 * Use this method to designate that a certain field on a sublist must contain a unique value. This method is available on inlineeditor and editor sublists only.
 * @param {String} name [required] - The internal ID of the sublist field that you want to make unique
 * @returns {nlobjField} nlobjField
 * @since Version 2009.2
 * @memberOf nlobjSubList
 */
nlobjSubList.prototype.setUniqueField = function(name) { };

/**
 * Use this method to cancel the current processing of the subrecord and revert subrecord data to the last committed change (submitted in the last commit() call).
 * <p>Note that you will not be able to do any additional write or read operations on the subrecord instance after you have canceled it. You must reload the subrecord from the parent to write any additional data to the subrecord.
 * @returns {Void}
 * @since Version 2011.2
 * @memberOf nlobjSubrecord
 */
nlobjSubrecord.prototype.cancel = function() { };

/**
 * Use this method to commit the subrecord to the parent record. See Saving Subrecords Using SuiteScript for additional information on saving subrecords.
 * @returns {Void}
 * @since Version 2011.2
 * @memberOf nlobjSubrecord
 */
nlobjSubrecord.prototype.commit = function() { };

/**
 * Sets the inline help used for this tab or subtab
 * @param {String} help [required] - Inline help used for this tab or subtab
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjTab
 */
nlobjTab.prototype.setHelpText = function(help) { };

/**
 * Sets the tab UI label
 * @param {String} label [required] - The UI label used for this tab or subtab
 * @returns {nlobjTab} nlobjTab
 * @since Version 2008.2
 * @memberOf nlobjTab
 */
nlobjTab.prototype.setLabel = function(label) { };

/**
 * Binds nlobjRecord object to variable name used in template.
 * @param {String} var [required] - variable name that represents record
 * @param {nlobjRecord} record [required] - NetSuite record
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjTemplateRenderer
 */
nlobjTemplateRenderer.prototype.addRecord = function(variable, record) { };

/**
 * Binds nlobjSearchResult object to variable name used in template.
 * @param {String} var [required] - variable name that represents search result
 * @param {nlobjSearchResult} searchResult [required] - NetSuite search result
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjTemplateRenderer
 */
nlobjTemplateRenderer.prototype.addSearchResults = function(variable, searchResult) { };

/**
 * Renders HTML output to nlobjResponse object.
 * @returns HTML output to an HTTP response object
 * @since Version 2013.1
 * @memberOf nlobjTemplateRenderer
 */
nlobjTemplateRenderer.prototype.renderToResponse = function() { };

/**
 * Returns template content interpreted by FreeMarker as XML string that can be passed to nlapiXMLToPDF(xmlstring) to produce PDF output.
 * @returns XML string of template interpreted by FreeMarker
 * @since Version 2013.1
 * @memberOf nlobjTemplateRenderer
 */
nlobjTemplateRenderer.prototype.renderToString = function() { };

/**
 * Passes in raw string of template to be transformed by FreeMarker.
 * @param {String} template [required] - raw string of template
 * @returns {Void}
 * @since Version 2013.1
 * @memberOf nlobjTemplateRenderer
 */
nlobjTemplateRenderer.prototype.setTemplate = function(template) { };
