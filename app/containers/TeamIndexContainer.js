var React = require('react');
var TeamContainer = require('../containers/TeamContainer');
var $ = require('jquery');

var TeamIndexContainer = React.createClass({
	getInitialState: function() {
		return {
			teams: []
		}
	},
	componentWillMount: function() {
		$.ajax({
			url: 'http://localhost:3000/teams'
		}).done(function(response){
			this.setState({
				teams: response.teams
			});
			// console.log(this.state.teams)
		}.bind(this));
	},
	render: function() {
		return(
			<div className="container all-teams">
				<div className="row">
					{
						this.state.teams.map(function(team){ return <TeamContainer key={team.id} team={team} /> })
					}
				</div>
			</div>
		)
	}
});

module.exports = TeamIndexContainer;