var React = require('react');

var TeamView = React.createClass({
	render: function() {
		return (
			<div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 text-center team">
				<a href="#" className="hvr-grow" onClick={this.props.onTeamClick}><img src={this.props.team.logo} width="100px"/></a>
			</div>
		)
	}
});

module.exports = TeamView;