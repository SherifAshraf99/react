import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {




  return (
    <nav className='myNavbar'>
      <div className="container d-flex justify-content-between align-items-center">
      <div>
      <Link to="/">START REACT</Link>
      </div>
        <div>
            <ul className='list-unstyled d-flex align-items-center'>
                <li><Link to="Protfolio" className='active' >PORTFOLIO</Link></li>
                <li><Link to="ABOUT" >ABOUT</Link></li>
                <li><Link to="Contact" >CONTACT</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}
