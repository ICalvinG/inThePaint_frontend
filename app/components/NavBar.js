var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleNavBarClick: function( event ) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/authenticate_user',
      query: {
        id: event.target.id
      }
    });

    this.props.onToggleAuthenticationView( event );
  },
  render: function () {
    if ( this.props.sessionId ) {
      var nav =
        <ul className="nav navbar-nav navbar-right">
          <li><a onClick={ this.props.onLogOut }>Log out</a></li>
        </ul>
    } else {
      var nav =
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" id="sign-up-link" onClick={ this.handleNavBarClick }>Sign Up</a></li>
          <li><a href="#" id="login-link" onClick={ this.handleNavBarClick }>Login</a></li>
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
            <Link className="navbar-brand" to='/'>In The Paint</Link>
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