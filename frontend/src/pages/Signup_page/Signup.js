
import React, { useState } from 'react'
import './Signup.css'
import NavBar from "../../components/navBar/navBar";
import SignUpleft from "../../components/signUp/left_signup_login";
import SignUpright from "../../components/signUp/right_signup_login";


const Signup = () => {

    const [mode,setMode] = useState('Login');

    
  
    return (
        <>
      <NavBar/>
       <div>
        <div className="newtocommerce"> {mode==="Login"}?Login:Signup</div>
      <SignUpleft/>
     <SignUpright/>
     <p className='signuptop'>Sign Up</p>
       <p className='signupmobileno'>Enter Mobile Number</p>
      <form className='enterNo'>
       

      <div className='inputno'> 91+91 |    &nbsp;&nbsp;    Mobile Number</div></form>
      <button className='signupbtn'><p className='signupbtnname'>Sign Up</p></button>
      <p className='alreadyUser'>  Already an Existing User? Login</p>
   
      </div>

      </>
    )
   
  }
  
  export default Signup;