var React = require('react');

var CancelPostArticleButton = React.createClass({
  render: function () {
    return (
      <button id="cancel-post-article-button" onClick={ this.props.onToggleArticleForm }>Cancel</button>
    )
  }
});

module.exports = CancelPostArticleButton;