import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './navbar.css'
import logo from '../../designs/img/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {userName} = useSelector((state) => state.profile.user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
          {user ? (
          <>
          <Link className='userName-link' to="/profile">
            <span className='user-name'>{userName}</span>
          </Link>
            <i className="fa fa-user-circle"></i>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>          
          ) : (
          <>
            <i className="fa fa-user-circle"></i>
            <Link to='/login' className="main-nav-item">
              Sign In
            </Link>
          </>          
          )
        }
        </div>
      </nav>
    </header>
  )
}
