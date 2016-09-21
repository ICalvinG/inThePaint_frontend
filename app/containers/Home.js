var React = require('react');
var PropTypes = React.PropTypes;
var TeamIndexContainer = require('../containers/TeamIndexContainer');
var SiteLogo = require('../components/SiteLogo');
var AuthenticateContainer = require('../containers/AuthenticateContainer');

var Home = React.createClass({
  contextTypes: {
    currentUser: React.PropTypes.string,
    sessionId: React.PropTypes.string,
    handleShowChildren: React.PropTypes.func.isRequired,
  },
  render: function () {
    return (
      <div>
        <div>
          <SiteLogo />
        </div>
        <div>
          <TeamIndexContainer
              handleShowChildren={ this.context.handleShowChildren } />
        </div>
      </div>
    )
  }
});

module.exports = Home;