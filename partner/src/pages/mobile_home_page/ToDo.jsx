import React from 'react'

export default function ToDo({pendingorder , outofstock,lowstock }) {
 
    console.log("pendingorder",pendingorder)
    console.log("outofstock",outofstock)
    console.log("lowstock",lowstock)

  return (
    <div className="todo">
        <div className="top_info">
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <p>To do list</p>
        </div>

        <div className="order_info">
            <div className="order_box">
                <p>Pending Orders</p>
                <p>{pendingorder}</p>
            </div>
            <div className="order_box">
                <p>Out of Stocks</p>
                <p>{outofstock}</p>
            </div>
            <div className="order_box">
                <p>Low on Stocks</p>
                <p>{lowstock}</p>
            </div>
        </div>
    </div>
  )
}
