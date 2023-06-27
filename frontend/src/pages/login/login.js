import React from 'react'
import './login.css'

import NavBar from "../../components/navBar/navBar";
import SignUpleft from "../../components/signUp/left_signup_login";
import SignUpright from "../../components/signUp/right_signup_login";
const login = () => {

  
  return (
    <>
  <NavBar/>
  
    <div>
  <SignUpleft/>
  <SignUpright />
  <p className='loginuptop'>Login</p>
  <p className='loginmobileno'>Enter Mobile Number</p>
  <form className='loginenterNo'>
       

       <div className='inputno'> 91+91 |    &nbsp;&nbsp;    Mobile Number</div></form>
  
  <form className='loginpassword'>
       

       <div className='inputno'> Your &nbsp;&nbsp;    Password</div></form>
  
  <div className='newtocommerce'>New to Commerece? Create Account</div>
  <p className='enterpassword'>Enter Password</p>
  <p className='loginterms'>By By continuing, you agree to our Terms of Use and Privacy Policy.</p>
  <button className='loginbtn'><p className='loginbtnname'>Login</p></button>
  <p className='orinbtw'>OR</p>
  <button className='requestotpbtn'><p className='requestotpname'>Request OTP</p></button>
  
  <div className='newtocommerce'>New to Commerece? Create Account</div>
    </div>
    </>
  )
}


export default login