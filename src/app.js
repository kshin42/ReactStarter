var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar.js');

var Hello = React.createClass({

  getInitialState: function() {
    return {
      Home: true,
      Calendar: false,
      Annoucements: false,
      Committees: false
    }
  },

  render: function() {
    return <div>
      <Navbar
        navClick={this.handleChildClick}
        PHome={this.state.Home}
        PCalendar={this.state.Calendar}
        PAnnoucements={this.state.Annoucements}
        PCommittees={this.state.Committees} />
    </div>
  },

  handleChildClick: function(tab) {
    var update = {
      Home: false,
      Calendar: false,
      Annoucements: false,
      Committees: false
    }
    update[tab] = true;
    this.setState(update);
  }

});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
