import React from 'react'
import './qcTitlebar.css'

const QCTitlebar = () => {
  return (
    <div className="qctb-bar">
        <li className='qctb-Info'>Product</li>
        <li className='qctb-Category'>Category</li>
        <li className='qctb-SKU'>Request ID</li>
        <li className='qctb-Created'>Time</li>
        <li className='qctb-Type'>Type</li>
        <li className='qctb-Status'>Status</li>
    </div>
  )
}

export default QCTitlebar