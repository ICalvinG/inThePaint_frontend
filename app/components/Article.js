var React = require('react');
var Comment = require('../components/Comment');

var Article = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{ this.props.article.title }</h1>

        <p>{ this.props.article.body }</p>

        <h3>Comments</h3>
        {
          this.props.comments.map( function( comment ) {
            return <Comment
                      key={ comment.id }
                      data={ comment } />
          })
        }

      </div>
    )
  }
});

module.exports = Article;