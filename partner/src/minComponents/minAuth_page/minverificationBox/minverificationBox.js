import React, { useEffect, useState } from 'react'
import './minverificationBox.css'

import { useParams } from 'react-router-dom';


const MINVerificationBox = ({IsOTPCorrect, processOTP, authMode, phone, setAuthMode}) => {

  const [uOTP, setUOTP] = useState('');

  const [otpStage, setOtpStage] = useState("Start");
  const [otpTimer, setOtpTimer] = useState(60);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (otpStage === "Sent") {
      const timer = setInterval(() => {
        setOtpTimer((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setOtpStage("Resend");
            setOtpTimer(60)
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [otpStage]);

  useEffect(()=>{
    setOtpStage("Sent")
  },[])

  
  return (
    <div className='averBox'>
      <div className="averInfo">
                <p className='averInfoHead'>Mobile Number</p>
                <p className='averInfoText'>+91 {phone}</p>
                <p onClick={()=>{setAuthMode("signup")}} className='averInfoChange'>Change?</p>
        </div>
        <p className='averHead'>Enter OTP</p>
        <div className='averInputBox'>
        <input value={uOTP} onChange={(val)=>{setUOTP(val.target.value)}} className='averInput' type="number" placeholder='OTP' />
        </div>
        {isLoading ? null : 
        <div onClick={async ()=>{
          if(otpStage === "Mobile" || otpStage === "Resend"){
            setIsLoading(true)
                  const obj = {
                phone: phone,
                mode: 'Influencer'
              }
              const isSent = await processOTP(obj);
              if(isSent) {
                setOtpStage('Sent');
              }
              setIsLoading(false)
          }
      }} className={otpStage === "Start" || otpStage === "Sent"?"averOTPInactive":"averOTP"}>{otpStage ==="Start" || otpStage === "Mobile" ? "Send OTP" : otpStage === "Sent" ? `Resend in ${otpTimer}`: otpStage === "Resend" ? "Resend" : ""}</div>
        // <div onClick={()=>{
        //   const obj = {
        //     phone: phone,
        //     mode: 'Influencer'
        //   }
        //   processOTP(obj);}} className='averResendBox'>
        // <p className='averResend'>Resend OTP</p>
        // </div>
        }
        {isLoading ? <div className='averloader1'></div> : <div onClick={ async ()=>{
          setIsLoading(true);
          let res = await IsOTPCorrect(uOTP);
          if(res === false){
            setIsLoading(false);
          }
          }} className='averButton'>
            <p className='averButtonText'>{authMode==="loginVerification"?'Log in' :'Sign Up'}</p>
        </div>}
    </div>
  )
}

export default MINVerificationBox