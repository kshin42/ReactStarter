var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.js')

var Hello = React.createClass({
  render: function() {
    return <div> <h1 className="red">
      Hello!
    </h1>
    <Header />
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
