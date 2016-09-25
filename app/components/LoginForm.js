var React = require('react');

var LoginForm = React.createClass({
  render: function () {
    return (
    	<div className="container card login-form">
	      <form className="form-group col-lg-12 text-center form-top" onSubmit={ this.props.onSubmitLoginForm }>
		      <div className="row">
		        <input type="text" className="form-control input-top article-space" rows="1" name="email" placeholder="email" value={ this.props.email } onChange={ this.props.handleChange } />
		      </div>
		      <div className="row">
		        <input type="password" className="form-control input-bottom article-space" rows="1" name="password"  placeholder="password" value={ this.props.password } onChange={ this.props.handleChange } />
					</div>
					<div className="row">
		        <input type="submit" className="btn btn-default" value="login" />
		      </div>
	      </form>
      </div>
    )
  }
});

module.exports = LoginForm;