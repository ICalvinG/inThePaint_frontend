var React = require('react');

var TeamViewComponents = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.team.logo} width="150px;" />
			</div>
		)
	}
});

module.exports = TeamViewComponents;