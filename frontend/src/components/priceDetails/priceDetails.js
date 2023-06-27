import "./priceDetails.css";

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

const PriceDetails = (props) => {  
    
    const routeTo = ()=>{
        window.open(`/address`,"_self");
      }

    return (
        <div className="bigBox">
            <p className="price-detail">
                PRICE DETAILS
            </p>
            <div className="body">
                <div className="price">
                    <p className="pr1">Price ({props.data.length} items)</p>
                    <p className="pr2">{props.mrp}</p>
                </div>
                <div className="discount">
                    <p className="dis1">Discount</p>
                    <p className="dis2">{props.mrp-props.price}</p>
                </div>
                <div clasName="delivery-charges">
                    <p className="dc1">Delivery Charges</p>
                    <p className="dc2">0</p>
                </div>

                <div className="totalAmount">
                    <p>TOTAL AMOUNT </p>
                    <p>{props.price}</p>
                </div>

            </div>


            <div onClick={routeTo} className="place-order">
                PLACE ORDER
            </div>
        </div>
    );
};


function mapStateToProps(state) {
    const cartProduct = state.cartProduct;
    let data = cartProduct.cartProduct;
    let totalPrice = 0;
    let totalMrp = 0;
    console.log("Cp: ",cartProduct)
    for(let i=0;i<data.length;i++){
        totalPrice+=(data[i].price * data[i].quantity);
        totalMrp+= (data[i].mrp * data[i].quantity);
    }
    return {data: data, mrp: totalMrp, price: totalPrice };
  }
export default connect(mapStateToProps)(PriceDetails);