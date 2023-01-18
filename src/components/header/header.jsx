import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials'
import { useState } from 'react';

function Header() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <header>
      <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Ronwyn De Mink</h1>
          <h5>Fullstack developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
              <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header