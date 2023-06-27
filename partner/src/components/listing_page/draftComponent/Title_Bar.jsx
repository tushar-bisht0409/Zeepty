import React from 'react'
import './Title_bar.css';

const Title_Bar = () => {
  return (
    <div className="drafttitle_bar">
      <li className='drafttitleInfo'>Product</li>
      <li className='drafttitleCategory'>Category</li>
      <li className='drafttitleSKU'>Draft ID</li>
      <li className='drafttitleCreated'>Created On</li>
      <li className='drafttitleModified'>Modified On</li>
      <li className='drafttitleMore'></li>
    </div>
  )
}

export default Title_Bar