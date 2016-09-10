var React = require('react');

var PlayerView = React.createClass({
  render: function () {
    return (
      <div>
        <li>{ this.props.player.name }</li>
      </div>
    )
  }
});

module.exports = PlayerView;