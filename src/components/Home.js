import React from 'react'
import NavBar from './NavBar'
import Heading from './HomePage/Heading/Heading'
import Header from './HomePage/Header/Header'
import Information from './HomePage/Information/Information'
import MockDraftCard from './HomePage/MockDraftCard/MockDraftCard'

const Home = () => {
  return (
    <div>
      <Heading />
      <NavBar />
      <Header/>
      <Information/>
      <MockDraftCard/>
      <h1>Home</h1>
    </div>
  )
}

export default Home
