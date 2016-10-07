var React = require('react');

var HomePage = React.createClass ({

  componentDidMount: function() {
    $( ".logo" ).hide();
    $( ".logo" ).fadeIn("slow");
  },

  render: function () {
    return <div className="ui grid">

      <div className="row" style={{padding: '3em'}}></div>

      <div className="row centered logo">
        <img className="ui image" src="src/images/C1Logo.png"></img>
      </div>

      <div className="row centered logo">
        <p className="ui segment" style={{fontSize: '2em'}}>This is the TDP program. Welcome to the site and have a look around.</p>
      </div>
      </div>
  }
});

module.exports = HomePage;
