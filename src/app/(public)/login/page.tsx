import React, { Children } from 'react'

import Styles from './login.module.css'
import Login from './loginForm'

function loginPage() {
  return (
    <div className={Styles.main}>
      <div className={Styles.left}>
        <h1>Welcome to Text</h1>
      </div>
      <div className={Styles.right}>
        <Login />
      </div>
    </div>
  )
}

export default loginPage