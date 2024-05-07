import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <><div className="container header_container">
      <h4 align="center">Hello I'm</h4>
      <h1 align="center">Gobi V</h1>
      <h5 align="center" className="text-light">I am a passionate full stack Developer and I love to learn new tech stack</h5>
      <CTA />
      <HeaderSocial />
      <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <div className="container header_container"> <a href="#contact" className='scroll__down'>Scroll Down</a></div>
      </div></>

  
  )
}

export default Header