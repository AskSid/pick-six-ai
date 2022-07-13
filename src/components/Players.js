import React from 'react'
import NavBar from './NavBar'
import Rankings from '../components/PlayerRankings/Rankings/Rankings'
import RankingsHeader from '../components/PlayerRankings/RankingsHeader/RankingsHeader'
import Footer from '../components/Footer/Footer'


const Players = () => {
  return (
    <div>
      <NavBar />
      <RankingsHeader/>
      <Rankings/>
      <Footer/>
    </div>
  )
}

export default Players
