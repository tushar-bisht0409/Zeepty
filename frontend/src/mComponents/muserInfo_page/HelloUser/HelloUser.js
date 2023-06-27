import React from 'react'
import './HelloUser.css'

const HelloUser = ({item}) => {
  return (
    <div className="hu">
        <p className='hu-text'>Hello {item.name === "" || item.name === undefined ? 'User' : item.name }</p>
        <img className='hu-img' src={""}/>
    </div>
  )
}

export default HelloUser