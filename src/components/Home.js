import React from 'react'
import NavBar from './NavBar'
import Heading from './HomePage/Heading/Heading'
import Header from './HomePage/Header/Header'
import Information from './HomePage/Information/Information'
import MockDraftCard from './HomePage/MockDraftCard/MockDraftCard'
import Footer from './Footer/Footer'
import RankingsCard from './HomePage/RankingsCard/RankingsCard'

const Home = () => {
  return (
    <div>
      <Heading />
      <NavBar />
      <Header/>
      <Information/>
      <MockDraftCard/>
      <RankingsCard/>
      <RankingsCard/>
      <Footer/>
    </div>
  )
}

export default Home
