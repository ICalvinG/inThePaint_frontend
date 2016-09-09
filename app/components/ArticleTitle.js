var React = require('react');
var Link = require('react-router').Link;

var ArticleTitle = React.createClass({
  render: function () {
    return (
      <li>
        <Link to={ "teams/" + this.props.data.team_id + "/articles/" + this.props.data.id }>{ this.props.data.title }</Link>
      </li>
    )
  }
});

module.exports = ArticleTitle;