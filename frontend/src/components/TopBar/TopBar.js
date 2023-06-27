import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
    const [activeLink, setActiveLink] = useState('all')

  const handleClick = (link) => {
    setActiveLink(link)
  }
  return (
        <div className="div11">
                <div className="title">Your Orders</div>
                <div className="menu">
                {/* <div className="nonActivate"> */}

                    <Link to='/all' style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => handleClick('all')}>
                        <div className={activeLink === 'all' ? 'subHeadii active' : 'subHeadii'}>All</div>
                    </Link>
                    <Link to='/ordered' style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => handleClick('ordered')}>
                        <div className={activeLink === 'ordered' ? 'subHeadii active' : 'subHeadii'}>Ordered</div>
                    </Link>
                    <Link to='/delivered' style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => handleClick('delivered')}>
                        <div className={activeLink === 'delivered' ? 'subHeadii active' : 'subHeadii'}>Delivered</div>
                    </Link>
                    <Link to='/cancelled' style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => handleClick('cancelled')}>
                        <div className={activeLink === 'cancelled' ? 'subHeadii active' : 'subHeadii'}>Cancelled</div>
                    </Link>
                    <Link to='/returned' style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => handleClick('returned')}>
                        <div className={activeLink === 'returned' ? 'subHeadii active' : 'subHeadii'}>Returned</div>
                    </Link>
                {/* </div> */}
        </div>
    </div>
  )
}

export default TopBar