import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Technology Store All rights reserved</p>
      <p className='icon'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook/>
      </p>
    </div>
  )
}

export default Footer