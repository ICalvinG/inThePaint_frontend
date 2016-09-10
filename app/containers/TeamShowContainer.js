var React = require('react');
// var PlayerContainer = require('../containers/PlayerContainer');
var ArticleTitleContainer = require('../containers/ArticleTitleContainer');
var $ = require('jquery');

var TeamShowContainer = React.createClass({
	getInitialState: function() {
		return {
			players: [],
			articles: []
		}
	},
	componentWillMount: function() {
		var url = 'http://localhost:3000/teams/' + this.props.location.query.id
		$.ajax({
			url: url
		}).done(function(response){
			this.setState({
				players: response.players,
				articles: response.articles
			})
		}.bind(this));
	},
	render: function(){
		// debugger;
		return (
			<div>
				{/*
					this.state.players.map(function(player){ return <PlayerContainer key={player.id} player={player} /> })
				*/}
				<ul>
				{
					this.state.articles.map( function( article ) {
						return <ArticleTitleContainer
											key={ article.id }
											data={ article } />
					})
				}
				</ul>
			</div>
		)
	}
});

module.exports = TeamShowContainer;