import React from 'react'
import './achievement.css'
import IMG2 from '../../assets/HMS.png'
import IMG3 from '../../assets/page_replacement.png'
import IMG4 from '../../assets/Online_voting_system.png'



const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container achievement__container">
        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Page Replacement Algorithm</h3>
          <div className="achievement__item-cta">
          {/* <a href="https://api.badgr.io/public/assertions/NTDkpR6BSTGXT6ZCI-maBQ?identity__email=aniketmishra492%40gmail.com" className='btn' target='_blank'>Verify</a> */}
          <a href="https://github.com/Gobi0126/Page_replacement_algorithm" className='btn btn-1' target='_blank'>View</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Hostel Management System</h3>
          <div className="achievement__item-cta">
          {/* <a href="https://github.com/Aniketmishra0/Bootstrap" className='btn' target='_blank'>View</a> */}
          <a href="https://github.com/Gobi0126/HMS" className='btn btn-1' target='_blank'>View</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Online Voting System</h3>
          <div className="achievement__item-cta">
          {/* <a href="_index" className='btn' target='_blank'>View</a> */}
          <a href="https://github.com/Gobi0126/online_voting_system" className='btn btn-1' target='_blank'>View</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Achievement