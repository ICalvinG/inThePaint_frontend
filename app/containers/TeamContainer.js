var React = require('react');
var TeamViewComponents = require('../components/TeamViewComponents');

var TeamContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	handleTeamClick: function(event) {
		event.preventDefault();
		this.context.router.push({
			// send info over a query string
			pathname: '/teams',
			query: {
				id: this.props.team.id,
				name: this.props.team.market + " " + this.props.team.name
			}
		});
	},
	render: function() {
		// debugger;
		return (
				<TeamViewComponents team={this.props.team} onTeamClick={this.handleTeamClick} />
		)
	}
});

module.exports = TeamContainer;