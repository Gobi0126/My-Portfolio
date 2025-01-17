import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#achievement">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/gobi-v/" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/Gobi0126" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/Gobi0126" target="_blank"><FaTwitter/></a>
      {/* <a href="https://youtube.com/c/trickytechnotice" target="_blank"><FaYoutube/></a> */}
      {/* <a href="https://dev.to/aniketmishra" target="_blank"><FaDev/></a> */}
      {/* <a href="https://aniketmishra.hashnode.dev/" target="_blank"><SiHashnode/></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Designed By Gobi</small>
      </div>

    </footer>
  )
}

export default Footer