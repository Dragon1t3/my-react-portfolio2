import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://gitgub.com" target='_blank'><BsGithub /></a>
        <a href="https://dribbble.com" target='_blank'><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials