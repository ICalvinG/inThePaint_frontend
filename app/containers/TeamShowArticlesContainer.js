var React = require('react');
var ArticleTitleContainer = require('../containers/ArticleTitleContainer');

var TeamShowArticlesContainer = React.createClass({
  render: function () {
    return (
    <ul>
      {
        this.props.articles.map( function( article ) {
          return <ArticleTitleContainer
                    key={ article.id }
                    data={ article } />
        })
      }
      </ul>
    )
  }
});

module.exports = TeamShowArticlesContainer;