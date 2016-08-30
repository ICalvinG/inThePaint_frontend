var React = require('react');

var TeamViewComponents = React.createClass({
	render: function() {
		return (
			<div>
				<a href="#" onClick={this.props.onTeamClick}>{this.props.team.name}</a>
			</div>
		)
	}
});

module.exports = TeamViewComponents;