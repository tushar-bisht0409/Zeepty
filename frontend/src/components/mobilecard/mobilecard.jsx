import React from 'react'
import logo from "./logo.jpg";
import "./mobilecard.css"
const mobilecard = () => {
  return (
    <div className="mobile_card_cardContainer">
          
      <div className="mobile_card_ImageContainer">
        <img className="mobile_card_cardImage" src={logo} alt="logos" />
        <div className="mobile_card_cardWishlist"><i class="fa-regular fa-heart fa-2x"></i></div>
      </div>
      <div className="mobile_card_categoryContainer">
        <p className="mobile_card_cardTitle">Boat</p>
        <p className="mobile_card_carddesc">Wireless Headphones</p>
        <div className="mobile_card_card-Price">
          <div className="mobile_card_discountPrice">1200</div>
          <s className="mobile_card_actualPrice">2000</s>
          <div className="mobile_card_discount-Percent">{`(50%)`}</div>
         </div>       
        <div className="mobile_card_card-Rating">
          <div className="mobile_card_ratingStars"><i style={{alignSelf: 'center', margin: '4px' , fontSize: '10px', color: "orange"}} className="mobile_card_fa-solid fa-star" /></div>
          <div className="mobile_card_rating-Reviews">{`(1000)`}</div>
        </div>
        
      </div>
    </div>
  )
}

export default mobilecard