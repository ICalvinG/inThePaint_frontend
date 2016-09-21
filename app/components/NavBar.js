var React = require('react');

var NavBar = React.createClass({
  render: function () {
    if ( this.props.sessionId ) {
      var nav =
        <ul className="nav navbar-nav navbar-right">
          <li><a onClick={ this.props.onLogOut }>Log out</a></li>
        </ul>
    } else {
      var nav =
        <ul className="nav navbar-nav navbar-right">
          <li><a id="sign-up-link" onClick={ this.props.onToggleAuthenticationView }>Sign Up</a></li>
          <li><a id="login-link" onClick={ this.props.onToggleAuthenticationView }>Login</a></li>
        </ul>
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={ this.props.onReturnHome }>In The Paint</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            { nav }
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = NavBar;