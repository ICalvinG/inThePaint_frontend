var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../containers/App');

var router = (
	<Router history={hashHistory}>
		<Route path='/'>
			<IndexRoute component={App} />
		</Route>
	</Router>
);

module.exports = router;