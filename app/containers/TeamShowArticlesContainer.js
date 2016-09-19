var React = require('react');
var ArticleTitleContainer = require('../containers/ArticleTitleContainer');
var ArticlePostButton = require('../components/ArticlePostButton');
var ArticlePostFormContainer = require('../containers/ArticlePostFormContainer');
var $ = require("jquery");

var TeamShowArticlesContainer = React.createClass({
  getInitialState: function () {
    return {
      team: this.props.team,
      articles: this.props.articles,
      postButton: true,
      title: "",
      body: ""
    }
  },
  componentWillReceiveProps: function ( nextProps ) {
    this.setState({
      team: nextProps.team,
      articles: nextProps.articles
    })
  },
  handleToggleArticleForm: function (e) {
    if ( e.target.id === "post-article-button" ) {
      this.setState({
        postButton: false
      })
    } else {
      this.setState({
        postButton: true
      })
    }
  },
  handleUpdateNewArticle: function ( obj ) {
    this.setState(obj)
  },
  handleSubmitForm: function (e) {
    e.preventDefault();
    $.ajax({
      url: "http://localhost:3000/teams/" + this.state.team.id + "/articles",
      type: "POST",
      data: {
        articles: { title: this.state.title, body: this.state.body, team_id: this.state.team.id, user_id: 1 }
      }
    }).done( function( response ) {
      this.state.articles.push( response.article );

      this.setState({
        articles: this.state.articles,
        postButton: true,
        title: "",
        body: ""
      })
    }.bind(this))
  },
  render: function () {
    if ( this.state.postButton ) {
      var renderPostArticle =
        <ArticlePostButton
            onToggleArticleForm={ this.handleToggleArticleForm } />
    } else {
      var renderPostArticle =
        <ArticlePostFormContainer
            articleTitle={ this.state.title }
            articleBody={ this.state.body }
            onToggleArticleForm={ this.handleToggleArticleForm }
            onUpdateNewArticle={ this.handleUpdateNewArticle }
            onSubmitForm={ this.handleSubmitForm } />
    }
    return (
      <div className="container">
      <div className="all-articles article-post-button">
        { renderPostArticle }
      </div>
      <div className="card">
        <ul className="row">
        {
          this.state.articles.map( function( article ) {
            return <ArticleTitleContainer
                      key={ article.id }
                      data={ article } />
          })
        }
        </ul>
      </div>
      </div>
    )
  }
});

module.exports = TeamShowArticlesContainer;