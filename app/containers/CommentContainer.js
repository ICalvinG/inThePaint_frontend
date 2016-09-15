var React = require('react');
var CommentListContainer = require('../containers/CommentListContainer');
var CommentFormContainer = require('../containers/CommentFormContainer');

var CommentContainer = React.createClass({
  getInitialState: function() {
    return {
      comments: this.props.comments,
      postCommentBody: ''
    }
  },
  componentWillReceiveProps: function ( nextProps ) {
    this.setState({
      comments: nextProps.comments
    })
  },
  handleUpdatePostComment: function ( event ) {
    this.setState({
      postCommentBody: event.target.value
    });
  },
  handleSubmitPostComment: function ( event ) {
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/teams/' + this.props.team_id + "/articles/" + this.props.article_id + "/comments/",
      type: "POST",
      data: {
        comments: { body: this.state.postCommentBody, article_id: this.props.article_id, user_id: this.props.user_id }
      }
    }).done( function( response ) {
      this.state.comments.push( response.comment );

      this.setState({
        comments: this.state.comments,
        postCommentBody: ""
      })
    }.bind(this));
  },
  handleCommentDelete: function( comment_id ) {
    $.ajax({
      url: 'http://localhost:3000/teams/' + this.props.team_id + "/articles/" + this.props.article_id + "/comments/" + comment_id,
      type: 'delete',
    }).done(function(response){
      this.setState({
        comments: response.comments
      })
    }.bind(this));
  },
  render: function () {
    return (
      <div className="container card comment-container">
      	<CommentFormContainer
          postCommentBody={ this.state.postCommentBody }
          handleUpdatePostComment={ this.handleUpdatePostComment }
          handleSubmitPostComment={ this.handleSubmitPostComment } />

      	<CommentListContainer
          team_id={this.props.team_id}
      		comments={this.state.comments}
          handleCommentDelete={ this.handleCommentDelete } />
      </div>
    )
  }

});

module.exports = CommentContainer;