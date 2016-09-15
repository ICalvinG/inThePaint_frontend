var React = require('react');
var CommentFormView = require('../components/CommentFormView');
var $ = require('jquery');

var CommentFormContainer = React.createClass({
	render: function() {
		return (
			<div>
				<CommentFormView
          postCommentBody={ this.props.postCommentBody }
					onUpdatePostComment={this.props.handleUpdatePostComment}
					onSubmitPostComment={this.props.handleSubmitPostComment} />
			</div>
		)
	}
});

module.exports = CommentFormContainer;