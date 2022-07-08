import React from 'react'
import PlayerCard from './PlayerCard'

const AvailablePlayers = ({ players, clickable, addPlayer }) => {
  return (
    <div>
      <h1>Available Players</h1>

      { players?.map(player => <PlayerCard player={player} key={player.id} name={player.name} team={player.team} position={player.position} clickable={clickable} addPlayer={addPlayer}/>) }
    </div>
  )
}

export default AvailablePlayers
