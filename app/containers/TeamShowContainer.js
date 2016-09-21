var React = require('react');
var PropTypes = React.PropTypes;
var TeamShowHeader = require('../components/TeamShowHeader');
var TeamShowLinks = require('../components/TeamShowLinks');
var TeamShowPlayersContainer = require('../containers/TeamShowPlayersContainer');
var TeamShowArticlesContainer = require('../containers/TeamShowArticlesContainer');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var $ = require('jquery');

var TeamShowContainer = React.createClass({
	contextTypes: {
     currentUser: React.PropTypes.object.isRequired,
     sessionId: React.PropTypes.string
  },
	getInitialState: function() {
		return {
			team: {},
			players: [],
			articles: [],
			roster: false
		}
	},
	componentWillMount: function() {
		var url = 'http://localhost:3000/teams/' + this.props.location.query.id
		$.ajax({
			url: url
		}).done(function(response){
			this.setState({
				team: response.team,
				players: response.players,
				articles: response.articles
			})
		}.bind(this));
	},
	handleUpdateRender: function( handler ) {
		if ( handler === "roster" ) {
			this.setState({
				roster: true
			});
		} else {
			this.setState({
				roster: false
			})
		}
	},
	render: function(){
		if ( this.state.roster ) {
			var teamShowRender =
				<TeamShowPlayersContainer
						players={ this.state.players } />
		} else {
			var teamShowRender =
				<TeamShowArticlesContainer
						team={ this.state.team }
						articles={ this.state.articles }
						sessionId={ this.context.sessionId } />
		}
		return (
			<div>
				<TeamShowHeader
						team={ this.state.team } />

				<TeamShowLinks
						onUpdateRender={ this.handleUpdateRender } />

				{ teamShowRender }
			</div>
		)
	}
});

module.exports = TeamShowContainer;