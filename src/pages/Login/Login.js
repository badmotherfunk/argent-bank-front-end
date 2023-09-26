import React from 'react'
import {useState, useEffect } from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login() {
  const [formData, setFormData]  = useState({
    name: '',
    email:'',
    password: '',
  })

  const { name, email, password } = formData

  document.title = "Argent Bank - Sign In"

  return (
    <LoginForm />
  )
}
