import React from 'react'
import "./productListMobile_page.css"
import MobileCard from '../../components/mobilecard/mobilecard'
const productListMobile_page = () => {
  return (
   <div>
        <div className="productListMobile_page_navBar">
        <div className="productListMobile_page_left">
            <i class="fa-solid fa-arrow-left arrow"></i>
            <p className='productListMobile_page_heading'>Headphones</p>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    <div className="productListMobile_page_right">
        <i class="fa-solid fa-bag-shopping"></i>
    </div>
    </div>

    <div className="productListMobile_page_categorybar">
        <div className="productListMobile_page_items">
            <p className="productListMobile_page_text">SortBy</p>
        </div>
        <div className="productListMobile_page_items">
            <p className="productListMobile_page_text">Filter</p>
        </div>
        <div className="productListMobile_page_items">
            <p className="productListMobile_page_text">Brand</p>
        </div>
        <div className="productListMobile_page_items">
            <p className="productListMobile_page_text">Price</p>
        </div>
    </div>
    <div className="productListMobile_page_mobile_cart">
        <MobileCard/>
        <MobileCard/>
        <MobileCard/>
        <MobileCard/>
        <MobileCard/>
        <MobileCard/>
    </div>
    

   </div>
  )
}

export default productListMobile_page