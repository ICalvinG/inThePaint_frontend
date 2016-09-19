var React = require('react');

var TeamShowHeader = React.createClass({
  render: function () {
    return (
      <div className="text-center article-logo">
        <img src={this.props.team.logo} width="300px"/>
      </div>
    )
  }
});

module.exports = TeamShowHeader;