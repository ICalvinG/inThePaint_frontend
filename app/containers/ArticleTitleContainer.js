var React = require('react');
var Link = require('react-router').Link;

var ArticleTitleContainer = React.createClass({
  render: function () {
    return (
      <li className="col-lg-12 text-center each-article">
        <Link className="no-underline" to={ "teams/" + this.props.data.team_id + "/articles/" + this.props.data.id }>{ this.props.data.title }</Link>
      </li>
    )
  }
});

module.exports = ArticleTitleContainer;