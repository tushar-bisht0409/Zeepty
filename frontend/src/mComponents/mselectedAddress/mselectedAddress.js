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
        {/* <div className='msaRow'>
            <p className='msaTitle'>Name</p> */}
            <p className='msaText'>{item.fullName}</p>
        {/* </div> */}
        {/* <div className='msaRow'>
            <p className='msaTitle'>Address</p> */}
            <p className='msaText'>{item.addressLine},{item.landmark},{item.city}</p>
        {/* </div> */}
        {/* <div className='msaRow'>
            <p className='msaTitle'>Phone Number</p> */}
            <p className='msaText'>{item.phoneNumber}</p>
        {/* </div> */}
        <div className='msaRow'>
            <p className='msaTitle'>Pin Code:</p>
            <p className='msaText'>{item.postalcode}</p>
        </div>
    </div>
  )
}

export default MSelectedAddress