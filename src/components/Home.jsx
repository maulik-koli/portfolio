import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Home = () => {
  return (
    <div id='home' className='home'>
        <div className="ani-text"><span>Welcome to my portfolio!</span>
        </div>
        <h1><span>I'm Maulik Koli,</span> MERN stack developer.</h1>
        <p>I'm a final-year CSE student with focus on building full-stack applications.</p>
        <div className="home-action">
            <div className="me-connect"><AnchorLink className='links' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="me-resume"><a href="https://drive.google.com/file/d/1Y_yoos-mUfmxR1JHvXqnMrLE72207B0_/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>    
    </div>
  )
}

export default Home
