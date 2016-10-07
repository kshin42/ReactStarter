var React = require('react');

var AnnoucementsPage = React.createClass ({

  componentDidMount: function() {
    $( ".annouce" ).hide();
    $( ".annouce" ).fadeIn("slow");
  },

  render: function () {
    return <div className="ui grid">

    <div className="row centered">
      <h2 className="ui centered inverted header"> Just so you know! </h2>
    </div>

    <div className="row centered annouce">
      <div className="ui hidden padded raised text container segment">
      <strong>My First Annoucement!!!</strong>
      <div className="ui divider"></div>
      <p>This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th </p>
      </div>
    </div>

    <div className="row centered annouce">
      <div className="ui padded raised text container segment">
      <strong>My Second Annoucement!!!</strong>
      <div className="ui divider"></div>
      <p>This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th </p>
      </div>
    </div>

    <div className="row centered annouce">
      <div className="ui padded raised text container segment">
      <strong>My Third Annoucement!!!</strong>
      <div className="ui divider"></div>
      <p>This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th </p>
      </div>
    </div>

    <div className="row centered annouce">
      <div className="ui padded raised text container segment">
      <strong>My Fourth Annoucement!!!</strong>
      <div className="ui divider"></div>
      <p>This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th This is the content of the annoucement. This is th </p>
      </div>
    </div>

    </div>
  }
});

module.exports = AnnoucementsPage;
