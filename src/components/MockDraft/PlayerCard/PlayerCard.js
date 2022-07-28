import {React, useState} from 'react'
import styles from './PlayerCard.module.css'

const PlayerCard = ({ clickable, addPlayer, player, name, position, team }) => {

    const positions = new Map();
    positions.set('QB', styles.qb);
    positions.set('RB', styles.rb);
    positions.set('WR', styles.wr);
    positions.set('TE', styles.te);
    positions.set(undefined, styles.none)


  return (
    <div>
    { clickable ? 
      <button className={positions.get(position)} onClick={() => { addPlayer(player, true) }} >
        <p>{name} {team} {position}</p>
      </button> : 
      <div className={positions.get(position)}>
        {/* <p className={styles.text}>{stringName[0]}</p> */}
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{team}</p>
        <p className={styles.text}>{position}</p>
      </div> }
    </div>
    
  )
}

export default PlayerCard
