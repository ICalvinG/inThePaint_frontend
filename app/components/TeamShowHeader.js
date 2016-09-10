var React = require('react');

var TeamShowHeader = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{ this.props.team.name }</h1>
      </div>
    )
  }
});

module.exports = TeamShowHeader;