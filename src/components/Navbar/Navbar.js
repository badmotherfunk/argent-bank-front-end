import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './navbar.css'
import logo from '../../designs/img/argentBankLogo.webp'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'
import { resetProfile } from '../../features/profile/profileSlice'
import { resetUserName } from '../../features/updateUserName/updateUserNameSlice'
import { useEffect, useState } from 'react'
import { userProfile } from '../../features/profile/profileSlice'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //State Redux
  const {user} = useSelector((state) => state.auth)
  const {userInfo} = useSelector((state) => state.profile)
  const {data, isSuccess} = useSelector((state) => state.newUserName)
  
  const [userProfiles, setUserProfile] = useState()

  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    //Si un utilisateur est connecté alors on envoi nos données utilisateur
    if(token) {
      dispatch(userProfile())
    }
  }, [token, dispatch])

  useEffect(() => {
      // Si on à une réponse de nos données utilisateur, alors on actualise le state avec l'userName du profil
      if(userInfo) {
        const userName = userInfo.body.userName
        setUserProfile(userName)
      }
  }, [userInfo])
  
  useEffect(() => {
    // Si on modifie l'userName avec succès, alors on actualise le state avec le nouvel userName
    if(isSuccess) {
      const newUserName = data.body.userName
      setUserProfile(newUserName)
    }

  }, [isSuccess, data])

  // Lorsqu'on se déconnecte on remet les states à zéro et on redirige vers la page d'accueil
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    dispatch(resetProfile())
    dispatch(resetUserName())
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
          {/* Si un utilisateur est connecté alors on affiche le pseudo et le logout / Sinon on affiche le lien vers la page de connexion */}
          {user ? (
          <>
          <Link className='userName-link' to="/profile">
            <span className='user-name'>{userProfiles}</span>
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
