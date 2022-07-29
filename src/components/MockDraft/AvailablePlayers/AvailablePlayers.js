import React from 'react'
import styles from './AvailablePlayers.module.css'
import PlayerCard from '../PlayerCard/PlayerCard'

const AvailablePlayers = ({ players, clickable, addPlayer }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Available Players</h1>
        {players?.map(player => <PlayerCard player={player} key={player["-9999"]} name={player.Player} team={player.Tm} position={player.FantPos} clickable={clickable} addPlayer={addPlayer}/>) }
    </div>
  )
}

export default AvailablePlayers
