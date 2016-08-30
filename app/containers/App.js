var React = require('react');
var TeamIndexContainer = require('../containers/TeamIndexContainer')

var App = React.createClass({
	render: function() {
		return (
			<div>
				<TeamIndexContainer />
			</div>
		)
	}
});

module.exports = App;