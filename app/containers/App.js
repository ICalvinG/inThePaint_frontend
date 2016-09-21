var React = require('react');
var TeamIndexContainer = require('../containers/TeamIndexContainer');
var SiteLogo = require('../components/SiteLogo');
var AuthenticateContainer = require('../containers/AuthenticateContainer');
var NavBar = require('../components/Navbar');
var Home = require('../containers/Home');
var $ = require("jquery");

var App = React.createClass({
	getInitialState: function () {
		return {
			currentUser: {},
			sessionId: "" || localStorage.session,
			loggingIn: false,
			signingUp: false
		}
	},
	handleReturnHome: function () {
		this.setState({
			loggingIn: false,
			signingUp: false
		});
	},
	handleToggleAuthenticationView: function ( e ) {
		if ( e.target.id == "sign-up-link" ) {
			this.setState({
				signingUp: true,
				loggingIn: false
			})
		} else {
			this.setState({
				loggingIn: true,
				signingUp: false
			})
		}
	},
	handleSubmitLoginForm: function ( e, obj ) {
		e.preventDefault();
		$.ajax({
			url: "http://localhost:3000/login",
			type: "POST",
			data: {
				login: obj
			}
		}).done( function( response ) {
			window.localStorage.setItem("session", response.session_id);
			window.localStorage.setItem("current_user", response.current_user.username)

			this.setState({
				currentUser: response.current_user,
				sessionId: response.session_id,
				loggingIn: false
			});
		}.bind(this));
	},
	handleSubmitSignUpForm: function ( e, obj ) {
		e.preventDefault();
		$.ajax({
			url: "http://localhost:3000/users",
			type: "POST",
			data: {
				user: obj
			}
		}).done( function ( response ) {
			window.localStorage.setItem("session", response.session_id);
			window.localStorage.setItem("current_user", response.current_user.username)

			this.setState({
				currentUser: response.current_user,
				sessionId: response.session_id,
				signingUp: false
			});
		}.bind(this));
	},
	handleLogOut: function ( e ) {
		e.preventDefault();
		$.ajax({
			url: "http://localhost:3000/logout",
			type: "GET"
		}).done( function( response ) {
			window.localStorage.removeItem("session");
			window.localStorage.removeItem("current_user");

			this.setState({
				currentUser: {},
				sessionId: localStorage.session_id
			});
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<NavBar
					sessionId={ this.state.sessionId }
					onReturnHome={ this.handleReturnHome }
					onToggleAuthenticationView={ this.handleToggleAuthenticationView }
					onLogOut={ this.handleLogOut } />

				{ this.props.children || <Home /> }
			</div>
		)
	}
});

module.exports = App;