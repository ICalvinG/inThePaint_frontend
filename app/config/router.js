var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../containers/App');
var ArticleShowContainer = require('../containers/ArticleShowContainer');
var TeamShowContainer = require('../containers/TeamShowContainer');


var router = (
	<Router history={hashHistory}>
		<Route path='/'>
			<IndexRoute component={App} />
			{/* // if im correct, this method only works if you know type the path in the url */}
      <Route path="teams/:team_id/articles/:id" component={ArticleShowContainer} />
      {/* // this method sends the info over a query string. check "this.context.rounter.push" function on TeamContainer.js */}
      <Route path="teams" component={TeamShowContainer} />
		</Route>
	</Router>
);

module.exports = router;