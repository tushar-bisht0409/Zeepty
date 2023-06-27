import React from 'react'
import "./availability.css"

const availability = () => {
  return (
    <div className="modalContainer">
          <div className="modalTitle">
            Check Availability
          </div>
        <div className="modaldesc">
              <div className="inputDesc">
              <input className='inputPlaceholder' type="text" placeholder="Enter PinCode" />
              </div>
                <div className='button'>Check</div>
        </div>
    </div>
  )
}

export default availability