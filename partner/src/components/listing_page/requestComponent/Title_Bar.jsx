import React from 'react'
import './Title_Bar.css'

const Title_Bar = () => {
  return (
    <div className="requestTitle_bar">
        <li className='requestTitleInfo'>Product</li>
        <li className='requestTitleCategory'>Category</li>
        <li className='requestTitleSKU'>Request ID</li>
        <li className='requestTitleCreated'>Time</li>
        <li className='requestTitleType'>Type</li>
        <li className='requestTitleStatus'>Status</li>
        <li className='requestTitleMore'></li>
    </div>
  )
}

export default Title_Bar