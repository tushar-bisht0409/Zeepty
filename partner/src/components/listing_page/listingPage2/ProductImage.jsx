import React from 'react'
import Form1 from './Form1'
import Uploads from './Uploads'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import LeftNav from '../../leftnav/lefnav'

const ProductImage = () => {
  return (
    <>
    <div id="content-wrap">
        <LeftNav props={"order"} />
        <div>
        <TopNav />
        <BottomNav />
        <Uploads /> 
        <Form1 />
        </div>
      </div>
        
    </>
  )
}

export default ProductImage