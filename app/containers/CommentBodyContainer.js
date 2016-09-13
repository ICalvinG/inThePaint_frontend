var React = require('react');
var $ = require('jquery');

var CommentBodyContainer = React.createClass({
	getInitialState: function() {
		return {
			comment: this.props.comment,
			editing: false
		}
	},
	handleUpdateComment: function(event) {
		this.setState({ comment: event.target.value})
	},
	handleEdit: function() {
		this.setState({ editing: true });
	},
	reload: function() {
		location.reload();
	},
	handleSave: function() {
		$.ajax({
		url: 'http://localhost:3000/teams/' + this.props.team_id + "/articles/" + this.props.comment.article_id + "/comments/" + this.props.comment.id,
		type: 'put',
		data: {comments: { body: this.state.comment, article_id: this.props.comment.article_id, user_id: this.props.comment.article_id } }
		}).done(function(response){
			console.log(response)
		}.bind(this));
		this.reload();
	},
	renderNormal: function() {
		return (
			<div>
				<p>{this.state.comment.body}</p>
				<button type="button" onClick={this.handleEdit}>Edit</button>
				<button type="button" onClick={this.handleCommentDelete}>Delete</button>
			</div>
		)		
	},
	renderForm: function() {
		return (
			<div>
				<textarea onChange={this.handleUpdateComment} value={this.state.comment.body}></textarea>
				<button type="button" onClick={this.handleSave}>Save</button>
			</div>
		)
	},
	handleCommentDelete: function() {
		console.log(this.props)
    $.ajax({
      url: 'http://localhost:3000/teams/' + this.props.team_id + "/articles/" + this.state.comment.article_id + "/comments/" + this.state.comment.id,
      type: 'delete',
    }).done(function(response){
    	console.log(response)
    }.bind(this));
    location.reload();
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