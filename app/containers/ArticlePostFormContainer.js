var React = require('react');
var ArticlePostForm = require('../components/ArticlePostForm');
var CancelPostArticleButton = require('../components/CancelPostArticleButton');

var ArticlePostFormContainer = React.createClass({
  handleUpdate: function (e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.props.onUpdateNewArticle(obj);
  },
  render: function () {
    return (
      <div>
        <CancelPostArticleButton
            onToggleArticleForm={ this.props.onToggleArticleForm } />
            
        <ArticlePostForm
            onUpdate={ this.handleUpdate }
            onSubmitForm={ this.props.onSubmitForm }
            articleTitle={ this.props.articleTitle }
            articleBody={ this.props.articleBody } />

      </div>
    )
  }
});

module.exports = ArticlePostFormContainer;