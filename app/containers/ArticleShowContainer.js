var React = require('react');
var $ = require('jquery');


var ArticlesShowContainer = React.createClass({
  getInitialState: function() {
    return {
      article: {},
      comments: []
    }
  },
  componentDidMount: function() {
    var path = this.props.location.pathname;
    $.ajax({
      url: "http://localhost:3000" + path,
      type: "GET"
    }).done( function( response ) {
      debugger;
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        Article Show
      </div>
    )
  }
});

module.exports = ArticlesShowContainer;