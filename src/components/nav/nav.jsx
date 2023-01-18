import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiEnvelope} from 'react-icons/bi'

function nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiEnvelope /></a>
    </nav>
  )
}

export default nav