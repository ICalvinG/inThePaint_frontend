var React = require('react');
var CommentBodyContainer = require('../containers/CommentBodyContainer');

var CommentListCiontainer = React.createClass({
	render: function() {
		var team_id = this.props.team_id;
		console.log('comment list', this.props)
		return (
			<div>
				{
					this.props.comments.map(function(comment){
						return <CommentBodyContainer
							key={comment.id}
							comment={comment}
							team_id ={team_id}
							onCommentDelete={ this.props.handleCommentDelete }
							currentUser={ this.props.currentUser }
							sessionId={ this.props.sessionId } />
					}.bind(this))
				}
			</div>
		)
	}
});

module.exports = CommentListCiontainer;