var React = require('react');
var CancelPostArticleButton = require('../components/CancelPostArticleButton');

var ArticlePostForm = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Post article Form</h1>

        <CancelPostArticleButton
            onToggleArticleForm={ this.props.onToggleArticleForm } />
      </div>
    )
  }
});

module.exports = ArticlePostForm;