import React from 'react'
import AboutHeader from './About/AboutHeader/AboutHeader'
import NavBar from './NavBar'
import Footer from './Footer/Footer'
import Method from './About/Method/Method'


const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader/>
      <Method/>
      <Footer/>
    </div>
  )
}

export default About
