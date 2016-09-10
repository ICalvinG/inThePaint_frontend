var React = require('react');

var TeamShowLinks = React.createClass({
  render: function () {
  debugger;
    return (
      <div>
        <h1 onClick={ function() { this.props.onUpdateRender("roster") } }>Roster</h1>
        <h1 onClick={ function() { this.props.onUpdateRender("articles") } }>Articles</h1>
      </div>
    )
  }
});

module.exports = TeamShowLinks;