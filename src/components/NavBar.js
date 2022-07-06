import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/mock-draft'>Mock Draft</Link>
      <br />
      <Link to='/player-rankings'>Player Rankings</Link>
      <br />
      <Link to='/about'>About</Link>
    </div>
  )
}

export default NavBar
