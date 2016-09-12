var React = require('react');
var CommentFormView = require('../components/CommentFormView');
var $ = require('jquery');

var CommentFormContainer = React.createClass({
	getInitialState: function() {
		return { postComment: '' }
	},
  handleUpdatePostComment: function ( event ) {
    this.setState({
      postComment: event.target.value
    });
  },
	reload: function() {
		location.reload();
	},
  handleSubmit: function ( event ) {
    event.preventDefault();
    $.ajax({
			url: 'http://localhost:3000/teams/' + this.props.team + "/articles/" + this.props.article_id + "/comments/",
      type: "POST",
      data: {
      	comments: { body: this.state.postComment, article_id: this.props.article_id, user_id: this.props.user_id }
      }
    }).done( function( response ) {
      // this.state.comments.push( response.comment );

      // this.setState({
      //   comments: this.state.comments,
      //   postComment: ""
      // })
    }.bind(this));
    this.reload();
  },
	render: function() {
		return (
			<div>
				<CommentFormView
					onUpdatePostComment={this.handleUpdatePostComment}
					onSubmit={this.handleSubmit} />
			</div>
		)
	}
});

module.exports = CommentFormContainer;