import React from 'react'
import "./cartProgress.css"
export default function CartProgress({mode1,mode2,mode3, on1,on2,on3}) {
    return (
    <div className='apMainBox'>
    <div className='apBox1'>
        <div>
        <div onClick={()=>{on1('Address')}} className= {mode1==="active"? 'apActive':mode1==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '1vw'}} class="fa-solid fa-location-dot"></i>
        </div>
        </div>
        <hr className={mode1==='completed'?'hrCompleted':'hrActive'}></hr>
        <div onClick={()=>{on1('Cart')}} className={mode2==="active"? 'apActive':mode2==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '0.8vw'}} class="fa-solid fa-cart-shopping"></i>
        </div>
        <hr className={mode2==='completed'?'hrCompleted':'hrActive'}></hr>
        <div onClick={on3} className={mode3==="active"? 'apActive':mode3==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '1vw'}} class="fa-solid fa-money-bill"></i>
        </div>
    </div>
    <div className='apBox2'>
        <div onClick={()=>{on1('Address')}} className='apTitle1'>Address</div>
        <div onClick={()=>{on2('Cart')}} className='apTitle2'>Cart</div>
        <div onClick={on3} className='apTitle3'>Payment</div>
    </div>
    </div>
  )
}

