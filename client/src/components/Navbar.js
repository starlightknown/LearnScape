import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        Home
                    </Link> 
                    <br />
                    <a href='/roadmap'>Roadmap</a>
                    <br />
                    <Link to='/landscape' >Landscape</Link>
                </div>
        </nav>
        </>
    )
}

export default Navbar
