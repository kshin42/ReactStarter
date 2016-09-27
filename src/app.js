var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar.js');

var Hello = React.createClass({

  render: function() {
    return <div>
      <Navbar />
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
