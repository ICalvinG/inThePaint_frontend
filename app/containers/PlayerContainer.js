var React = require('react');
var PlayerViewComponent = require('../components/PlayerViewComponent');

var PlayerContainer = React.createClass({
	getInitialState: function() {
		return {
			firstName: '',
			lastName: ''
		}
	},
	componentWillMount: function() {
		var nameSplit = this.props.player.name.split(" ");
		this.setState({
			firstName: nameSplit[0],
			lastName: nameSplit[1]
		});
	},
	render: function() {
		return (
			<PlayerViewComponent 
				player={this.props.player} 
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				/>
		)
	}
});

module.exports = PlayerContainer;