import React from 'react'
import About from '../components/About'

function Home() {
    return (
        <div>
            <div className="hero section">
                <h1>HI, MY NAME IS TOMMY OLIVEIR</h1>
                <p>I am a fronten developer based in Hungary</p>
            </div>
            <div id="about" className='section'>
                <About></About>

            </div>
            <div id="project" className='section'>
                <h1>project Section</h1>
            </div>
            <div id="contact" className='section'>
                <h1>Contact me</h1>
            </div>
        </div>
    )
}

export default Home
