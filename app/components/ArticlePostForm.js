var React = require('react');

var ArticlePostForm = React.createClass({
  render: function () {
    return (
      <div className="form-group col-lg-12 text-center form-top">
        <form className="article-form" onSubmit={ this.props.onSubmitForm }>
          <input type="text" className="form-control article-space" rows="1" name="title" onChange={ this.props.onUpdate } placeholder="article title" value={ this.props.articleTitle } />

          <textarea className="form-control article-space" rows="30" name="body" onChange={ this.props.onUpdate } placeholder="article body" value={ this.props.articleBody }></textarea>

          <input className="btn btn-default" type="submit" value="submit article" />
        </form>
      </div>
    )
  }
});

module.exports = ArticlePostForm;