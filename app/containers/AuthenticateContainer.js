var React = require('react');
var $ = require('jquery');

var LoginFormContainer = require('../containers/LoginFormContainer');
var SignUpFormContainer = require('../containers/SignUpFormContainer');

var AuthenticateContainer = React.createClass({
  getInitialState: function () {
    return {
      login: this.props.loggingIn,
      username: "",
      email: "",
      password: ""
    }
  },
  componentWillReceiveProps: function ( nextProps ) {
    this.setState({
      login: nextProps.loggingIn
    })
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

    this.props.handleSubmitSignUpForm( e, obj )
  },
  handleSubmitLoginForm: function ( e ) {
    var obj = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.handleSubmitLoginForm( e, obj );
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
    if ( this.state.login ) {
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