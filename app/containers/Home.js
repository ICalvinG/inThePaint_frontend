var React = require('react');
var TeamIndexContainer = require('../containers/TeamIndexContainer');
var SiteLogo = require('../components/SiteLogo');

var Home = React.createClass({
  getInitialState: function () {
    return {
      loggingIn: this.props.loggingIn,
      signingUp: this.props.signingUp
    }
  },
  componentWillReceiveProps: function ( nextProps ) {
    this.setState({
      loggingIn: nextProps.loggingIn,
      signingUp: nextProps.signingUp
    });
  },
  renderApp: function () {
    return (
      <div>
        <div>
          <SiteLogo />
        </div>
        <div>
          <TeamIndexContainer />
        </div>
      </div>
    )
  },
  renderAuthenticate: function () {
    return (
      <div>
        <AuthenticateContainer
          loggingIn={ this.state.loggingIn }
          signingUp={ this.state.signingUp }
          handleSubmitLoginForm={ this.handleSubmitLoginForm }
          handleSubmitSignUpForm={ this.handleSubmitSignUpForm } />
      </div>
    )
  },
  render: function () {
    if ( this.state.loggingIn || this.state.signingUp ) {
      var render = this.renderAuthenticate()
    } else {
      var render = this.renderApp()
    }
    return (
      <div>
        { render }
      </div>
    )
  }
});

module.exports = Home.js