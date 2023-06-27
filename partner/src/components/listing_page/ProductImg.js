import React from 'react'

export default function ProductImg() {
  return (
    <div className="image">
        <div id="proImg">
            IMAGE
        </div>
        <div className='img-edit'>
            <div className='edit'>
                <div className="cont">
                    <p>Price, Stock and Shipping Information</p>
                </div>
                <div className="edit-btn">
                    EDIT
                </div>
            </div>
            <div className='edit'>
                <div className="cont">
                    <p>Product Description</p>
                </div>
                <div className="edit-btn">
                    EDIT
                </div>
            </div>
        </div>
    </div>
  )
}
