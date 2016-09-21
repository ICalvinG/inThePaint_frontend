var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../containers/App');
var Home = require('../containers/Home');
var AuthenticateContainer = require('../containers/AuthenticateContainer');
var ArticleShowContainer = require('../containers/ArticleShowContainer');
var TeamShowContainer = require('../containers/TeamShowContainer');


var router = (
	<Router history={hashHistory}>
		<Route path='/' component={ App }>
			<IndexRoute component={ Home } />
      <Route path="teams" component={TeamShowContainer} />
      <Route path="teams/:team_id/articles/:id" component={ArticleShowContainer} />
		</Route>
	</Router>
);

module.exports = router;