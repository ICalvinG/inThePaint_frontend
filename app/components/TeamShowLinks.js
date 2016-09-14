var React = require('react');
var $ = require('jquery');

var TeamShowLinks = React.createClass({
  handleClick: function(e) {
    this.props.onUpdateRender( e.target.id );
  },
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <h1 id="articles" className="col-lg-4 btn btn-default text-center" onClick={ this.handleClick }>User Articles</h1>
          <h1 id="roster" className="col-lg-4 col-lg-offset-2 btn btn-default" onClick={ this.handleClick }>Team Roster</h1>
        </div>
      </div>
    )
  }
});

module.exports = TeamShowLinks;