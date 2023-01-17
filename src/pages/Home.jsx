import React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'

function Home() {
    return (
        <div>
            <div id="hero" className=" section">
                <h1>HI, MY NAME IS TOMMY OLIVEIR</h1>
                <p>I am a frontend developer based in Hungary</p>
            </div>
            <div id="about" className='section'>
                <About></About>

            </div>
            <div id="projects" className='section'>
                <Projects/>
            </div>
            <div id="contact" className='section'>
                <h2>Contact me</h2>
            </div>
        </div>
    )
}

export default Home
