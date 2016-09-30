var React = require('react');

var Navbar = React.createClass ({
  render: function() {
    return <div>

    <div className="ui inverted secondary menu">
      <a className={"item"+(this.props.PHome ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Home")} >Home</a>
      <a className={"item"+(this.props.PCalendar  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Calendar")} >Calendar</a>
      <a className={"item"+(this.props.PAnnoucements  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Annoucements")} >Annoucements</a>
      <a className={"item"+(this.props.PCommittees  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Committees")}>Committees </a>
    </div>

    </div>
  },

  handleClick: function(tab) {
    this.props.navClick(tab);
  }
});

module.exports = Navbar;
