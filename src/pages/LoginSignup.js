import React from 'react'
import './css/LoginSingup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
        <p className='login-p'>Already have an account? <span>Login</span></p>
<div className="login-agree">
  <input type="checkbox"/>
  <p>By continuing, i agree to the terms of use & privacy policy .</p>
</div>
      </div>
    </div>
  )
}

export default LoginSignup
