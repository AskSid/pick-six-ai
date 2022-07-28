import {React, useState} from 'react'

const PlayerCard = ({ clickable, addPlayer, player, name, position, team }) => {

    const positions = new Map();
    positions.set('QB', 'bg-danger');
    positions.set('RB', 'bg-success');
    positions.set('WR', 'bg-warning');
    positions.set('TE', 'bg-info')

  return (
    <div>
    { clickable ? 
      <button className={positions.get(position)} onClick={() => { addPlayer(player, true) }} >
        <p>{name} {team} {position}</p>
      </button> : 
      <div className={positions.get(position)}>
        <br></br>
        <p>{name} {team} {position}</p>
      </div> }
    </div>
    
  )
}

export default PlayerCard
