import React from 'react'

import Styles from './login.module.css'

function loginPage() {
  return (
    <div className={Styles.main}>
      <div className={Styles.left}>
        <h1>Welcome to Text</h1>
      </div>
      <div className={Styles.right}>
        <form action={'/api/login'} method="post" className={Styles.loginForm}>
          <input type="email" name="mail" placeholder='johnappleseed@gmail.com' />
          <input type="password" placeholder='password'/>
          <p>New to text? <a href="#" id={Styles.change}>Sign Up</a></p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default loginPage