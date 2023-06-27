import React from 'react'
import './Help.css'
import orders from '../../../assets/orders.png'
import wishlist from '../../../assets/wishlist.png'
import helpCenter from '../../../assets/helpCenter.png'
import faq from '../../../assets/faq.png'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className="help">
        <div>
            <div className="helpItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-box"></i>
            <Link to='/order' style={{ textDecoration: 'none' }}>
                    <p className='helpItemText'>Orders</p>
                </Link>
            </div>
            <div onClick={()=>{window.open(`/wishlist`,'_self');}} className="helpItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-regular fa-heart"></i>
            <p className='helpItemText'>Wishlist</p>
            </div>
        </div>
        <div>
        <div className="helpItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-headset"></i>
            <p className='helpItemText'>Help Center</p>
            </div>
            <div className="helpItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-comments"></i>
            <p className='helpItemText'>FAQs</p>
            </div>
        </div>
    </div>
  )
}

export default Help