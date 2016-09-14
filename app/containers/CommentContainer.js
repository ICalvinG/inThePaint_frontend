var React = require('react');
var CommentListContainer = require('../containers/CommentListContainer');
var CommentFormContainer = require('../containers/CommentFormContainer');

var CommentContainer = React.createClass({
  render: function () {
    return (
      <div className="container card comment-container">
      	<CommentFormContainer
      		comments={this.props.comments}
      		article_id={this.props.article_id}
      		user_id={this.props.user_id}
          team_id={this.props.team_id}
          />
      	<CommentListContainer
          team_id={this.props.team_id}
      		comments={this.props.comments} />
      </div>
    )
  }

});

module.exports = CommentContainer;