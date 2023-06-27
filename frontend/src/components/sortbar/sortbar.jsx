import React from 'react'
import { Link } from 'react-router-dom'
import "./sortbar.css"

const sortbar = () => {
  return (
    <div className="sort-bar">
        
    <div className="items ">
        <Link className='link'>Sort By:</Link>
    </div>
    <div className="items-active ">
        <Link className='link'> Relevance</Link>
    </div>
    <div className="items">
        <Link className='link' >Popularity</Link>
    </div>
    <div className="items ">
        <Link className='link'>Price High To Low</Link>
    </div>
    <div className="items ">
        <Link className='link'> Price Low To High</Link>
    </div>
    <div className="items">
        <Link className='link'>Discount</Link>
    </div>
  </div>
    
  )
}

export default sortbar