import React from 'react'
import "../css/CSS_navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>


      <ol className='navbar-contents'>
        <div className='name-container'>
          <li className='navbar-item-1'>Steven Di Feo</li>
        </div>

        <div className='inner-container'>
          <a href="#projects"><li className='navbar-item-1'>Projects</li></a>
          <a href="#about_me"><li className='navbar-item-2' href="#">About me</li></a>
          <a href="#contact"><li className='navbar-item-3' href="#">Contact</li></a>
        </div>

      </ol>
    </div>
  )
}

export default Navbar