import React from 'react'
import "../css/CSS_aboutme.css"

const AboutMeSection = () => {
  return (
    <div className='aboutme-container' id="about_me">

      <div className='about-title'>
        <p>A little bit</p>
        <p>about myself</p>
      </div>

      <div className='aboutme-inner-container text-center'>
        <p>26 year old Canadian, located in Quebec.</p>
        <p>I enjoy creating interactive and scalable applications using modern frontend technologies that provide a great experience for users.</p>
        <p>Future graduate from Lasalle College, looking for an internship.</p>

      </div>

    </div>
  )
}

export default AboutMeSection