var React = require('react');
var ArticleTitle = require('../components/ArticleTitle');

var ArticlesContainer = React.createClass({
  render: function () {
    return (
    <ul>
      {
        this.props.articles.map( function( article ) {
          return <ArticleTitle
                    key={ article.id }
                    data={ article } />
        })
      }
      </ul>
    )
  }
});

module.exports = ArticlesContainer;