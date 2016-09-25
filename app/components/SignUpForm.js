var React = require('react');

var SignUpForm = React.createClass({
  render: function () {
    return (
      <div className="container card login-form">
      <form className="form-group col-lg-12 text-center form-top" onSubmit={ this.props.onSubmitSignUpForm }>
      <div className="row">
        <input type="text" className="form-control input-top article-space" rows="1" name="username" placeholder="username" value={ this.props.username } onChange={ this.props.handleChange } />
      </div>
      <div className="row">
        <input type="text" className="form-control input-top article-space" rows="1" name="email" placeholder="email" value={ this.props.email } onChange={ this.props.handleChange } />
      </div>
      <div className="row">
        <input type="password" className="form-control input-top article-space" rows="1" name="password"  placeholder="password" value={ this.props.password } onChange={ this.props.handleChange } />
      </div>
      <div className="row">
        <input type="submit" className="btn btn-default" value="Sign Up" />
      </div>
      </form>
      </div>
    )
  }
});

module.exports = SignUpForm;