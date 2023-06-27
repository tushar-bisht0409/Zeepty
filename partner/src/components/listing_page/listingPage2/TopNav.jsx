import React from 'react'
import Arrow from './assets/arrow.png'

const TopNav = () => {
  return (
    <div className="top_nav">
        <div className="arrow">
            <img src={Arrow} alt="" />
        </div>
        <div className="nav-head">
            <h3>Add New Product</h3>
        </div>
    </div>
  )
}

export default TopNav