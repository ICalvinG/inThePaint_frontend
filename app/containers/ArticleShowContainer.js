var React = require('react');
var CommentContainer = require('../containers/CommentContainer');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var ArticleEditContainer = require('../containers/ArticleEditContainer');
var ArticleDeleteButton = require('../components/ArticleDeleteButton');
var $ = require('jquery');

var ArticleShowContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      team: {},
      article: {},
      comments: [],
      body: "",
      editing: false
    }
  },
  componentDidMount: function() {
    var path = this.props.location.pathname;
    $.ajax({
      url: "http://localhost:3000/" + path,
      type: "GET"
    }).done( function( response ) {
      this.setState({
        team: response.team,
        article: response.article,
        comments: response.comments,
        body: response.article.body
      })
    }.bind(this));
  },
  handleToggleEditArticleForm: function ( e ) {
    if ( e.target.id === "edit-article-button" ) {
      this.setState({
        editing: true
      })
    } else {
      this.setState({
        editing: false,
        body: this.state.article.body
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
  handleDeleteArticle: function () {
    $.ajax({
      url: "http://localhost:3000/teams/" + this.state.article.team_id + "/articles/" + this.state.article.id,
      type: "DELETE"
    }).done(  function( response ) {
      this.context.router.push({
        pathname: '/teams',
        query: {
          id: this.state.article.team_id,
          name: this.state.team.market + " " + this.state.team.name
        }
      })
    }.bind(this))
  },
  render: function () {
    var article = this.state.article.id
    var team = this.state.article.team_id
    var user = this.state.article.user_id
    return (
      <div className="container">
        <div className="home-button">
          <Link className="btn btn-default" to='/'>Home</Link>
        </div>
        <hr></hr>
        <h1>{ this.state.article.title }</h1>

        <p>{ this.state.article.body }</p>

        <ArticleEditContainer
            articleBody={ this.state.body }
            editing={ this.state.editing }
            handleToggleEditArticleForm={ this.handleToggleEditArticleForm }
            handleUpdateArticle={ this.handleUpdateArticle }
            onSubmitArticleEdit={ this.handleSubmitArticleEdit } />

        <ArticleDeleteButton
            handleDeleteArticle={ this.handleDeleteArticle } />

        <hr></hr>

        <h3>Comments</h3>

        <CommentContainer
          comments={this.state.comments}
          team_id={team}
          article_id={article}
          user_id={user} />
      </div>
    )
  }
});

module.exports = ArticleShowContainer;