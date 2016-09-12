var React = require('react');
var CommentContainer = require('../containers/CommentContainer');
var $ = require('jquery');

var ArticleContainer = React.createClass({
  // handleCommentEdit: function() {

  // },
  render: function () {
    var article = this.props.article.id
    var team = this.props.article.team_id
    var user = this.props.article.user_id
    return (
      <div>
        <h1>{ this.props.article.title }</h1>

        <p>{ this.props.article.body }</p>

        <h3>Comments</h3>

        <CommentContainer
          comments={this.props.comments}
          team_id={team}
          article_id={article} 
          user_id={user}
        />
      </div>
    )
  }
});

module.exports = ArticleContainer;