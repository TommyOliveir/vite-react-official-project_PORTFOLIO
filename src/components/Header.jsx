import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(prev => prev = !prev)
    }

    function closeNav() {
        setToggle(false)
    }

    console.log(toggle)

    return (


        <div className='header container'>
            <div className='profile'></div>
            <p>Ranger</p>
            <div id="menu-burger" onClick={handleToggle}>{toggle ? <i class="ri-close-fill"></i>: <i className="ri-menu-line"></i>}</div>



            <nav className={!toggle ? 'nav-hidden' : ''}>
                {/* <nav > */}
                <ul>
                    <li >
                        <Link onClick={closeNav} activeClass="active" smooth spy to="hero">
                            HOME
                        </Link>

                    </li>

                    <li >
                        <Link onClick={closeNav} activeClass="active" smooth spy to="projects">
                        PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="active" smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeNav} activeClass="active" smooth spy to="contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>




        </div>

    )
}

export default Header
