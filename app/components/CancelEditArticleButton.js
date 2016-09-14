var React = require('react');

var CancelEditArticleButton = React.createClass({
  render: function () {
    return (
      <button id="cancel-edit-article-button" className="btn btn-default" onClick={ this.props.onToggleEditArticleForm }>Cancel</button>
    )
  }
});

module.exports = CancelEditArticleButton;