var React = require('react');
var PlayerContainer = require('../containers/PlayerContainer');

var PlayersContainer = React.createClass({
  render: function () {
    return(
      <div className="container all-players card">
        <ul className="row">
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