import React from 'react'
import Logo from "../assets/airbnb-logo.png"

function Navbar() {
  return (
    <nav>
        <img src = {Logo} className='nav--logo' alt="logo" />
    </nav>
  )
}

export default Navbar