import React from 'react'
import profilepic from '..//images/1643046473893.jpeg';
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
       <h2 className='titleNavsPage'>About Me</h2> 
      <div>

              <div className='aboutContainer'>
                <img src={profilepic} className='imgAbout' alt="portfolio_profile_picture"/> 
              </div>

            <div className='aboutMe'>
              <h2> Hello, welcome to my portfolio! I am 29 year old trying to prove that it's never too late to change careers! My intrest for coding began back when I was asked to help buil two web pages for my old employers. Although we built them through a web site called "WIX", which made the process super easy, it got me interested in web-development. In doing reserch my intrest grew enough for me to decide to take a 6-month full-stack web development boot camp with the University o fCentral Florida (UCF). Although the boot camp was long and challenging, it only grew my want to becoming a web developer! I hope to eventually land a great job and make this my new career!</h2>
            </div>
      </div>
    </div>
  )
}

export default About