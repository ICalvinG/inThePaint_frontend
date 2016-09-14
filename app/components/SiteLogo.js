var React = require('React');

var SiteLogo = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<div className="container-fluid introduction">
				<h1 className="text-center intro">In The Paint</h1>
				</div>
			</div>
		)
	}
});

module.exports = SiteLogo;