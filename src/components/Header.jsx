import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
    return (
        <div className='header'>
            <div className='profile'></div>
            <p>Tommy Oliveir</p>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <Link
                    to='project'
                    smooth={true}                  
                    duration={900}
                >Project
                </Link>
            </nav>

        </div>
    )
}

export default Header
