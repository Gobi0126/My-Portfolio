import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";


const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://linkedin.com/in/gobi-v" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/Gobi0126" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/Gobi0126" target="_blank"><FaTwitter/></a>
      <a href="https://leetcode.com/Gobi0126" target="_blank"><SiLeetcode /></a>
   </div>
  )
}

export default HeaderSocial