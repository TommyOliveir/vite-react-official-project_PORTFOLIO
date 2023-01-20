import React from 'react'


function About() {
  return (
    <div className='about-grid'>
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <p>I'm a frontend developer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.</p>
      </div>
      <div className="about-image">

      </div>
      <div className="get-to-know-me about-grid-item">
        <h3>Get to know me!</h3>
        <p>My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.</p>
       
      
      </div>
      <div className="video">
          <iframe className="video-item" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
          </iframe>

        </div>
      <div className="skills about-grid-item">
        <h3>My Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Git</li>
          <li>Git</li>
          <li>Git</li>
        </ul>
       
      
      </div>
     
    </div>
  )
}

export default About
