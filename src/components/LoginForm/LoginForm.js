import React from 'react'
import "./loginForm.css"
import {useState, useEffect } from 'react'


export default function LoginForm() {

  const [formData, setFormData]  = useState({
    email:'',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

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
        <button className="sign-in-button" type='submit'>Sign In</button>  
      </form>
    </section>
  </main>
  )
}
