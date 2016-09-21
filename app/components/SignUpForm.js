var React = require('react');

var SignUpForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={ this.props.onSubmitSignUpForm }>

        <input type="text" name="username" placeholder="username" value={ this.props.username } onChange={ this.props.handleChange } />

        <input type="text" name="email" placeholder="email" value={ this.props.email } onChange={ this.props.handleChange } />

        <input type="password" name="password"  placeholder="password" value={ this.props.password } onChange={ this.props.handleChange } />

        <input type="submit" value="Sign Up" />
      </form>
    )
  }
});

module.exports = SignUpForm;