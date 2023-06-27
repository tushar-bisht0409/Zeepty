import React from 'react'
import './draftTitlebar.css';

const DraftTitleBar = () => {
  return (
    <div className="drafttitle_bar">
      <li className='drafttitleInfo'>Product</li>
      <li className='drafttitleCategory'>Category</li>
      <li className='drafttitleSKU'>Draft ID</li>
      <li className='drafttitleCreated'>Created On</li>
      <li className='drafttitleModified'>Modified On</li>
      <li className='drafttitleMore'>Action</li>
    </div>
  )
}

export default DraftTitleBar