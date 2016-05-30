var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var UTILS = require('./utils.jsx');
//var parser = require('xml2json');

require('style!css!bootstrap/dist/css/bootstrap.min.css');




var XmlParent = React.createClass({

    componentDidMount:function () {
        /*var xml = "<foo>bar</foo>";
        var json = parser.toJson(xml); //returns a string containing the JSON structure by default
        console.log(json);
        alert(kjk);*/

    },

    render: function()
    {
        return(
            <div>
                Sample text BMS
            </div>
        );
    }

});


ReactDOM.render(<XmlParent/>, document.getElementById('main2'));
