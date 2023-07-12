import React, { useEffect } from 'react'
import "./mselectedAddress.css"

const MSelectedAddress = ({setCurrentPoint,item}) => {

    console.log("AAA: ",item)
  return (
    item === undefined? <div></div>:
    Object.keys(item).length === 0 ? 
    <div onClick={()=>{
        setCurrentPoint("Address");
    }} className='msaAddAddress'>Add Address To Place Order</div> : 
    <div className="msaBox">
        <div onClick={()=>{
            setCurrentPoint("Address");
        }} className='msaButton'>Change</div>
        <p className='msaHeadTitle'>Deliver to:</p>
            <p className='msaText'>{item.fullName}</p>
            <p className='msaText'>{item.address},{item.landmark},{item.city}</p>
            <p className='msaText'>{item.phone_number}</p>
        <div className='msaRow'>
            <p className='msaTitle'>Pin Code:</p>
            <p className='msaText'>{item.pincode}</p>
        </div>
    </div>
  )
}

export default MSelectedAddress