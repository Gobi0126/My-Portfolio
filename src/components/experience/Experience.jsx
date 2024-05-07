import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {IoLogoHtml5} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaJava} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {IoLogoPython} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {RiTeamFill} from 'react-icons/ri'
import {FaGitAlt} from 'react-icons/fa'
import { SiNetlify } from "react-icons/si";


const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5> Skills & Abilities</h5> */}
      <h2>Skills & Abilities</h2>


      <div className="container experience__container">
        <div className="experience__frontend">
          
          <div className="experience__content">

            <article className='experience__details'>
            <BsPatchCheckFill size="1.9em" color='#000000'/>
            <h4>C</h4>
            </article>

            <article className='experience__details'>
            <FaJava size="1.5em" color="#FFEF06"/>
            <h4>Java</h4>
            </article>

            <article className='experience__details'>
            <IoLogoPython size="2.2em" color='#FFC107'/>
            <h4>Python</h4>
            </article>

            <article className='experience__details'>
            <IoLogoHtml5 size="1.5em" color='#ff5722'/>
            <h4>HTML</h4>
            </article>

            <article className='experience__details'>
            <SiCss3 size="1.5em" color='#0027ff'/>
            <h4>CSS</h4>
            </article>

            <article className='experience__details'>
            <SiBootstrap size="1.5em" color="##8b23c5"/>
            <h4>Bootstrap</h4>
            {/* <small className='text-light'>Advanced</small> */}
            </article>

            <article className='experience__details'>
            <IoLogoJavascript size="1.5em" color="#FFEF06"/>
            <h4>Javascript </h4>
            </article>

            <article className='experience__details'>
            <FaReact size="1.5em" color='#00A3FF'/>
            <h4>React</h4>
            </article>

            <article className='experience__details'>
            <IoLogoNodejs size="2em" color='#0EEA11'/>
            <h4>Node.js</h4>
            </article>

            <article className='experience__details'>
            <FaGitAlt size="1.9em" color='#F44336'/>
            <h4>Git</h4>
            {/* <small className='text-light'>Advanced</small> */}
            </article>

            <article className='experience__details'>
            <BsGithub size="1.9em" color='#000000'/>
            <h4>Github</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='experience__details'>
              <SiNetlify size="1.9em" color='#00adef'/>
              <h4>Netlify</h4>
            </article>

            <article className='experience__details'>
            <RiTeamFill size="1.5em" color='#F6E8A6'/>
            <h4>Term Work</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </article>

          </div>
        </div>
        </div>
     </section>
  )
  }

export default Experience
