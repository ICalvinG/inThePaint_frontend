var React = require('react');

var CancelPostArticleButton = React.createClass({
  render: function () {
    return (
      <button id="cancel-post-article-button" className="btn btn-default" onClick={ this.props.onToggleArticleForm }>Cancel</button>
    )
  }
});

module.exports = CancelPostArticleButton;