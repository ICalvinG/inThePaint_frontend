var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../containers/App');
var ArticleShowContainer = require('../containers/ArticleShowContainer');


var router = (
	<Router history={hashHistory}>
		<Route path='/'>
			<IndexRoute component={App} />
      <Route path="teams/:team_id/articles/:id" component={ArticleShowContainer} />
		</Route>
	</Router>
);

module.exports = router;