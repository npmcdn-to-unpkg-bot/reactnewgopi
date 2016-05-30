var X2JS = require('x2js');


module.exports = {
	json: function()
	{
		var xml = "<foo attr=\"value\">bar</foo>";
		// console.log("input -> %s", xml)

		// // xml to json
		// var json = parser.toJson(xml);
		// console.log("to json -> %s", json);

		// // json to xml
		// var xml = parser.toXml(json);
		// return  json;

		var x2js = new X2JS();
var document = x2js.xml2js(xml);

//console.log(document.MyRootElement.ElementX[1].toString());

//var xml = x2js.js2xml(document);
console.log(document);

		return document;

	}
};