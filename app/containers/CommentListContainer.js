var React = require('react');
var CommentBodyContainer = require('../containers/CommentBodyContainer');

var CommentListCiontainer = React.createClass({
	render: function() {
		console.log('comment list', this.props)
		return (
			<div>
				{
					this.props.comments.map(function(comment){
						return <CommentBodyContainer
							key={comment.id}
							comment={comment} />
					})
				}
			</div>
		)
	}
});

module.exports = CommentListCiontainer;