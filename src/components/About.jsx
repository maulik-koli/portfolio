import React from 'react'
import theme_pattern from '../assets/theme-pattern.svg'
import profile_img from '../assets/profile-img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="Profile Photo" />
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>
              Hey! I'm Maulik Koli, a passionate MERN stack developer currently in my final year of Computer Science Engineering {"(CSE)"} at GEC Rajkot. I have developed a good understanding of React.js and Node.js through practical experience, building projects that have helped me improve both front-end and back-end skills.
            </p>
            <p>
              In addition to web development, I am also familiar with Java, C++, MySQL, Git, and GitHub. I'm always eager to learn and improve my coding skills. If you have a project in mind or just want to connect, feel free to reach out!
            </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%"}}/></div>
                <div className="about-skill"><p>Javascrip</p><hr style={{ width: "45%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{ width: "38%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{ width: "38%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{ width: "42%"}}/></div>
                <div className="about-skill"><p>C++</p><hr style={{ width: "35%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
