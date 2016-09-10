var React = require('react');

var CommentContainer = React.createClass({
  render: function () {
    return (
      <div>
        <p>{ this.props.data.body }</p>
      </div>
    )
  }

});

module.exports = CommentContainer;