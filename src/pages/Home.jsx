import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
// import Code from "/code.jpg"

function Home() {
  return (
    <div>
      <div id="hero" className=" section ">
        <div className="contianer">
          <div className="socials">
            <ul>
              <li>insta</li>
              <li>github</li>
              <li>linked</li>
            </ul>
          </div>

          <div className="hero-text ">
            <h1>HI, MY NAME IS NAMEE OLIVEIR</h1>
            <h4>
              I am a frontend developer based in Hungary, My specialities are
              REACT JS and Tailwind CSS, <br></br>
              and I love building apps that are delightful to use.
            </h4>
          </div>
        </div>
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
