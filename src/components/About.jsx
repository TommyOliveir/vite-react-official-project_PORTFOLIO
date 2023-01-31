import React from 'react'
import useToggle from '../hooks/useToggle'


function About() {
const [toggle, handleToggle] = useToggle()

function stopyoutube() {
  var videos = document.querySelectorAll('iframe, modal-video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'modal-video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
}

if(toggle) {
  stopyoutube()
}

  return (
    <div className='about-grid'>
      <div className="about-text">
        <h2>ABOUT ME</h2>

      </div>
      <div id='about-image' className="about-image">
        <div className='about-who-is-tommy'>
          <h3 style={{ fontWeight: 200 }}><span style={{ fontWeight: 1000 }}>WHO</span> IS TOMMY</h3>
          <p >I'm a frontend developer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.</p>
        </div>

         <div className="play" onClick={handleToggle}>
          <i class="ri-play-circle-line"  ></i>
          <h2 >Watch Tommy's Story</h2>
        </div>
        <div id="modal-video" className={`modal-video ${ toggle ? 'hidden' : ''}`}>
          <div onClick={handleToggle} className="close-video-modal"><i class="ri-close-circle-line"></i></div>
          <iframe width='100%' height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>


      </div>
      <div className="get-to-know-me about-grid-item">
        <h3>Get to know me!</h3>
        <p>My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.</p>


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
      {/* <div className="video about-grid-item">
        <iframe className="video-item" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
        </iframe>

      </div> */}

    </div>
  )
}

export default About
