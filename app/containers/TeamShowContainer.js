var React = require('react');
var PlayerContainer = require('../containers/PlayerContainer');
var $ = require('jquery');

var TeamShowContainer = React.createClass({
	getInitialState: function() {
		return {
			players: []
		}
	},
	componentWillMount: function() {
		var url = 'http://localhost:3000/teams/' + this.props.location.query.id
		$.ajax({
			url: url
		}).done(function(response){
			this.setState({
				players: response.players
			})
		}.bind(this));
	},
	render: function(){
		// debugger;
		return (
			<div>
				{
					this.state.players.map(function(player){ return <PlayerContainer key={player.id} player={player} /> })
				}
			</div>
		)
	}
});

module.exports = TeamShowContainer;