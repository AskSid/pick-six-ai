import React from 'react'
import styles from './Team.module.css'
import PlayerCard from '../PlayerCard/PlayerCard'

const Team = ( { team }) => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>My Team</h1>
        { team?.map(player => <PlayerCard player={player} name={player.Player} team={player.Tm} position={player.FantPos} clickable={false}/>) }
    </div>
  )
}

export default Team
