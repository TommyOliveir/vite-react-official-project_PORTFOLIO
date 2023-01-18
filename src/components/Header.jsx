import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {

    return (
        <div className='header'>
            <div className='profile'></div>
            <p>Tommy Oliveir</p>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="hero">
                           HOME
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                           ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                            CONTACT
                        </Link>
                    </li>
                  
                </ul>


            </nav>

        </div>
    )
}

export default Header
