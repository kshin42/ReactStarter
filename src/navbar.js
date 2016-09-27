var React = require('react');

var Navbar = React.createClass ({
  render: function() {
    return <div>

    <div className="ui secondary menu">
      <a className={"item"+(this.props.PHome==true ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Home")} >Home</a>
      <a className={"item"+(this.props.PCalendar==true  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Calendar")} >Calendar</a>
      <a className={"item"+(this.props.PAnnoucements==true  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Annoucements")} >Annoucements</a>
      <a className={"item"+(this.props.PCommittees==true  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Committees")}>Committees </a>
    </div>

    </div>
  },

  handleClick: function(tab) {
    this.props.navClick(tab);
  }
});

module.exports = Navbar;
