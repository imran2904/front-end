import React, { useState } from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  const [state , setState]=useState("Login");
  
  return (
    <div className='loginsignup'>
      <div className="login-signup-container">
      
        <h1>{state}</h1>
        
        <div className="login-signup-fields">
          {state==='Sign Up'?<input type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email Address' required />
          <input type="password" placeholder='Password' required/>
        </div>
        
        <button>Continue</button>
        {state==='Sign Up'?
        <p className='login-signup-login'>Already have an Account ?
        <span onClick={()=>{setState("Login")}}>Login here</span></p>:
        <p className='login-signup-login'>Create an Account ?
        <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        
      <div className="login-signup-agree">
        <input type="checkbox" name='' id='' />
        <p>
          By continuing ,i agree to the terms of use and privecy policy.  
        </p>
      </div>
      
      </div>
    </div>
  )
}
export default LoginSignup;
