var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var jsn = require('../api/test')


var XmlParent = React.createClass({

    componentDidMount:function () {
        /*var xml = "<foo>bar</foo>";
        var json = parser.toJson(xml); //returns a string containing the JSON structure by default
        console.log(json);
        alert(kjk);*/
        console.log(jsn.json());

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
