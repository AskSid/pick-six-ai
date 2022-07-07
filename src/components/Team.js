import React from 'react'
import PlayerCard from './PlayerCard'

const Team = ( { team }) => {
  return (
    <div>
        <h1>My Team</h1>

        { team?.map(player => <PlayerCard name={player.name} team={player.team} position={player.position}/>) }
    </div>
  )
}

export default Team
