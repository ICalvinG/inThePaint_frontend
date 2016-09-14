var React = require('react');
var TeamIndexContainer = require('../containers/TeamIndexContainer');
var SiteLogo = require('../components/SiteLogo');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<SiteLogo /> 
				</div>
				<div>
					<TeamIndexContainer />
				</div>
			</div>
		)
	}
});

module.exports = App;