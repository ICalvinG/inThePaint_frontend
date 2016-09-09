var React = require('react');
var TeamViewComponents = require('../components/TeamViewComponents');

var TeamContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	// handleTeamClick: function(event) {
	// 	event.preventDefault();

	// 	this.context.router.push({
	// 		pathname: '/team',
	// 		query: {
	// 			id: this.props.team.id,
	// 			name: this.props.team.name
	// 		}
	// 	});
	// },
	render: function() {
		// debugger;
		return (
				<TeamViewComponents team={this.props.team} onTeamClick={this.handleTeamClick} />
		)
	}
});

module.exports = TeamContainer;