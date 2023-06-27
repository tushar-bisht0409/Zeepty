import React from 'react'
import "./myproduct.css"
export default function Myproduct(d) {
  
const handleInstock =()=>{
  d.setmode("inStock")
  d.setlisting(d.data.inStock)
  d.groupListing(d.data.inStock)
}
const handleOutofStock =()=>{
  d.setlisting(d.data.outOfStock)
  d.setmode("outOfStock")
  d.groupListing(d.data.outOfStock)
}
const handleLowStock =()=>{
 d.setmode("lowOnStock");
 d.setlisting(d.data.lowOnStock)
 d.groupListing(d.data.lowOnStock)
}

  return (
        <div className='product_typem'>
          <div className={d.mode == "outOfStock"?"product_typem_active": 'product_typem_inactive'} onClick={handleOutofStock}>Out of Stock ( {d.data.outOfStock.length} )</div>
          <div className={d.mode == "lowOnStock"?"product_typem_active": 'product_typem_inactive'} onClick={handleLowStock}>Low On Stock ( {d.data.lowOnStock.length} )</div>
          <div className={d.mode == "inStock"?"product_typem_active": 'product_typem_inactive'} onClick={handleInstock}>In Stock ( {d.data.inStock.length} )</div>
        </div>
  )
}

