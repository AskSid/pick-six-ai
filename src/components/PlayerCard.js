import React from 'react'

const PlayerCard = ({ name, team, position, clickable }) => {

    const positions = new Map();
    positions.set('QB', 'bg-danger');
    positions.set('RB', 'bg-success');
    positions.set('WR', 'bg-warning');
    positions.set('TE', 'bg-info')

  return (
    <div className={positions.get(position)}>
      <p>{name}, {team}, {position}</p>
    </div>
  )
}

export default PlayerCard
