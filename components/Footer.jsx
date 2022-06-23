import React from 'react'
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2022 Tec Things All rights reserved</p>
      <p className='icons' >
        <AiFillInstagram />
        <AiFillTwitterSquare />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer