import React from 'react'
import "./loginForm.css"
import {useState, useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {login} from '../../features/auth/authSlice'


export default function LoginForm() {

  const [formData, setFormData]  = useState({
    email:'',
    password: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isError, isSuccess, message} = useSelector( (state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // Remember Me
  useEffect(() => {
    const rememberEmail = JSON.parse(localStorage.getItem('email'))
    const rememberPassword = JSON.parse(localStorage.getItem('password'))

    //Si nos éléments du localStorage sont différents de "null", alors on change notre state et on stock les valeurs du localStorage dans nos inputs
    if(localStorage.getItem('email') !== null && localStorage.getItem('password') !== null ) {
      setFormData(() => ({
        email: rememberEmail,
        password: rememberPassword
      }))
    }
  }, [])



  // On stock la valeur du state qu'on déstructure dans {email , password}
  const { email, password } = formData

  // Et on envoi nos données dans notre requête 'login' avec dispatch 
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    // Si la connexion est un succès ou qu'il y a des données de notre réponse, alors on redirige vers la page profil
    if(isSuccess || user) {
      navigate('/profile')
    }
  }, [user, isError, isSuccess, message, navigate, dispatch])

  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
          type="email" 
          id="email"
          name="email"       
          value={email}
          onChange={onChange}
          required
           />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          name='password'
          value={password}
          onChange={onChange}
          required
          />
        </div>
        <div className="input-remember">
          <input 
          type="checkbox" 
          id="remember-me" /><label 
          htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type='submit' >Sign In</button>  
      </form>
    </section>
  </main>
  )
}
