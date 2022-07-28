import React from 'react'
import PlayerCard from './PlayerCard/PlayerCard'

const Team = ( { team }) => {
  return (
    <div>
        <h1>My Team</h1>
        { team?.map(player => <PlayerCard player={player} name={player.Player} team={player.Tm} position={player.FantPos} clickable={false}/>) }
    </div>
  )
}

export default Team
