var React = require('react');

var Comment = React.createClass({
  render: function () {
    return (
      <div>
        <p>{ this.props.data.body }</p>
      </div>
    )
  }

});

module.exports = Comment;