var React = require('react');

var ArticleDeleteButton = React.createClass({
  render: function () {
    return (
      <button type="button" className="btn btn-default" onClick={ this.props.handleDeleteArticle }>delete</button>
    )
  }
});

module.exports = ArticleDeleteButton;