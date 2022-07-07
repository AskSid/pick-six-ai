import React from 'react'
import PlayerCard from './PlayerCard'

const AvailablePlayers = ({ players }) => {
  return (
    <div>
      <h1>Available Players</h1>

      { players?.map(player => <PlayerCard name={player.name} team={player.team} position={player.position}/>) }
    </div>
  )
}

export default AvailablePlayers
