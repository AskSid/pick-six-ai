import React from 'react'
import NavBar from './NavBar'
import Rankings from '../components/PlayerRankings/Rankings/Rankings'
import RankingsHeader from '../components/PlayerRankings/RankingsHeader/RankingsHeader'


const Players = () => {
  return (
    <div>
      <NavBar />
      <RankingsHeader/>
      <Rankings/>
    </div>
  )
}

export default Players
