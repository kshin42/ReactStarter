var React = require('react');

var Navbar = React.createClass ({
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

    <div className="ui secondary menu">
      <a className={"item"+(this.state.Home==true ? ' active' : '')}
         onClick={this.handleClick.bind(this,"Home")} >Home</a>
      <a className={"item"+(this.state.Calendar==true  ? ' active' : '')}
         onClick={this.handleClick.bind(this,"Calendar")} >Calendar</a>
      <a className={"item"+(this.state.Annoucements==true  ? ' active' : '')}
         onClick={this.handleClick.bind(this,"Annoucements")} >Annoucements</a>
      <a className={"item"+(this.state.Committees==true  ? ' active' : '')}
        onClick={this.handleClick.bind(this,"Committees")}>Committees </a>
    </div>

    </div>
  },

  handleClick: function(tab) {
    var update = {
      Home: false,
      Calendar: false,
      Annoucements: false,
      Committees: false
    };
    update[tab] = true;
    this.setState(update);
  }
});

module.exports = Navbar;
