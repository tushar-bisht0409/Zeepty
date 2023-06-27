import "./mpriceDetails.css";

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

const MPriceDetails = (props) => {  
    
    const routeTo = ()=>{
        window.open(`/address`,"_self");
      }

    return (
        <div ref={props.priceRef} className="mbigBox">
            <p className="mprice-detail">
                PRICE DETAILS
            </p>
            <div className="mbody">
                <div className="mprice">
                    <p className="mpr1">Price ({props.data.length} items)</p>
                    <p className="mpr2">{props.mrp}</p>
                </div>
                <div className="mdiscount">
                    <p className="mdis1">Discount</p>
                    <p className="mdis2">{props.mrp-props.price}</p>
                </div>
                <div className="mdelivery-charges">
                    <p className="mdc1">Delivery Charges</p>
                    <p className="mdc2">0</p>
                </div>

                <div className="mtotalAmount">
                    <p className="ta1">TOTAL AMOUNT </p>
                    <p className="ta2">{props.price}</p>
                </div>

            </div>


            {/* <div onClick={routeTo} className="mplace-order">
                PLACE ORDER
            </div> */}
        </div>
    );
};


function mapStateToProps(state) {
    const cartProduct = state.cartProduct;
    let data = cartProduct.cartProduct;
    let totalPrice = 0;
    let totalMrp = 0;
    for(let i=0;i<data.length;i++){
        totalPrice+=(data[i].price * data[i].quantity);
        totalMrp+= (data[i].mrp * data[i].quantity);
    }
    return {data: data, mrp: totalMrp, price: totalPrice };
  }
export default connect(mapStateToProps)(MPriceDetails);