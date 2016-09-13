var React = require('react');

var PlayerView = React.createClass({
  render: function () {
    return (
      <div className="container">
        <li className="col-lg-4">{ this.props.player.name }</li>
      </div>
    )
  }
});

module.exports = PlayerView;