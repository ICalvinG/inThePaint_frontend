var React = require('react');
var CommentContainer = require('../containers/CommentContainer');
var ArticleEditContainer = require('../containers/ArticleEditContainer');
var $ = require('jquery');

var ArticleContainer = React.createClass({
  getInitialState: function () {
    return {
      article: this.props.article,
      body: this.props.article.body,
      editing: false
    }
  },
  componentWillReceiveProps: function( nextProps ) {
    this.setState({
      article: nextProps.article,
      body: nextProps.article.body
    })
  },
  handleToggleEditArticleForm: function ( e ) {
    if ( e.target.id === "edit-article-button" ) {
      this.setState({
        editing: true
      })
    } else {
      this.setState({
        editing: false
      })
    }
  },
  handleUpdateArticle: function (obj) {
    this.setState(obj);
  },
  handleSubmitArticleEdit: function( e ) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/teams/' + this.state.article.team_id + '/articles/' + this.state.article.id,
      type: "PUT",
      data: { articles: { body: this.state.body, team_id: this.state.article.team_id }, user_id: this.state.article.user_id }
    }).done( function( response ) {
      this.setState({
        article: response.article,
        editing: false
      })
    }.bind(this));
  },
  render: function () {
    var article = this.state.article.id
    var team = this.state.article.team_id
    var user = this.state.article.user_id
    return (
      <div>
        <h1>{ this.state.article.title }</h1>

        <p>{ this.state.article.body }</p>

        <ArticleEditContainer
            articleBody={ this.state.body }
            editing={ this.state.editing }
            handleToggleEditArticleForm={ this.handleToggleEditArticleForm }
            handleUpdateArticle={ this.handleUpdateArticle }
            onSubmitArticleEdit={ this.handleSubmitArticleEdit } />

        <h3>Comments</h3>

        <CommentContainer
          comments={this.props.comments}
          team_id={team}
          article_id={article}
          user_id={user} />
      </div>
    )
  }
});

module.exports = ArticleContainer;