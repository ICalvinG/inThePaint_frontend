var React = require('react');
var Article = require('../components/Article');
var CommentForm = require('../components/CommentForm');
var $ = require('jquery');


var ArticlesShowContainer = React.createClass({
  getInitialState: function() {
    return {
      article: {},
      comments: [],
      postComment: ""
    }
  },
  componentDidMount: function() {
    var path = this.props.location.pathname;
    $.ajax({
      url: "http://localhost:3000/" + path,
      type: "GET"
    }).done( function( response ) {
      this.setState({
        article: response.article,
        comments: response.comments
      })
    }.bind(this));
  },
  handleUpdatePostComment: function ( event ) {
    this.setState({
      postComment: event.target.value
    });
  },
  handleSubmit: function ( event ) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:3000" + this.props.location.pathname + "/comments",
      type: "POST",
      data: {
        comments: {body: this.state.postComment, user_id: this.state.article.user_id, article_id: this.state.article.id}
      }
    }).done( function( response ) {
      this.state.comments.push( response.comment );

      this.setState({
        comments: this.state.comments,
        postComment: ""
      })
    }.bind(this))
  },
  render: function() {
    return (
      <div>
        <Article
            article={ this.state.article }
            comments={ this.state.comments } />

        <CommentForm
            onUpdatePostComment={ this.handleUpdatePostComment }
            onSubmit={ this.handleSubmit }
            postComment={ this.state.postComment } />
      </div>
    )
  }
});

module.exports = ArticlesShowContainer;