var React = require('react');
var ArticleContainer = require('../containers/ArticleContainer');
var CommentContainer = require('../containers/CommentContainer');
var $ = require('jquery');


var ArticlesShowContainer = React.createClass({
  getInitialState: function() {
    return {
      article: {},
      comments: [],
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
  render: function() {
    return (
      <div>
        <ArticleContainer
            article={ this.state.article }
            comments={ this.state.comments } />

      </div>
    )
  }
});

module.exports = ArticlesShowContainer;