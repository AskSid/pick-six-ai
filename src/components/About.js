import React from 'react'
import AboutHeader from './About/AboutHeader/AboutHeader'
import NavBar from './NavBar'
import Footer from './Footer/Footer'
import Method from './About/Method/Method'
import Technologies from './About/Technologies/Technologies'


const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader/>
      <Method/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default About
