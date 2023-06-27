import React, { useEffect } from 'react'
import { useState } from 'react'
import "./mnavBar.css"
const MNavBar = ({keyword, isCartVisible}) => {

  const [keyW, setKeyW] = useState("");

  function searchNow() {
    if(keyW !=""){
    window.open(`/search/${keyW}`,'_self');
    }
  }

  useEffect(()=>{
    if(keyword !== undefined){
      setKeyW(keyword);
    }
  },[])
  return (
    <div className="mnb">
            <i onClick={()=>{window.history.back()}} style={{ fontSize: '18px',color: 'white'}} class="fa-solid fa-arrow-left arrow "></i>
            <div className="mnbinputfield">
                <input className="mnbinputfield-input" onKeyDown={(val)=>{
                  if(val.key === 'Enter') {
                  searchNow()}}}
                   value={keyW} onChange={(val)=>{setKeyW(val.target.value)}} type="text" placeholder='Search here' />
                   <div onClick={()=>{searchNow()}} className='mnbiiconBox'>
                <i style={{ fontSize: '15px',color: 'lightgrey'}} class="fa-solid fa-search"></i>
                </div>
            </div>
            <div className='mnb-icons'>
              <i onClick={()=>{window.open('/wishlist','_self')}} id="mnb-icons-heart" style={{ fontSize: '18px',color: 'white'}} class="fa-solid fa-heart"></i>
                {isCartVisible ? <i onClick={()=>{window.open('/cart','_self')}} id="mnb-icons-cart" style={{ fontSize: '18px',color: 'white'}} class="fa fa-shopping-cart"></i> : null}
            </div>

    </div>
  )
}

export default MNavBar