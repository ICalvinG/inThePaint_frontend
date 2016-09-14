var React = require('react');

var EditArticleForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={ this.props.onSubmitArticleEdit }>
        <textarea className="form-control new-comment" rows="5" name="body" onChange={ this.props.onUpdateInput } value={ this.props.articleBody }></textarea>
        <input type="submit" className="btn btn-default" value="Save" />
      </form>
    )
  }
});

module.exports = EditArticleForm;