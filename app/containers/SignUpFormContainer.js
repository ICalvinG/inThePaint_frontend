var React = require('react');
var SignUpForm = require('../components/SignUpForm');

var SignUpFormContainer = React.createClass({
  handleSignUpChange: function ( e ) {
    var obj = {};
    obj[e.target.name] = e.target.value;

    this.props.onUpdateSignUpForm( obj );
  },
  render: function () {
    return (
      <SignUpForm
          username={ this.props.username }
          email={ this.props.email }
          password={ this.props.password }
          handleChange={ this.handleSignUpChange }
          onSubmitSignUpForm={ this.props.handleSubmitSignUpForm } />
    )
  }
});

module.exports = SignUpFormContainer;