var React = require('react');
var $ = require('jquery');

var CommentBodyContainer = React.createClass({
	getInitialState: function() {
		return {
			comment: this.props.comment,
			commentBody: this.props.comment.body,
			editing: false
		}
	},
	handleUpdateComment: function(event) {
		this.setState({ commentBody: event.target.value})
	},
	handleEdit: function() {
		this.setState({ editing: true });
	},
	handleSave: function() {
		$.ajax({
			url: 'http://localhost:3000/teams/' + this.props.team_id + "/articles/" + this.props.comment.article_id + "/comments/" + this.props.comment.id,
			type: 'PUT',
			data: {
				comments: { body: this.state.commentBody, article_id: this.state.comment.article_id, user_id: this.state.comment.user_id }
			}
		}).done(function(response){
			this.setState({
				comment: response.comment ,
				editing: false
			})
		}.bind(this));
	},
	handleCommentDelete: function () {
		this.props.onCommentDelete( this.state.comment.id );
	},
	renderNormal: function() {
		if ( localStorage.session && this.props.currentUser === localStorage.session && parseInt(this.props.currentUser) === this.state.comment.user_id ) {
			var editCommentRender =
				<div>
					<button type="button" className="btn btn-default edit-btn" onClick={this.handleEdit}>Edit</button>
					<button type="button" className="btn btn-default" onClick={this.handleCommentDelete}>Delete</button>
				</div>
		}
		return (
			<div>
				<p>{this.state.comment.body}</p>
				{ editCommentRender }
				<hr></hr>
			</div>
		)
	},
	renderForm: function() {
		return (
			<div>
				<textarea className="form-control edit-comment" rows="5" onChange={this.handleUpdateComment} value={this.state.commentBody}></textarea>
				<button type="button" className="btn btn-default" onClick={this.handleSave}>Save</button>
				<hr></hr>

			</div>
		)
	},
	render: function() {
		if(this.state.editing){
			return this.renderForm();
		} else {
			return this.renderNormal();
		}
	}
});

module.exports = CommentBodyContainer;