var React = require('react');
var ReactDOM = require('react-dom');

var App = react.createClass({
    render: function() {
        return (
            <div>
                <div id="header"></div>
                <div className="container"></div>
            </div>
        );
    }
})

ReactDOM.render(<App />, document.getElementById('main'));