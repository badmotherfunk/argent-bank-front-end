import React from 'react'
import {Link} from "react-router-dom"
import './navbar.css'
import logo from '../../designs/img/argentBankLogo.png'

export default function Navbar() {
  return (
    <header className="App-header">

      <nav className="main-nav">
        <Link to='./' className='class="main-nav-logo'>
            <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <i className="fa fa-user-circle"></i>
          <Link to='/login' className="main-nav-item">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}
