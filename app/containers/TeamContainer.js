var React = require('react');
var TeamView = require('../components/TeamView');

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

		this.props.onShowChildren();
	},
	render: function() {
		// debugger;
		return (
				<TeamView team={this.props.team} onTeamClick={this.handleTeamClick} />
		)
	}
});

module.exports = TeamContainer;