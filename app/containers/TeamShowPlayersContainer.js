var React = require('react');
var PlayerContainer = require('../containers/PlayerContainer');

var PlayersContainer = React.createClass({
  render: function () {
    return(
      <div>
        <ul>
        {
          this.props.players.map(function(player){
            return <PlayerContainer
                      key={player.id}
                      player={player} />
          })
        }
        </ul>
      </div>
    )
  }
});

module.exports = PlayersContainer;