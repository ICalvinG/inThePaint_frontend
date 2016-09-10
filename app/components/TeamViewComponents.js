var React = require('react');

var TeamViewComponents = React.createClass({
	render: function() {
		return (
			<div>
				<a href="#" onClick={this.props.onTeamClick}><img src={this.props.team.logo} width="100px"/></a>
			</div>
		)
	}
});

module.exports = TeamViewComponents;