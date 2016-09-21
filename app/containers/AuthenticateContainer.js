var React = require('react');
var $ = require('jquery');

var LoginFormContainer = require('../containers/LoginFormContainer');
var SignUpFormContainer = require('../containers/SignUpFormContainer');

var AuthenticateContainer = React.createClass({
   contextTypes: {
    currentUser: React.PropTypes.object.isRequired,
    sessionId: React.PropTypes.string,
    loggingIn: React.PropTypes.bool.isRequired,
    signingUp: React.PropTypes.bool.isRequired,
    handleShowChildren: React.PropTypes.func.isRequired,
    handleSubmitLoginForm: React.PropTypes.func.isRequired,
    handleSubmitSignUpForm: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      loggingIn: false,
      signingUp: false,
      username: "",
      email: "",
      password: ""
    }
  },
  componentWillMount: function () {
    if ( this.props.location.query.id === "sign-up-link" ) {
      this.setState({
        loggingIn: false,
        signingUp: true
      });
    } else {
      this.setState({
        loggingIn: true,
        signingUp: false
      });
    }
  },
  componentWillReceiveProps: function ( nextProps, nextContext ) {
    this.setState({
      loggingIn: nextContext.loggingIn,
      signingUp: nextContext.signingUp
    });
  },
  handleUpdateLoginForm: function ( obj ) {
    this.setState( obj );
  },
  handleUpdateSignUpForm: function ( obj ) {
    this.setState( obj );
  },
  handleSubmitSignUpForm: function ( e ) {
    var obj = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    this.context.handleSubmitSignUpForm( e, obj )
  },
  handleSubmitLoginForm: function ( e ) {
    var obj = {
      email: this.state.email,
      password: this.state.password
    }
    this.context.handleSubmitLoginForm( e, obj );
  },
  renderLoginForm: function () {
    return <LoginFormContainer
              email={ this.state.email }
              password={ this.state.password }
              onUpdateLoginForm={ this.handleUpdateLoginForm }
              handleSubmitLoginForm={ this.handleSubmitLoginForm } />
  },
  renderSignUpForm: function () {
    return <SignUpFormContainer
              username={ this.state.username }
              email={ this.state.email }
              password={ this.state.password }
              onUpdateSignUpForm={ this.handleUpdateSignUpForm }
              handleSubmitSignUpForm={ this.handleSubmitSignUpForm } />
  },
  render: function () {
    if ( this.state.loggingIn ) {
      var form = this.renderLoginForm()
    } else {
      var form = this.renderSignUpForm()
    }
    return (
      <div>
        { form }
      </div>
    )
  }
});

module.exports = AuthenticateContainer;