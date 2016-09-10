var React = require('react');
var TeamShowHeader = require('../components/TeamShowHeader');
var TeamShowLinks = require('../components/TeamShowLinks');
var PlayersContainer = require('../containers/PlayersContainer');
var ArticlesContainer = require('../containers/ArticlesContainer');
var $ = require('jquery');

var TeamShowContainer = React.createClass({
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
				<PlayersContainer
						players={ this.state.players } />
		} else {
			var teamShowRender =
				<ArticlesContainer
						articles={ this.state.articles } />
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