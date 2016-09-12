var React = require('react');
var EditArticleFormContainer = require('../containers/EditArticleFormContainer');
var $ = require('jquery');

var ArticleEditContainer = React.createClass({
  renderButton: function () {
    return (
      <button id="edit-article-button" type="button" onClick={ this.props.handleToggleEditArticleForm }>Edit</button>
    )
  },
  renderForm: function () {
    return (
      <EditArticleFormContainer
        articleBody={ this.props.articleBody }
        onSubmitArticleEdit={ this.props.onSubmitArticleEdit }
        onUpdateArticle={ this.props.handleUpdateArticle }
        onToggleEditArticleForm={ this.props.handleToggleEditArticleForm } />
      )
  },
  render: function () {
    if ( this.props.editing ) {
      return this.renderForm()
    } else {
      return this.renderButton()
    }
  }
});

module.exports = ArticleEditContainer;