import React from 'react'
import "./mcartProgress.css"
export default function MCartProgress({newUser,mode1,mode2,mode3, on1,on2,on3}) {
    return (
    <div className='apMainBox'>
    <div className='apBox1'>
        <div>
        <div onClick={()=>{on1('Address')}} id='class' className= {mode1==="active"? 'apActive':mode1==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '3vw'}} class={newUser ? "fa-solid fa-cart-shopping" : "fa-solid fa-location-dot"}></i>
        </div>
        </div>
        <hr className={mode1==='completed'?'hrCompleted':'hrActive'}></hr>
        <div onClick={()=>{if(newUser){on2()} else{ on2('Cart') }}} id='class' className={mode2==="active"? 'apActive':mode2==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '3vw'}} class={newUser ? "fa-solid fa-location-dot" : "fa-solid fa-cart-shopping"}></i>
        </div>
        <hr className={mode2==='completed'?'hrCompleted':'hrActive'}></hr>
        <div id='class' className={mode3==="active"? 'apActive':mode3==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '3vw'}} class="fa-solid fa-money-bill"></i>
        </div>
    </div>
    <div className='apBox2'>
        <div onClick={()=>{on1('Address')}} className={newUser ? "apTitle12" : 'apTitle1'}>{newUser ? "Cart" : "Address"}</div>
        <div onClick={()=>{on2('Cart')}} className={newUser ? "apTitle22" :'apTitle2'}>{newUser? "Address" : "Cart"}</div>
        <div className='apTitle3'>Payment</div>
    </div>
    </div>
  )
}

