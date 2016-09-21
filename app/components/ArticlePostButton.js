var React = require('react');

var ArticlePostButton = React.createClass({
  render: function () {
    if ( this.props.sessionId && localStorage.session ) {
      var buttonRender =
        <button id="post-article-button" className="btn btn-default" onClick={ this.props.onToggleArticleForm }>Post Article</button>
    } else {
      var buttonRender =
        <p>Please sign up or login to post an article</p>
    }
    return (
      <div>
        { buttonRender }
      </div>
    )
  }
});

module.exports = ArticlePostButton;