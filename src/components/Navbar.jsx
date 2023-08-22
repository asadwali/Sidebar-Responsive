import React from 'react'
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'

function Navbar({ toggleMenu }) {
  return (
    <>
      <div className='mobile-navbar d-flex d-md-none'>
        <img src={logo} alt='logo' />
        <img src={hamburger} alt='hamburger' onClick={toggleMenu} />
      </div>
    </>
  )
}

export default Navbar
