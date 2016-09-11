var React = require('react');

var ArticlePostButton = React.createClass({
  render: function () {
    return (
      <button id="post-article-button" onClick={ this.props.onToggleArticleForm }>Post Article</button>
    )
  }
});

module.exports = ArticlePostButton;