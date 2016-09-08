var React = require('react');

var PlayerViewComponent = React.createClass({
	render: function() {
		// debugger;
		var url = "https://nba-players.herokuapp.com/players/" + this.props.lastName + "/" + this.props.firstName
		return (
			<div>
				<div>
					<img src={url} height="150px" width="auto" />
				</div>
				<div>
					<h3>{this.props.player.name}</h3>
				</div>
					postion: <p>{this.props.player.postion}</p>
					number: <p>{this.props.player.number}</p>
					height: <p>{this.props.player.height}</p>
					weight: <p>{this.props.player.weight}</p>
					avg points: <p>{this.props.player.average_points}</p>
					avg rebounds: <p>{this.props.player.average_rebounds}</p>
					avg assists: <p>{this.props.player.average_assists}</p>
				<div>
				</div>
			</div>
		)
	}
});

module.exports = PlayerViewComponent;