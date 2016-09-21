var React = require('react');
var CommentFormView = require('../components/CommentFormView');
var $ = require('jquery');

var CommentFormContainer = React.createClass({
	render: function() {
		if ( this.props.sessionId && localStorage.session ) {
			var commentFormRender =
				<CommentFormView
          postCommentBody={ this.props.postCommentBody }
					onUpdatePostComment={this.props.handleUpdatePostComment}
					onSubmitPostComment={this.props.handleSubmitPostComment} />
		} else {
			var commentFormRender =
				<p className="text-center">Please sign up or login to comment on this article</p>
		}
		return (
			<div>
				{ commentFormRender }
			</div>
		)
	}
});

module.exports = CommentFormContainer;