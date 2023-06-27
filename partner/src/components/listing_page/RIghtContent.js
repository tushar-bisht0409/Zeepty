import React from 'react'
import ProductImg from './ProductImg'
import RightNav from './RightNav'
import Select from './Select'

export default function RightContent() {
  return (
    <div >
        <RightNav />
        <Select />
        <div className="info">
            <p>Please fill all mandatory attributes to preview title</p>
            <div id="button-top">Save & Go Back</div>
        </div>
        <ProductImg />
    </div>
  )
}
