import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectList from "../components/ProjectList";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
// import Code from "/code.jpg"

function Home() {
  return (
    <div>
      <div id="hero" className=" section ">
        <div className="container">


          <div className="hero-text">
            <h1>HI, MY NAME IS NAMEE OLIVEIR</h1>
            <h4>
              I am a frontend developer based in Hungary, My specialities are
              REACT JS and Tailwind CSS, <br></br>
              and I love building apps that are delightful to use.
            </h4>
          </div>
          <Socials />
        </div>
      </div>
      <div id="projects" className="section">
        <ProjectList />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
