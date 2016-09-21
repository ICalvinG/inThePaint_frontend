var React = require('react');
var LoginForm = require('../components/LoginForm');

var LoginFormContainer = React.createClass({
  handleLoginChange: function ( e ) {
    var obj = {};
    obj[e.target.name] = e.target.value;

    this.props.onUpdateLoginForm( obj );
  },
  render: function () {
    return (
      <LoginForm
          email={ this.props.email }
          password={ this.props.password }
          handleChange={ this.handleLoginChange }
          onSubmitLoginForm={ this.props.handleSubmitLoginForm } />
    )
  }
});

module.exports = LoginFormContainer;