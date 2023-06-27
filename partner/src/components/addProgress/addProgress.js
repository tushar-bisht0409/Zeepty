import React from 'react'
import "./addProgress.css"
export default function AddProgress({mode1,mode2,mode3}) {
    return (
    <div className='apMainBox'>
    <div className='apBox1'>
        <div>
        <div className= {mode1==="active"? 'apActive':mode1==="inActive"?'apInActive' : 'apCompleted'}>1</div>
        </div>
        <hr className={mode1==='completed'?'hrCompleted':'hrActive'}></hr>
        <div className={mode2==="active"? 'apActive':mode2==="inActive"?'apInActive' : 'apCompleted'}>2</div>
        <hr className={mode2==='completed'?'hrCompleted':'hrActive'}></hr>
        <div className={mode3==="active"? 'apActive':mode3==="inActive"?'apInActive' : 'apCompleted'}>3</div>
    </div>
    <div className='apBox2'>
        <div className='apTitle1'>Vertical</div>
        <div className='apTitle2'>Product Information</div>
        <div className='apTitle3'>Product Overview</div>
    </div>
    </div>
  )
}

