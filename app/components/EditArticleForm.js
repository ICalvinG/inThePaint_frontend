var React = require('react');

var EditArticleForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={ this.props.onSubmitArticleEdit }>
        <textarea name="body" onChange={ this.props.onUpdateInput } value={ this.props.articleBody }></textarea>
        <input type="submit" value="edit article" />
      </form>
    )
  }
});

module.exports = EditArticleForm;