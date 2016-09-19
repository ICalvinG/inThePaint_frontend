var React = require('react');
var $ = require('jquery');

var PlayerView = React.createClass({
	getInitialState: function() {
		return {imageUrl: "https://nba-players.herokuapp.com/players/" + this.props.lastName + "/" + this.props.firstName }
	},
	onError: function() {
		this.setState({
			imageUrl: "./app/img/nopicture.png"
		})
	},
  render: function () {
		return (
      <div>
        <li className="col-lg-3 col-md-4 col-sm-6 text-center">
	        <ul className="player">
	        	<li><img src={this.state.imageUrl} onError={this.onError} width="200px" /></li>
	        	<li>Name: { this.props.player.name }</li>
	        	<li>Number: { this.props.player.number }</li>
	        	<li>Position: { this.props.player.position }</li>
	        	<li>Height: { this.props.player.height }</li>
	        	<li>Weight: { this.props.player.weight }</li>
	        </ul>
        </li>
      </div>
		)
  }
});

module.exports = PlayerView;


