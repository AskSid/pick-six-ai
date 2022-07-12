import React from 'react'
import PlayerCard from './PlayerCard'

const AvailablePlayers = ({ players, clickable, addPlayer }) => {
  return (
    <div>
      <h1>Available Players</h1>

      { players?.map(player => <PlayerCard player={player} key={player["-9999"]} name={player.Player} team={player.Tm} position={player.FantPos} clickable={clickable} addPlayer={addPlayer}/>) }
    </div>
  )
}

export default AvailablePlayers
