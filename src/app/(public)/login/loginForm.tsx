'use client'
import React from 'react'
import Styles from './login.module.css'

function Login() {
  return (
    <form action={'/api/login'} method="post" className={Styles.loginForm}>
    <input type="email" name="mail" placeholder='johnappleseed@gmail.com' />
    <input type="password" placeholder='password'/>
    <p>New to text? <a href="#" id={Styles.change}>Sign Up</a></p>
    <button type="submit">Login</button>
  </form>
  )
}

export default Login