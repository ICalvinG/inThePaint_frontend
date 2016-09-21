var React = require('react');
var PropTypes = React.PropTypes;
var TeamIndexContainer = require('../containers/TeamIndexContainer');
var SiteLogo = require('../components/SiteLogo');
var AuthenticateContainer = require('../containers/AuthenticateContainer');
var NavBar = require('../components/Navbar');
var Home = require('../containers/Home');
var $ = require("jquery");

var App = React.createClass({
	childContextTypes: {
     currentUser: React.PropTypes.object.isRequired,
     sessionId: React.PropTypes.string,
     loggingIn: React.PropTypes.bool.isRequired,
     signingUp: React.PropTypes.bool.isRequired,
     handleShowChildren: React.PropTypes.func.isRequired,
     handleSubmitLoginForm: React.PropTypes.func.isRequired,
     handleSubmitSignUpForm: React.PropTypes.func.isRequired
  },
  getChildContext: function() {
     return {
     	currentUser: this.state.currentUser,
			sessionId: this.state.sessionId,
			loggingIn: this.state.loggingIn,
			signingUp: this.state.signingUp,
			handleShowChildren: this.handleShowChildren,
			handleSubmitLoginForm: this.handleSubmitLoginForm,
			handleSubmitSignUpForm: this.handleSubmitSignUpForm
     };
  },
	getInitialState: function () {
		return {
			home: true,
			currentUser: {},
			sessionId: "" || localStorage.session,
			loggingIn: this.props.route.indexRoute.loggingIn,
			signingUp: this.props.route.indexRoute.signingUp
		}
	},
	handleReturnHome: function () {
		this.setState({
			home: true,
			loggingIn: false,
			signingUp: false
		});
	},
	handleShowChildren: function () {
		this.setState({
			home: false
		});
	},
	handleToggleAuthenticationView: function ( e ) {
		if ( e.target.id == "sign-up-link" ) {
			this.setState({
				home: false,
				signingUp: true,
				loggingIn: false
			})
		} else {
			this.setState({
				home: false,
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
				home: true,
				currentUser: response.current_user,
				sessionId: localStorage.session,
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
				home: true,
				currentUser: response.current_user,
				sessionId: localStorage.session,
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
				home: true,
				currentUser: {},
				sessionId: localStorage.session_id
			});
		}.bind(this));
	},
	render: function() {
		if ( this.state.home ) {
			var children = <Home />
		} else {
			var children = this.props.children
		}
		return (
			<div>
				<NavBar
					sessionId={ this.state.sessionId }
					onReturnHome={ this.handleReturnHome }
					onShowChildren={ this.handleShowChildren }
					onToggleAuthenticationView={ this.handleToggleAuthenticationView }
					onLogOut={ this.handleLogOut } />

				{ children }
			</div>
		)
	}
});

module.exports = App;