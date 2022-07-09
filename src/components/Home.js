import React from 'react'
import NavBar from './NavBar'
import Heading from './HomePage/Heading/Heading'
import Header from './HomePage/Header/Header'

const Home = () => {
  return (
    <div>
      <Heading />
      <NavBar />
      <Header/>
      <h1>Home</h1>
    </div>
  )
}

export default Home
