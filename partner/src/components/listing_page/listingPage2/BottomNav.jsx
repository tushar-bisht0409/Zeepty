import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="bottomNav">
        <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/productImg">Product Images</Link>
        </li>
        <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/productImg">Price and Stock</Link>
        </li>
        <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/productImg">Shipping</Link>
        </li>
        <li>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/productImg">Product Description</Link>
        </li>

    </div>
  )
}

export default BottomNav