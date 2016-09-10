var React = require('react');
var ArticleTitleContainer = require('../containers/ArticleTitleContainer');
var ArticlePostButton = require('../components/ArticlePostButton');
var ArticlePostForm = require('../components/ArticlePostForm');

var TeamShowArticlesContainer = React.createClass({
  getInitialState: function () {
    return {
      postButton: true,
      newArticle: {}
    }
  },
  handleToggleArticleForm: function (e) {
    if ( e.target.id === "post-article-button" ) {
      this.setState({
        postButton: false
      })
    } else {
      this.setState({
        postButton: true
      })
    }
  },
  handleUpdateNewArticle: function () {

  },
  handleSubmit: function (e) {

  },
  render: function () {
    if ( this.state.postButton ) {
      var renderPostArticle =
        <ArticlePostButton
            onToggleArticleForm={ this.handleToggleArticleForm } />
    } else {
      var renderPostArticle =
        <ArticlePostForm
            onToggleArticleForm={ this.handleToggleArticleForm }
            onUpdateNewArticle={ this.handleUpdateNewArticle }
            onSubmit={ this.handleSubmit } />
    }
    return (
      <div>
        <ul>
        {
          this.props.articles.map( function( article ) {
            return <ArticleTitleContainer
                      key={ article.id }
                      data={ article } />
          })
        }
        </ul>

        { renderPostArticle }
      </div>
    )
  }
});

module.exports = TeamShowArticlesContainer;