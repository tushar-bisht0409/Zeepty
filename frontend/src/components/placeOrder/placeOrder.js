import "./placeOrder.css";
import "../priceDetails/priceDetails"
import React, { useEffect, useState } from "react";
import PriceDetails from "../priceDetails/priceDetails";

const PlaceOrder = () => {

    return (
        <div>
            <div className="company-logo">
                <img className="logo" src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="company-logo" />
            </div>
            <div className="cart-steps">
                <div className="steps">
                    <div className="step-description">
                        <div className="step1">1</div>
                        <p className="step-p">Address</p>
                    </div>
                    <div class="step-description">
                        <div className="step1">2</div>
                        <p className="step-p">Payment</p>
                    </div>
                    <div class="step-description">
                        <div className="step1">3</div>
                        <p className="step-p">Order Confirmed</p>
                    </div>
                </div>
            </div>

            <div className="address-price-section">
                <div className="address">

                    <div className="add-new-address-1">
                        <p className="address-p-1">Select delivery Address</p>
                        <div class="add-button-1"> + Add new address</div>
                    </div>

                    <div className="current-address">
                        <div className="radio-button">
                            <input type="radio" className="radio-button-1" checked="unchecked" name="radio" />
                            <label className="name-container"> DIPANSHU
                                {/* <span className="checkmark"></span> */}
                            </label>
                            <i id="home-icon-1" className="fa fa-home"></i>
                            <p className="p-home">HOME</p>
                        </div>
                        <div className="address-line">
                            <p>Address line 1</p>
                            <p>Address line 2</p>
                            <p>Mobile No. : 123456789</p>
                        </div>

                        <div className="remove-edit-container">
                            <div className="remove-button">
                                <i id="trash-icon" className="fa fa-trash"></i>
                                <p className="p-remove-edit">REMOVE</p>
                            </div>
                            <div className="edit-button">
                                <i id="edit-icon" className="fa fa-edit"></i>
                                <p className="p-remove-edit">EDIT</p>
                            </div>
                        </div>
                    </div>

                    <div className="add-new-address-2">
                        <div className="add-new-address-2-p">+ ADD A NEW ADDRESS</div>
                    </div>
                </div>
                <div className="priceDetails">
                    <PriceDetails></PriceDetails>
                </div>
            </div>



        </div>
    );
};

export default PlaceOrder;