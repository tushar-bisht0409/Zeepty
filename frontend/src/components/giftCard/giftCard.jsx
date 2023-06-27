import React from 'react'
import logo from "./logo.jpg";
import "./giftCard.css"
const giftCard = () => {
  return (
      <div className="giftCard">
        <h1 className='title'>Gifting And Personalization</h1>
        <div className="giftContainer">
            <div className="contentContainer">
                <img className='img' src={logo} alt="logo" />
                <div className="details">
                    <p className="message">Want To Gift Someone</p>
                    <span className="message-sm">Gift Wrap and Write  a message</span>
                </div>
            </div>
            <div className="btn-container">
                <button className='gift-btn'>Add Gift Card</button>
            </div>
        </div>
      </div>
  )

}

export default giftCard