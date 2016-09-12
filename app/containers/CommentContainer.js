var React = require('react');
var CommentListContainer = require('../containers/CommentListContainer');
var CommentFormContainer = require('../containers/CommentFormContainer');

var CommentContainer = React.createClass({
  render: function () {
    return (
      <div>
      	<CommentFormContainer
      		comments={this.props.comments}
      		article_id={this.props.article_id}
      		user_id={this.props.user_id} />
      	<CommentListContainer
      		comments={this.props.comments} />
      </div>
    )
  }

});

module.exports = CommentContainer;