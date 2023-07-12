import React, { useEffect } from 'react'
import "./selectedAddress.css"

const SelectedAddress = ({setCurrentPoint,item}) => {

  return (
    item == undefined? <div></div>:
    <div className="saBox">
        <div onClick={()=>{
            setCurrentPoint("Address");
        }} className='saButton'>Change</div>
        <p className='saHeadTitle'>Deliver to:</p>
        {/* <div className='saRow'>
            <p className='saTitle'>Name</p> */}
            <p className='saText'>{item.fullName}</p>
        {/* </div> */}
        {/* <div className='saRow'>
            <p className='saTitle'>Address</p> */}
            <p className='saText'>{item.addressLine},{item.landmark},{item.city}</p>
        {/* </div> */}
        {/* <div className='saRow'>
            <p className='saTitle'>Phone Number</p> */}
            <p className='saText'>{item.phoneNumber}</p>
        {/* </div> */}
        <div className='saRow'>
            <p className='saTitle'>Pin Code:</p>
            <p className='saText'>{item.pincode}</p>
        </div>
    </div>
  )
}

export default SelectedAddress