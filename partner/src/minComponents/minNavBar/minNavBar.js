import React from 'react'
import { useState } from 'react'
import "./minNavBar.css"
const MINNavBar = () => {

  const [keyW, setKeyW] = useState("");

  function searchNow() {
    if(keyW !=""){
    window.open(`/minsearch/${keyW}`,'_self');
    }
  }
  return (
    <div className="minNBBox">
            <i style={{ fontSize: '15px',color: 'white'}} class="fa-solid fa-arrow-left arrow "></i>
            <div className="minNBInputfield">
                <input onKeyDown={(val)=>{
                  if(val.key === 'Enter') {
                  searchNow()}}}
                   value={keyW} onChange={(val)=>{setKeyW(val.target.value)}} type="text" placeholder='Search here' />
                   <div onClick={()=>{searchNow()}} className='minNBSIconBox'>
                <i style={{ fontSize: '15px',color: 'lightgrey'}} class="fa-solid fa-search"></i>
                </div>
            </div>
                {/* <i style={{ fontSize: '15px',color: 'white'}} class="fa-solid fa-bag-shopping"></i> */}
    </div>
  )
}

export default MINNavBar