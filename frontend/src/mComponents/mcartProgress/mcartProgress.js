import React from 'react'
import "./mcartProgress.css"
export default function MCartProgress({newUser,mode1,mode2,mode3,mode4, on1,on2,on3,on4}) {
    return (
    <div className='apMainBox'>
        {/* <div onClick={()=>{on1('Address')}} id='class' className= {mode1==="active"? 'apActive':mode1==="inActive"?'apInActive' : 'apCompleted'}>
            {mode1 === "active" ? <p>1</p> : <i class="fa-solid fa-check"></i>}
        </div> */}

        <hr className={mode1 === "completed" ? 'apMainBox-l1 hr-active' : 'apMainBox-l1 hr-inactive'}></hr>
        <hr className={mode2 === "completed" ? 'apMainBox-l2 hr-active' : 'apMainBox-l2 hr-inactive'}></hr>
        <hr className={mode3 === "completed" ? 'apMainBox-l3 hr-active' : 'apMainBox-l3 hr-inactive'}></hr>

        <div className='apBox'>
            <div className={mode1 === "active" ? 'apBox-circle' : mode1 === "inactive" ? "apBox-circle-inactive" : "apBox-circle-completed"}>
                {mode1 === "completed" ?<i class="fa-solid fa-check"></i> : <p className='apBox-circle-t'>1</p>}
            </div>
            <p className={mode1 === "inactive" ? 'apBox-t1' : 'apBox-t2'}>Cart</p>
        </div>

        <div className='apBox'>
            <div className={mode2 === "active" ? 'apBox-circle' : mode2 === "inactive" ? "apBox-circle-inactive" : "apBox-circle-completed"}>
                {mode2 === "completed" ?<i class="fa-solid fa-check"></i> : <p className='apBox-circle-t'>2</p>}
            </div>
            <p className={mode2 === "inactive" ? 'apBox-t1' : 'apBox-t2'}>Address</p>
        </div>

        <div className='apBox'>
            <div className={mode3 === "active" ? 'apBox-circle' : mode3 === "inactive" ? "apBox-circle-inactive" : "apBox-circle-completed"}>
                {mode3 === "completed" ?<i class="fa-solid fa-check"></i> : <p className='apBox-circle-t'>3</p>}
            </div>
            <p className={mode3 === "inactive" ? 'apBox-t1' : 'apBox-t2'}>Payment</p>
        </div>

        <div className='apBox'>
            <div className={mode4 === "active" ? 'apBox-circle' : mode4 === "inactive" ? "apBox-circle-inactive" : "apBox-circle-completed"}>
                {mode4 === "completed" ?<i class="fa-solid fa-check"></i> : <p className='apBox-circle-t'>4</p>}
            </div>
            <p className={mode4 === "inactive" ? 'apBox-t1' : 'apBox-t2'}>Summary</p>
        </div>
    {/* <div className='apBox1'>
        <div onClick={()=>{on1('Address')}} id='class' className= {mode1==="active"? 'apActive':mode1==="inActive"?'apInActive' : 'apCompleted'}>
        <i style={{fontSize: '3vw'}} class={newUser ? "fa-solid fa-cart-shopping" : "fa-solid fa-location-dot"}></i>
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
    </div>  */}
    </div>
  )
}

