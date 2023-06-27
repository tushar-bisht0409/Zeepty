import React from 'react'

export default function ReturnOverview() {
  return (
    <div className="ret-over">
        <h2>Return/RTO Orders</h2>
        <p id='overview'>Overview(10 Sept '22-10 Oct '22)</p>
        <div id="return-rate">
            <p>Costumer Return Rate</p>
            <div id="stats">
                <p id='per'>12.98%</p>
                <span>80%</span>
            </div>
            <p id='returned'>22 Orders returned out of 200 delivered</p>
        </div>
    </div>
  )
}
