var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./common/navbar.js');
var HomePage = require('./home/home.js');
var CalendarPage = require('./calendar/calendar.js');
var AnnoucementsPage = require('./annoucements/annoucements.js');
var CommitteesPage = require('./committees/committees.js');

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

        {this.state.Home ? <HomePage /> : null }
        {this.state.Calendar ? <CalendarPage /> : null }
        {this.state.Annoucements? <AnnoucementsPage />: null }
        {this.state.Committees ? <CommitteesPage />: null }

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
