var React = require('react');

var CommentForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={ this.props.onSubmit }>
        <textarea name="comment[body]" placeholder="leave a comment" onChange={ this.props.onUpdatePostComment } value={ this.props.postComment }></textarea>

        <input type="submit" value="submit comment" />
      </form>
    )
  }
});

module.exports = CommentForm;