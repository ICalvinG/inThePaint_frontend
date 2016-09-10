var React = require('react');
var $ = require('jquery');

var TeamShowLinks = React.createClass({
  handleClick: function(e) {
    this.props.onUpdateRender( e.target.id );
  },
  render: function () {
    return (
      <div>
        <h1 id="roster" onClick={ this.handleClick }>Roster</h1>
        <h1 id="articles" onClick={ this.handleClick }>Articles</h1>
      </div>
    )
  }
});

module.exports = TeamShowLinks;