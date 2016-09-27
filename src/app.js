var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return <div>

    <div className="ui secondary menu">
      <a className="active item">Home</a>
      <a className="item">Calendar</a>
      <a className="item">Annoucements</a>
      <a className="item">Committees</a>
    </div>

    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
