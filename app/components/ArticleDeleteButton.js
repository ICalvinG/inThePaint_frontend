var React = require('react');

var ArticleDeleteButton = React.createClass({
  render: function () {
    return (
      <button type="button" onClick={ this.props.handleDeleteArticle }>delete</button>
    )
  }
});

module.exports = ArticleDeleteButton;