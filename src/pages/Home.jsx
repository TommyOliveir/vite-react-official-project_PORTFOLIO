import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

function Home() {
    return (
        <div>
            <div id="hero" className=" section ">
                <div className="hero-text container">
                    <h1>HI, MY NAME IS TOMMY OLIVEIR</h1>
                    <p>I am a frontend developer based in Hungary,
                        My specialities are REACT JS and Tailwind CSS,
                        and I love building apps that are delightful to use.</p>
                </div>
            </div>
            <div id="about" className='section'>
                <About />

            </div>
            <div id="projects" className='section'>
                <Projects />
            </div>
            <div id="contact" className='section'>
                <Contact />
            </div>
        </div>
    )
}

export default Home
