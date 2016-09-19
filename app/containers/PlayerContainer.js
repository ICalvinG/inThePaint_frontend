var React = require('react');
var PlayerView = require('../components/PlayerView');

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
			<div>
					<PlayerView player={this.props.player} firstName={this.state.firstName} lastName={this.state.lastName} />
			</div>
		)
	}
});

module.exports = PlayerContainer;