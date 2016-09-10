var React = require('react');

var ArticlePostForm = React.createClass({
  render: function () {
    return (
      <div>
        <form onSubmit={ this.props.onSubmitForm }>
          <input type="text" name="title" onChange={ this.props.onUpdate } placeholder="article title" value={ this.props.articleTitle } />

          <textarea name="body" onChange={ this.props.onUpdate } placeholder="article body" value={ this.props.articleBody }></textarea>

          <input type="submit" value="submit article" />
        </form>
      </div>
    )
  }
});

module.exports = ArticlePostForm;