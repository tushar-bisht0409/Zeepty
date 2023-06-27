import React from 'react'
import logo from './logo.jpg'
import "./placeOrderMobile_page.css"

const placeOrderMobile_page = () => {
  return (
    <div className='place-Order-Mobile-Container'>
        <div className="menu">Menue</div>
            <div className="place-Order-Mobile-cart-steps">
                <div className="place-Order-Mobile-steps">
                    <div className="place-Order-Mobile-step-description">
                        <div className="place-Order-Mobile-step1">1</div>
                        <p className="place-Order-Mobile-step-p">Address</p>
                    </div>
                    <div class="place-Order-Mobile-step-description">
                        <div className="place-Order-Mobile-step1">2</div>
                        <p className="place-Order-Mobile-step-p">Payment</p>
                    </div>
                    <div class="place-Order-Mobile-step-description">
                        <div className="place-Order-Mobile-step1 unvisited">3</div>
                        <p className="place-Order-Mobile-step-p">Order Confirmed</p>
                    </div>
                </div>
             </div>
            <div className="place-Order-Mobile-giftCard">
                <h1 className='place-Order-Mobile-title'>Gifting And Personalization</h1>
                <div className="place-Order-Mobile-giftContainer">
                <div className="place-Order-Mobile-contentContainer">
                    <div className="img-container">

                    <img className='place-Order-Mobile-img' src={logo} alt="logo" />
                    </div>
                    <div className="place-Order-Mobile-details">
                        <p className="place-Order-Mobile-message">Want To Gift Someone</p>
                        <span className="place-Order-Mobile-message-sm">Gift Wrap and Write  a message</span>
                        <div className="place-Order-Mobile-message-container">
                        <input type="text" className='place-Order-Mobile-field-message'/>
                        </div>
        
                    </div>
                </div>
            <div className="place-Order-Mobile-btn-container">
                <button className='place-Order-Mobile-gift-btn'>Add Gift Card</button>
            </div>
            </div>
            </div>
            
            
            <div className="place-Order-Mobile-bigBox">

            <p className="place-Order-Mobile-price-detail">
                PRICE DETAILS
            </p>

            <div className="place-Order-Mobile-body">
                <div className="place-Order-Mobile-price">
                    <p>Price (2 items)</p>
                    <p>$500000</p>
                </div>
                <div className="place-Order-Mobile-discount">
                    <p>Discount</p>
                    <p>$5000</p>
                </div>
                <div clasName="place-Order-Mobile-delivery-charges">
                    <p>Delivery Charges</p>
                    <p>$500</p>
                </div>

                <div className="place-Order-Mobile-total">
                    <p>TOTAL AMOUNT </p>
                    <p>$45500</p>
                </div>

            </div>


            <div className="place-Order-Mobile-place-order">
                PLACE ORDER
            </div>
         </div>

        
    </div>
  )
}

export default placeOrderMobile_page