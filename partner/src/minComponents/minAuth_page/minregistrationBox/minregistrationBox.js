import React, { useState } from 'react'
import './minregistrationBox.css'



const MINRegistrationBox = ({phone, setPhone, processOTP}) => {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='aregBox'>
        <p className='aregHead'>Mobile Number</p>
        <div className='aregInputBox'>
            <p className='aregInput91'>+91 </p>
        <input value={phone} onChange={(val)=>{setPhone(val.target.value)}} className='aregInput' type="number" placeholder='' />
        </div>
        {isLoading ? <div className='aregloader1'></div> : <div onClick={ async ()=>{
          const obj = {
            phone: phone,
            mode: 'Influencer'
          }
            setIsLoading(true);
            let res = await processOTP(obj);
            if(res === false){
              setIsLoading(false);
            }
            }}
           className='aregButton'>
            <p className='aregButtonText'>Send OTP</p>
        </div>}
    </div>
  )
}

export default MINRegistrationBox