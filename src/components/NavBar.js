import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/mock-draft'>Mock Draft</Link>
      <Link to='/player-rankings'>Player Rankings</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default NavBar
