var React = require('react');

var LoginForm = React.createClass({
  render: function () {
    return (
      <form onSubmit={ this.props.onSubmitLoginForm }>
        <input type="text" name="email" placeholder="email" value={ this.props.email } onChange={ this.props.handleChange } />

        <input type="password" name="password"  placeholder="password" value={ this.props.password } onChange={ this.props.handleChange } />

        <input type="submit" value="login" />
      </form>
    )
  }
});

module.exports = LoginForm;